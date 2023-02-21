import React from 'react'
import { Box, Paper, Table, TableCell, TableHead, Typography } from '@mui/material'
import ReadProfile from '../../hooks/ReadProfile'

const ProfileDashboard = () => {

    const profile = ReadProfile()

    
    return (
        <>
            <Box>
                <Paper sx={{ width: '50%' , padding: 4}} elevation={0}>
                <Typography color='primary' variant='h4' sx={{padding: 2}}>Profile Details</Typography>
                    <Table >
                        <TableHead>
                            <TableCell sx={{borderBottom:'none', fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>:</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>{profile.firstName} {profile.lastName}</TableCell>
                        </TableHead>
                        <TableHead>
                            <TableCell sx={{borderBottom:'none', fontWeight: 'bold'}}>Email</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>:</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>{profile.email}</TableCell>
                        </TableHead>
                        <TableHead>
                            <TableCell sx={{borderBottom:'none', fontWeight: 'bold'}}>Phone</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>:</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>{profile.phone}</TableCell>
                        </TableHead>
                        <TableHead>
                            <TableCell sx={{borderBottom:'none', fontWeight: 'bold'}}>Address</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>:</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>Bhawal Mirzapur</TableCell>
                        </TableHead>
                        <TableHead>
                            <TableCell sx={{borderBottom:'none', fontWeight: 'bold'}}>City</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>:</TableCell>
                            <TableCell sx={{borderBottom:'none'}}>Gazipur.</TableCell>
                        </TableHead>
                    </Table>
                </Paper>
            </Box>
        </>
    )
}

export default ProfileDashboard