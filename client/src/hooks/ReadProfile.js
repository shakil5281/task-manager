import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken } from '../helper/sessionStorege'

const AxiosHeader = { headers: { "token": getToken() } }

const ReadProfile = () => {
    const params = useParams()
    const url = params.status

    const [profile, setprofile] = React.useState({})

    const DataTask= async(status) =>{
        try{
            const {data} = await axios.get('/profile', AxiosHeader)
            setprofile(data.data)
            if(status === 200){
                DataTask(url)
            }
        }catch(err){
            console.error(err)
        }
    }


    React.useEffect(()=>{
        DataTask(url)
    }, [])

    return profile
}

export default ReadProfile