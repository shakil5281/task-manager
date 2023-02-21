import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loding() {
  return (
    <Box sx={{ width: '100%',position: 'absolute', zIndex: 100, top: 0, left: 0 }}>
      <LinearProgress />
    </Box>
  );
}

