import React from 'react'
import Loding from '../components/layout/Loding'


const Error = () => {
  return (
    <>
    <React.Suspense fallback={<Loding />}>
    <div>Error</div>
    </React.Suspense>
    </>
  )
}

export default Error