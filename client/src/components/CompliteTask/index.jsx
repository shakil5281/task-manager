import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import TaskTool from '../tools/TaskTool'
import ReadTask from '../../hooks/ReadTask'

const CompliteTask = () => {
    const task = ReadTask()
  return (
    <>
    <Typography variant='h4' sx={{color: 'gray'}}>
       Complite Task
    </Typography>
        <Box component={'div'} sx={{display: 'flex' , flexWrap: 'wrap'}}>
        {
                Array.from(task).map((task, i) =>(
                    <Paper key={task._id} elevation={0} sx={{width: '25%', margin:3, boxShadow: '2px 12px 15px 0px #46464612'}}>
                        <TaskTool task= {task}/>
                    </Paper>
                ))
            }
        </Box>
    </>
  )
}

export default CompliteTask