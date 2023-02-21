import { Typography } from '@mui/material'
import React from 'react'
import Loding from '../components/layout/Loding'


const Error = () => {
  return (
    <>
    <React.Suspense fallback={<Loding />}>
    <Typography variant='h5' sx={{display: 'flex' , justifyContent: 'center', color: '#c9c9c9', marginTop: 30, marginRight: 40}}>
      Page Not Found || 404
    </Typography>
    </React.Suspense>
    </>
  )
}

export default Error