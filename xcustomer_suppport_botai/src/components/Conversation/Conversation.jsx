import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {convertTimestampToTime} from '../../utils';
import Card from '../Card/Card';
const Conversation = ({details}) => {
  return (
    <Box>
        <Typography fontWeight={700} mb={2} >
            {convertTimestampToTime(new Date(details.datetime))}
        </Typography>

        <Stack spacing={{xs:2, md:3}}>

            {details.chat.map((item, index) => (
                <Card details={item} readOnly={true} key={index} />
            ))}

        </Stack>
    </Box>
  )
}

export default Conversation