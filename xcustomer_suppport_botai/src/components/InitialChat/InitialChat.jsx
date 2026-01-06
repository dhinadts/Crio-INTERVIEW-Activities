import React from 'react'
import { Box, Typography, Stack, Grid2 } from '@mui/material'
import CenterLogo from '../../assets/center-logo.png';
import Card from './Card';

const InitialChat = ({ generateResponse }) => {
    const initialData = [
        {
            heading: 'Hello',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'My order has not arrived yet',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'How can I reset my password?',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'I am unable to login to my account.',
            subtext: 'Get immediate AI generated response'
        },
    ]
    return (
        <Stack height={1} justifyContent={'flex-end'} p={{ xs: 2, md: 3 }}>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h2'>
                    Hi, Please tell me your query!
                </Typography>
                <Box
                    component={'img'}
                    src={CenterLogo}
                    height={{ xs: 42, md: 70 }}
                    width={{ xs: 42, md: 70 }}
                    boxShadow={4}
                    borderRadius={'50%'}
                />
            </Stack>
            <Grid2 container spacing={{ xs: 1, md: 3 }}>
                {initialData.map(item => (
                    <Grid2 key={item.heading} size={{ xs: 12, md: 6 }}>
                        <Card heading={item.heading} subheading={item.subtext} handleClick={generateResponse} />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    )
}

export default InitialChat
