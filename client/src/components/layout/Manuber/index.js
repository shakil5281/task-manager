import React from 'react'
import { AppBar, Avatar, Badge, Box, Button, IconButton, Menu,  MenuList, Toolbar, Tooltip } from '@mui/material'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { manuLinks } from '../../navLinks';
import ReadProfile from '../../../hooks/ReadProfile';




const Navber = () => {
    const styles = {
        mainContainer: {
            width: { lg: '80%', md: '75%' },
            backgroundColor: '#fff',
            boxShadow: 'none',
            padding: 1,
            marginTop: {xs: 0,lg: 1}
        }
    }


    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const profile = ReadProfile()


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1, position: 'fixed'}}>
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
                            {/* <Avatar
                                    sx={{ width: 24, height: 24 }}
                                    alt="Remy Sharp" src={avaterImg} /> */}
                            <Box sx={{ display: 'inline ' }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                        <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src='/upload/avatar_default.jpg' />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {manuLinks.map((manu, i) => (
                                        <MenuList key={i.toString()} onClick={handleCloseUserMenu}>
                                           
                                                <Button LinkComponent={Link} to={`${manu.id}`} sx={{padding: '10px 30px', color: 'gray', width: '100%', textTransform: 'capitalize'}} variant="text" startIcon={manu.icon}>
                                                    <span style={{padding: '0 20px'}}>{manu.title}</span>
                                                </Button>
                                           
                                        </MenuList>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navber