import React from 'react'
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { Link } from 'react-router-dom';
import { BsFillKeyFill } from 'react-icons/bs';
import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';
import { getEmail, getOTP } from '../../helper/sessionStorege';
import KeyIcon from '@mui/icons-material/Key';


const ChangePassword = () => {

  

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  const [inputs, setInputs] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const sentEmailOTP = async () => {
    try {
      setLoading(true)
      await axios.post('/passwordreset', {email: getEmail(), OTP: getOTP(), password: inputs.password})
      setLoading(false)
      enqueueSnackbar('Password Change Successfull', { variant: 'success' });
      navigate('/users/login')
    } catch (err) {
      setLoading(false)
      enqueueSnackbar(err.response.data.data, { variant: 'error' });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sentEmailOTP()
  }

  React.useEffect(()=>{
    getEmail()
  })
  return (
    <>
      <Box component={'div'} sx={{ padding: '30px 25px', lineHeight: '20px' }}>
        <IconButton LinkComponent={Link} to='/' size='large' color='primary'>
          <AirplayTwoToneIcon />
        </IconButton>
      </Box>
      <Paper component={'form'} onSubmit={handleSubmit} sx={{ width: '400px', margin: '0 auto', padding: 2 }} elevation={0}>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          <BsFillKeyFill />
        </Typography>
        <Typography sx={{ textAlign: 'center', margin: '15px 0', fontWeight: 'bold', fontSize: '1.7rem' }}>
          Change New Password
        </Typography>
        <Typography variant='body2' sx={{ padding: '10px 30px', textAlign: 'center' }}>
          Please enter the email address associated with your account and We will email you a link to reset your password.
        </Typography>
        <TextField
          name="email"
          value={getEmail()}
          variant='outlined' color='success' sx={{ marginTop: 4, display: 'block' }} label='Email Address' fullWidth disabled defaultValue="Disabled" />
        <TextField
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          variant='outlined' color='success' sx={{ marginTop: 4, display: 'block' }} label='New Password' fullWidth />
        <LoadingButton
          loading={loading}
          loadingPosition="center"
          color='secondary'
          type='submit' variant='contained' sx={{ marginTop: 4, display: 'block', width: '100%', padding: 2 }}>Change</LoadingButton>
        <Link to='/users/login'><span style={{ margin: '30px 0', display: 'block', width: '100%', textAlign: 'center', padding: 5, fontWeight: '600', fontSize: '.8rem', color: 'black' }}>
          Return to Login</span></Link>
      </Paper>

    </>
  )
}

export default ChangePassword