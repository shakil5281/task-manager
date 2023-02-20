import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const CancelTask = React.lazy(()=>import('../components/CancelTask'))

const Canceled = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <CancelTask />
      </Suspense>
    </>
  )
}

export default Canceled