import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
import OTPSentVerify from '../components/RecoveryPassword/OTPverify'

const OTPverify = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <OTPSentVerify/>
      </Suspense>
    </>
  )
}

export default OTPverify