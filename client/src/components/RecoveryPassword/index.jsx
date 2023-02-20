import React from 'react'
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { Link } from 'react-router-dom';
import { FcLock } from 'react-icons/fc';


const RecoveryPassword = () => {
  return (
    <>
      <Box component={'div'} sx={{ padding: '30px 25px', lineHeight: '20px' }}>
        <IconButton LinkComponent={Link} to='/' size='large' color='primary'>
          <AirplayTwoToneIcon />
        </IconButton>
      </Box>
      <Paper sx={{ width: '400px', margin: '0 auto', paddingTop: 5 }} elevation={0}>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          <FcLock />
        </Typography>
        <Typography sx={{ textAlign: 'center', margin: '15px 0', fontWeight: 'bold', fontSize: '1.7rem' }}>
          Forgot your password?
        </Typography>
        <Typography variant='body2' sx={{padding: '10px 30px' , textAlign: 'center'}}>
          Please enter the email address associated with your account and We will email you a link to reset your password.
        </Typography>
        <TextField variant='outlined' color='success' sx={{marginTop: 4, display: 'block'}} label='Email Address' fullWidth />
        <Button variant='contained' sx={{marginTop: 4, display: 'block', width: '100%', padding: 2}} disableElevation>Send Request</Button>
        <Link to='/users/login'><span style={{margin: '30px 0', display: 'block', width: '100%',  textAlign: 'center', padding: 5, fontWeight: '600', fontSize: '.8rem', color: 'black'}}>
          Return to Login</span></Link>
      </Paper>

    </>
  )
}

export default RecoveryPassword