import React from 'react'
import axios from 'axios';
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import { getToken } from '../../helper/sessionStorege';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const AxiosHeader = { headers: { "token": getToken() } }

const CreateTask = () => {
  const [inputs, setInputs] = React.useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const NewTaskCreate = async() =>{
    try{
      await axios.post('/createTask', inputs, AxiosHeader)
      enqueueSnackbar('Task create success', { variant: 'success' });
      navigate('/task/task')

    }catch(err){
      console.log(err)
      enqueueSnackbar('Task Create Fail.', { variant: 'error' });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    NewTaskCreate()
  }
  return (
    <>
      <Box>
        <Paper component={'form'} onSubmit={handleSubmit} elevation={0} sx={{ padding: 4, boxShadow: '2px 5px 16px 20px #00000005', width: '90%' }}>
          <Typography variant='h5'>
            <BookmarkAddTwoToneIcon /> Create a new task
          </Typography>
          <TextField
            name="task"
            value={inputs.task || ""}
            onChange={handleChange}
            sx={{ marginTop: 3 }} label='Task name' fullWidth />
          <TextField
            name="desc"
            value={inputs.desc || ""}
            onChange={handleChange}
            sx={{ marginTop: 3 }} label='Task Description' fullWidth multiline rows={6} />
          <Button type='submit' variant='text' color='secondary' sx={{ marginTop: 3, textTransform: 'capitalize' }}>Create</Button>
        </Paper>
      </Box>
    </>
  )
}

export default CreateTask