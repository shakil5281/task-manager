import React from 'react'
import Navber from './Manuber'
const Sidebar = React.lazy(()=> import('./Sideber'))

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Navber />
    </>
  )
}

export default Layout