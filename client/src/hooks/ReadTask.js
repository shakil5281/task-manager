import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken } from '../helper/sessionStorege'

const AxiosHeader = { headers: { "token": getToken() } }


const ReadTask = () => {
    const params = useParams()
    const url = params.status

    const [task, settask] = React.useState({})

    const DataTask= async(status) =>{
        try{
            const {data} = await axios.get('/read/' + status, AxiosHeader)
            settask(data.data)
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

    return task
}

export default ReadTask