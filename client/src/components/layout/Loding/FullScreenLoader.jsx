import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function FullScreenLoader() {
    const style ={
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  );
}