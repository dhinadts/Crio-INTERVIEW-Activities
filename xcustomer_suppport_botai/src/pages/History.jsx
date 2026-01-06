import React, { useEffect, useState } from 'react'
import { Typography, Box, Select, MenuItem, Stack, Divider } from '@mui/material'
import Header from '../components/Header/Header'
import Conversation from '../components/Conversation/Conversation';
const History = () => {
    const [chats, setChats] = useState([]);
    const [filteredChats, setFilteredChats] = useState([]);
    const [option, setOption] = useState('All Ratings')

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    useEffect(() => {
        if (option === 'All Ratings') {
            setFilteredChats(chats)
        }
        else 
        {
            const filtered = chats.filter(item => {
                let found = false
                item.chat.forEach(ch => {
                    if (ch.rating === option) {
                        found = true
                    }
                })
                return found
            })
            setFilteredChats(filtered)
        }

    }, [option, chats])

    useEffect(() => {
        const localChats = localStorage.getItem('chat') || []
        if (localChats.length > 0) {
            setChats(JSON.parse(localChats))
            setFilteredChats(JSON.parse(localChats))
        }
    }, [])
  return (
    <Box
        height={'100vh'}
        overflow={'hidden'}
        sx={{
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '10px',
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(151, 133, 186,0.4)',
                borderRadius: '8px'
            }
        }}
    >
      <Header />
      
      <Box p={{xs:2, md:3}}>
        <Typography variant='h2' textAlign={'center'} mb={3}>Conversation History</Typography>
        {chats.length > 0 && (
            <Stack direction={'row'} spacing={{ xs: .5, md: 2 }} justifyContent={'center'} alignItems={'center'}>
                <Box mb={3} >
                    <Typography fontSize={12} mb={0.5}>
                        Filter by rating
                    </Typography>
                    <Select
                        value={option}
                        onChange={handleChange}
                        size='small'
                        sx={{
                            minWidth: { xs: 1, md: 160 },
                        }}
                    >
                        <MenuItem value='All Ratings'>All Ratings</MenuItem>
                        <MenuItem value={1}>1 Star</MenuItem>
                        <MenuItem value={2}>2 Stars</MenuItem>
                        <MenuItem value={3}>3 Stars</MenuItem>
                        <MenuItem value={4}>4 Stars</MenuItem>
                        <MenuItem value={5}>5 Stars</MenuItem>
                    </Select>
                </Box>
            </Stack>
            
        )}
        
        {chats.length === 0 && (
            <Typography
                textAlign={'center'}
                p={3}
                bgcolor={'primary.light'}
                borderRadius={2}
            >
                No saved chats.
            </Typography>
        )}

        {chats.length > 0 && filteredChats.length === 0 && (
            <Typography
                textAlign={'center'}
                p={3}
                bgcolor={'primary.light'}
                borderRadius={2}
            >
                No such chats.
            </Typography>
        )}
        
        {filteredChats.length > 0 && (
            <Stack
                spacing={4}
                divider={<Divider sx={{ borderColor: 'primary.bg', opacity: 0.4 }} />}
            >
                {filteredChats.map((item, index) => (
                    <Conversation details={item} key={index} />
                ))}
            </Stack>
        )}
      </Box>
    </Box>
  )
}

export default History
