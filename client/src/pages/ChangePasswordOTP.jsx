import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
import ChangePassword from '../components/RecoveryPassword/ChangePassword'


const OTPverify = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <ChangePassword />
      </Suspense>
    </>
  )
}

export default OTPverify