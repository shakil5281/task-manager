import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'

const OTPverify = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <div>OTPverify</div>
      </Suspense>
    </>
  )
}

export default OTPverify