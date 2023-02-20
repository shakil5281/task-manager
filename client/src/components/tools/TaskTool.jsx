import React from 'react'
import axios from 'axios'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Slide, Stack, Typography } from '@mui/material'
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { getToken } from '../../helper/sessionStorege';
import { Link } from 'react-router-dom'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TaskTool = ({ task }) => {
  const [open, setOpen] = React.useState(false);
  const [uopen, setuopen] = React.useState(false)
  const [age, setAge] = React.useState('');

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
    setAge(event.target.value);
  };

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
        <Box component={'div'} sx={{padding:1, width: '400px'}}>
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
                value={age}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Box component={'div'} sx={{marginTop: 4}}>
              <Button sx={{float: 'right', display: 'flex'}} onClick={handleCloseUpdate}>Update</Button>
              <Button sx={{float: 'right', display: 'flex'}} onClick={handleCloseUpdate}>Cancel</Button>
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