import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const RecoveryPassword = React.lazy(()=>import('../components/RecoveryPassword'))

const Recovery = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <RecoveryPassword />
      </Suspense>
    </>
  )
}

export default Recovery