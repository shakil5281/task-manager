import React from 'react'
import { Avatar, Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import AirplayTwoToneIcon from '@mui/icons-material/AirplayTwoTone';
import { navLinks } from '../../navLinks';
import { Link, NavLink } from 'react-router-dom';
const avaterImg = 'https://avatars2.githubusercontent.com/u/23334644?v=4'


const Sidebar = () => {
  const styles = {
    mainContainer: {
      position: 'fixed',
      height: '100vh',
      width: {lg:'15%', md: '25%', sm: '0'},
      borderRight: '1px dotted #50506491',
      display: {lg: 'block', md: 'block', sm: 'none', xs:'none'}

    },
    mainManuIcon: {
      padding: '10px',
      display: 'block'
    },
    ProfileManu: {
      display: 'flex',
      padding: '20px 10px',
      borderRadius: '10px',
      backgroundColor: 'rgba(19, 105, 234, 0.11)'
    },
    manuItem: {
      marginTop: '35px'
    }
  }


  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };




  return (
    <>
      <Box component={'div'} sx={styles.mainContainer} >
        <Box component={'div'}>
          <Box sx={{padding: '10px 15px'}}>
            <Typography
              sx={styles.mainManuIcon}
              variant='h4' >
              <IconButton component={Link} to='/' color='primary'>
              <AirplayTwoToneIcon />
              </IconButton>
            </Typography>
            <Box
              sx={styles.ProfileManu}
            >
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp" src={avaterImg} />
              <Typography
                sx={{ padding: '6px', fontSize: 14, fontWeight: 'bold', color: '#f40095', marginLeft: 1 }}
                variant='body' color='primary'>
                Shakil Hossen 
              </Typography>
              
            </Box>
          </Box>
          <Box sx={{padding: '0 8px'}}>
              <List
                sx={styles.manuItem}
              >
                {
                  navLinks.map((item,i) => (
                    <ListItem component={NavLink} to={`${item.id}`}  key={i.toString()}  
                    sx={{ padding: '0', fontFamily: 'Source Sans Pro'  }}>
                      <ListItemButton
                      selected={selectedIndex === i}
                      onClick={(event) => handleListItemClick(event, i)}
                      sx={{ color: '#7b7171', borderRadius: 1 }}>
                        <IconButton sx={{marginRight: 2}}>
                        {item.icon}
                        </IconButton>
                        <ListItemText primaryTypographyProps={{
                          fontWeight: 'medium',
                          variant: 'body2',
                        }} primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
            <Box>
              <img style={{width: '100%', padding: '40px', marginTop: 100, opacity: '.8'}} src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='sideber'/>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar