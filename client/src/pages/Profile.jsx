import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileLayout from '../components/ProfileLayout'

const Profile = () => {
  return (
    <>
      <ProfileLayout />
      <Box sx={{ position: 'absolute', paddingLeft: '20%', paddingTop: '7%', zIndex: -1, width: '100%' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Profile