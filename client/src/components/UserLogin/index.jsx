import React from 'react'
import { Box, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { setToken } from '../../helper/sessionStorege';


const UserLogin = () => {
  const [inputs, setInputs] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }



  const userLogin = async () => {
    try {
      setLoading(true)
      const {data} =  await axios.post('/signin', inputs)
      setToken(data.Token)
      enqueueSnackbar('Login success', { variant: 'success' });
      setLoading(false)
      navigate(0)
    } catch (err) {
      enqueueSnackbar( err.response.data.Message , { variant: 'error' });
      setLoading(false)
    }

  }



  const handleSubmit = (event) => {
    event.preventDefault();
    userLogin();
  }





  return (
    <Box component={'div'} sx={{ display: 'flex', height: '100%', position: 'absolute', width: '100%' }}>
      <Box component={'div'} sx={{ width: '75%', background: 'whitesmoke' }}>
        <Stack sx={{ margin: '0 auto', justifyContent: 'center', display: 'block', padding: 6 }}>
          <IconButton LinkComponent={Link} to='/' color='primary' size='large'>
            <AirplayTwoToneIcon />
          </IconButton>
          <Typography sx={{ textAlign: 'center', margin: '25px 0', fontWeight: '600' }} variant='h4'>
            Welcome back
          </Typography>
          <Box>
            <img style={{ margin: '0 auto', justifyContent: 'center', display: 'flex' }} src="https://minimals.cc/assets/illustrations/illustration_dashboard.png" alt="loginPage" />
          </Box>
        </Stack>
      </Box>
      <Box component={'div'} sx={{ width: '25%' }}>
        <Paper component={'form'} onSubmit={handleSubmit} elevation={0} sx={{ marginTop: 30, padding: 6 }}>
          <Typography sx={{ fontWeight: '600', margin: '25px 0' }} variant='h5'>
            Sign in to Minimal
          </Typography>
          <Box sx={{ margin: '20px 0' }}>
            <Typography variant='body2'>
              New user?<Link to='/users/signup'> <span style={{ color: '#7ccb7c', textDecoration: 'none', fontWeight: 'bold' }}>Create an account</span></Link>
            </Typography>
          </Box>
          <TextField
            required
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            color='secondary' sx={{ marginTop: 3 }} label='Email Address' fullWidth />
          <TextField
            required
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            color='secondary' sx={{ marginTop: 3 }} label='Password' fullWidth />
          <Box sx={{ marginTop: 2 }}>
            <Link to='/users/recovery'><span style={{ float: 'right', fontWeight: 'bold', color: 'black', fontSize: '.9rem', textDecoration: 'underline' }}>Forget Password?</span></Link>
          </Box>
          <Box component={'div'} sx={{ display: 'block' }}>
            <LoadingButton variant='contained' sx={{ marginTop: 3, textTransform: 'capitalize', width: '100%', dispaly: 'block', padding: 2 }}
              loading={loading}
              loadingPosition="center"
              color='secondary' type='submit' disableElevation>
              Login
            </LoadingButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default UserLogin