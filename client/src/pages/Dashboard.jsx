import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const Summary = React.lazy(()=>import('../components/Dashboard/index'))


const Dashboard = () => {
  return (
    <>
    <Suspense fallback={<Loding />}>
      <Summary />
    </Suspense>
    </>
  )
}

export default Dashboard