import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../theme/ThemeContext';
import { Box, Typography, Button, Stack } from '@mui/material';
import Logo from '../../assets/logo.png';
import PostAddIcon from '@mui/icons-material/PostAdd';

const SideNav = ({setChat, closeMenu}) => {
    const { mode } = useContext(ThemeContext)
  return (
    <>
        <Box 
            component="div" 
            sx={{ 
                width: { xs: '100%', md: '100%' }, 
                height:'47px', 
                padding: '0px 0px', 
                display: { xs: 'block' },
            }}
            >
            <Box sx={{ flexGrow: 1 }} >
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Stack
                        onClick={() => {
                            setChat([])
                            closeMenu()
                        }}
                        sx={{
                            bgcolor: 'primary.main',
                            '&:hover ': {
                                bgcolor: 'primary.bg'
                            }
                        }}
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        py={1}
                        px={{xs:2, md:3}}
                    >
                        <img src={Logo} width={33.58} height={32} style={{ borderRadius: '10px'}} alt='logo' />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '22.98px',
                                color: mode === 'light' ? 'text.primary' :'text.primary',
                                position: 'relative',
                                textDecoration: 'none',
                            }}
                            >
                            New Query?
                            <PostAddIcon style={{ 
                                marginLeft: '25px', 
                                marginTop: '-5px', 
                                verticalAlign: 'middle',
                                color: mode === 'light' ? 'text.primary' :'text.primary',
                            }} />                        
                        </Typography>
                    </Stack>
                </Link>
            </Box>
            <Box 
                component="div" 
                sx={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                <Link to={'/history'} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" onClick={closeMenu} sx={{
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '16px',
                        lineHeight: '18.38px',
                        color: '#414146',
                        width: '100%',
                        height: '39px',
                        borderRadius: '10px',
                        backgroundColor: mode === 'light' ? 'primary.dark' :'text.primary',
                    }}>
                        Past Conversations
                    </Button>
                </Link>
            </Box>
        </Box>        
    </>
  )
}

export default SideNav
