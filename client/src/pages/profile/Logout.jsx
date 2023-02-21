import React from 'react'
import { removeSessions } from '../../helper/sessionStorege'

const Logout = () => {
   const  ProfileLogout = () =>{
    removeSessions()
   }

    React.useEffect(()=>{
        ProfileLogout()
    })
}

export default Logout