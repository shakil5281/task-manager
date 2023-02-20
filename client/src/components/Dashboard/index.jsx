import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import { getToken } from '../../helper/sessionStorege'




const AxiosHeader = { headers: { "token": getToken() } }


const Summary = () => {

    const [data, setsummary] = React.useState({})

    const SummaryCount = async () => {
        try {
            const { data } = await axios.get('/summary', AxiosHeader)
            setsummary(data.summary)
        } catch (err) {
            console.log(err.response.data.error)
        }
    }
    React.useEffect(() => {
        SummaryCount()
    }, [])

    console.log(data)

    return (
        <>

            <Box component={'div'} sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                <Box component={'div'} sx={{ padding: 3, margin: 2, background: '#6cffad54', width: '60%', borderRadius: '10px' }}>
                    <Typography sx={{ color: 'gray', fontWeight: 'bold' }} variant='h6'>
                        Welcome Back!
                    </Typography>
                    <Typography sx={{ color: 'gray', fontWeight: 'bold', marginTop: 2 }} variant='h4'>
                        Task Manager UI
                    </Typography>
                    <Typography sx={{ color: 'gray', marginTop: 3 }} variant='body2'>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                    </Typography>
                    <Box component={'div'} sx={{ color: 'gray', marginTop: 3, marginBottom: 3 }}>
                        <Button sx={{ fontSize: '.7rem', backgroundColor: '#4ba94f', textTransform: 'capitalize' }} variant='contained' color='success' size='small' disableElevation>go now</Button>
                    </Box>
                </Box>
                <Box component={'div'} sx={{ padding: 3, margin: 2, background: 'url("https://plus.unsplash.com/premium_photo-1673816936949-5cb8632638b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80")', width: '30%', borderRadius: '10px', backgroundSize: 'cover', opacity: '.5', filter: 'brightness(0.5)' }}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold', filter: 'brightness(0)' }} variant='h5'>
                        Minimal UI
                    </Typography>
                    <Typography sx={{ color: 'white', marginTop: 3, filter: 'brightness(0)' }} variant='body2'>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                    </Typography>
                </Box>
                {
                    Array.from(data).map((item, i) => (
                        <Box key={i.toString()} component={'div'} sx={{ padding: 2, boxShadow: '2px 12px 15px 0px #46464612', margin: 2, background: 'white', width: '20%', borderRadius: '10px' }}>
                            <Typography sx={{ color: 'gray', textAlign: 'center', marginTop: 1, fontWeight: '600' }} variant='body2'>Total {item._id}</Typography>
                            <Typography sx={{ color: 'gray', textAlign: 'center', marginTop: 1, fontWeight: '600', fontSize: '2.3rem' }} variant='h4'>
                                {item.sum}
                            </Typography>
                        </Box>
                    ))
                }
                
            </Box>
        </>
    )
}

export default Summary