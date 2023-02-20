import React from 'react'
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar } from '@mui/material'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
const avaterImg = 'https://avatars2.githubusercontent.com/u/23334644?v=4'

const Navber = () => {
    const styles = {
        mainContainer: {
            width: {lg:'85%', md:'75%'},
            backgroundColor: '#fff',
            boxShadow: 'none',
            paddingTop: 4,
            marginTop: 1

        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, position: 'fixed', marginTop: 2 }}>
                <AppBar sx={styles.mainContainer}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 5 }}>
                            <IconButton
                                sx={{ mr: 2 }}
                                size="large"
                                edge="start"
                                aria-label="menu"
                            >
                                <SearchTwoToneIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <IconButton>
                                <AddTaskIcon />
                            </IconButton>
                            <IconButton>
                            <Badge color="error" badgeContent={0} showZero>
                                <NotificationsIcon />
                            </Badge>
                            </IconButton>
                            <IconButton LinkComponent={Link} to='/users/login'>
                                <Avatar
                                    sx={{ width: 24, height: 24 }}
                                    alt="Remy Sharp" src={avaterImg} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navber