import React, { Suspense } from 'react'
import Loding from '../components/layout/Loding'
const CreateTask = React.lazy(()=>import('../components/CreateTask'))

const Create = () => {
  return (

    <>
      <Suspense fallback={<Loding />}>
        <CreateTask />
      </Suspense>
    </>
  )
}

export default Create