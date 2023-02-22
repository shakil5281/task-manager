import { Box } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ProfileLayout from '../components/ProfileLayout'

const Profile = () => {
    const navigate = useNavigate()

  React.useEffect(()=>{
    navigate('/profile/dashboard')
  }, [])
  return (
    <>
      <ProfileLayout />
      <Box sx={{ position: 'absolute', paddingLeft: {xs: 0,lg:'25%'}, paddingTop: {xs: '20%', lg: '9%'}, zIndex: -1, width: '100%' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Profile