import React from 'react'
import axios from 'axios'
import { Box, Button, Dialog, DialogActions,  DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Slide, Stack, Typography } from '@mui/material'
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { getToken } from '../../helper/sessionStorege';
import { Link, useNavigate } from 'react-router-dom'


const AxiosHeader = { headers: { "token": getToken() } }


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TaskTool = ({ task }) => {
  const [open, setOpen] = React.useState(false);
  const [uopen, setuopen] = React.useState(false)
  const [inputs, setInputs] = React.useState({});

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenUpdate = () => {
    setuopen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdate = () => {
    setuopen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };



  const UpdateStatus = async (id) => {
    try {
      
      await axios.post(`/update/${id}`, inputs, AxiosHeader)
      console.log('status update')
      setuopen(false);
      navigate(0)

    } catch (err) {
      console.error(err);
    }
  }



  const StatusUpdate = (id) => {
    UpdateStatus(id)
  }


  return (
    <>
      <Box component={'div'} sx={{ padding: 3 }}>
        <Typography variant='h6'>{task.task}</Typography>
        <Typography variant='body2'
          sx={{ height: 80, overflow: 'hidden', marginTop: 1 }}
        >
          {task.desc}
        </Typography>

        <Stack sx={{ marginTop: 3 }} direction="row" spacing={2}>
          <IconButton onClick={handleClickOpenUpdate} color='primary'><CreditScoreTwoToneIcon /></IconButton>
          <IconButton onClick={handleClickOpen} color='error'><DeleteTwoToneIcon /></IconButton>
        </Stack>
        <Typography variant='body2'
          sx={{ marginTop: -4, display: 'flex', float: 'right', letterSpacing: 1 }}
        >
          {task.createdAt}
        </Typography>
      </Box>


      {/* For Delete */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
        >{"Are you sure? Delete Your Task"}</DialogTitle>
        <DialogActions
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button LinkComponent={Link} to={`/taskdelete/${task._id}`} onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>



      {/* For Update */}
      <Dialog
        sx={{ padding: '30px' }}
        open={uopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseUpdate}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box component={'div'} sx={{ padding: 1, width: '400px' }}>
          <DialogTitle
          >{"Change Your Task Status"}</DialogTitle>
          <DialogActions
          >
            <Box sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="status"
                  value={task.status || ""}
                  label="Status"
                  onChange={handleChange}
                >
                  {
                    ['task', 'complite', 'progress', 'canceled'].map((status, i) => (
                      <MenuItem key={i.toString()} value={status}>{status}</MenuItem>
                    ))
                  }
                </Select>
                <Box component={'div'} sx={{ marginTop: 4 }}>
                  <Button sx={{ float: 'right', display: 'flex' }} onClick={() => StatusUpdate(task._id)}>Update</Button>
                  <Button sx={{ float: 'right', display: 'flex' }} onClick={handleCloseUpdate}>Cancel</Button>
                </Box>
              </FormControl>
            </Box>
          </DialogActions>
        </Box>
      </Dialog>

    </>
  )
}

export default TaskTool