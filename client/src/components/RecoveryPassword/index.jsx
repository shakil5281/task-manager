import React from 'react'
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { Link } from 'react-router-dom';
import { FcLock } from 'react-icons/fc';
import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack';
import { setEmail } from '../../helper/sessionStorege';


const RecoveryPassword = () => {

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
      await axios.post(`/recovery/${inputs.email}`)
      setLoading(false)
      enqueueSnackbar('OTP sent', { variant: 'success' });
      setEmail(inputs.email)
      navigate('/users/otpverification')
    } catch (err) {
      setLoading(false)
      enqueueSnackbar(err.response.data.data, { variant: 'error' });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sentEmailOTP()
  }
  return (
    <>
      <Box component={'div'} sx={{ padding: '30px 25px', lineHeight: '20px' }}>
        <IconButton LinkComponent={Link} to='/' size='large' color='primary'>
          <AirplayTwoToneIcon />
        </IconButton>
      </Box>
      <Paper component={'form'} onSubmit={handleSubmit} sx={{ width: '400px', margin: '0 auto', paddingTop: 5 }} elevation={0}>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          <FcLock />
        </Typography>
        <Typography sx={{ textAlign: 'center', margin: '15px 0', fontWeight: 'bold', fontSize: '1.7rem' }}>
          Forgot your password?
        </Typography>
        <Typography variant='body2' sx={{ padding: '10px 30px', textAlign: 'center' }}>
          Please enter the email address associated with your account and We will email you a link to reset your password.
        </Typography>
        <TextField
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          variant='outlined' color='success' sx={{ marginTop: 4, display: 'block' }} label='Email Address' fullWidth />
        <LoadingButton
          loading={loading}
          loadingPosition="center"
          type='submit' variant='contained' sx={{ marginTop: 4, display: 'block', width: '100%', padding: 2 }} disableElevation>Send Request</LoadingButton>
        <Link to='/users/login'><span style={{ margin: '30px 0', display: 'block', width: '100%', textAlign: 'center', padding: 5, fontWeight: '600', fontSize: '.8rem', color: 'black' }}>
          Return to Login</span></Link>
      </Paper>

    </>
  )
}

export default RecoveryPassword