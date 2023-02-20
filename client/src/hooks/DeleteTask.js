import React from 'react'
import { getToken } from '../helper/sessionStorege'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'notistack';

const AxiosHeader = { headers: { "token": getToken() } }
const DeleteTask = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();


    const taskDelete = async() =>{
        try{
          axios.get(`/delete/${params.status}`, AxiosHeader)
          enqueueSnackbar('Delete success', { variant: 'success' });
          navigate('/task/task')
        }catch(err){
          enqueueSnackbar('Delete Fail', { variant: 'error' });
          navigate('/task/task')
        }
      }

    React.useEffect(() =>{
        taskDelete()
    }, [])

}

export default DeleteTask