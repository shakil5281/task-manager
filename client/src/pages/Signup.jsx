import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const UserSignup = React.lazy(()=>import('../components/UserSignup'))

const Signup = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <UserSignup />
      </Suspense>
    </>
  )
}

export default Signup