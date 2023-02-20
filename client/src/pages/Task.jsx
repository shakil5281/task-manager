import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const NewTask = React.lazy(()=>import('../components/NewTask'))


const Task = () => {
  return (
    <>
      <Suspense fallback={<Loding />}>
        <NewTask />
      </Suspense>
    </>
  )
}

export default Task