import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const UserLogin = React.lazy(()=>import('../components/UserLogin'))

const Login = () => {
  return (

    <>
      <Suspense fallback={<Loding />}>
        <UserLogin />
      </Suspense>
    </>
  )
}

export default Login