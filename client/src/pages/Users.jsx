import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const Users = () => {
  const navigate = useNavigate()

  React.useEffect(()=>{
    navigate('/users/login')
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default Users