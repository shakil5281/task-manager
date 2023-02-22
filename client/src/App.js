import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Layout from './components/layout'

const App = () => {
  return (
    <>
      <Layout />
      <Box sx={{ position: 'absolute', paddingLeft: {xs: 0,lg:'25%'}, paddingTop: {xs: '20%', lg: '9%'}, zIndex: -1, width: '100%' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default App