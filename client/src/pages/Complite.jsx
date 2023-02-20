import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const CompliteTask = React.lazy(()=>import('../components/CompliteTask'))

const Complite = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <CompliteTask />
      </Suspense>
    </>
  )
}

export default Complite