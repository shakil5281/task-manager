import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const ProgressTask = React.lazy(()=>import('../components/ProgressTask'))

const Progress = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <ProgressTask />
      </Suspense>
    </>
  )
}

export default Progress