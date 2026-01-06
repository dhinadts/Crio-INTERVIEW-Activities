import React, { useEffect, useRef, useState } from 'react'
import { TextField, Box, Button, Stack, Snackbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Chat = ({ generateResponse, setScroll, chat, clearChat }) => {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const [showSnackbar, setShowSnackbar] = useState(false)

    const handleSave = () => {
        const history = JSON.parse(localStorage.getItem('chat')) || []
        localStorage.setItem(
            'chat',
            JSON.stringify([{ chat, datetime: new Date() }, ...history])
        )
        clearChat()
        setShowSnackbar(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generateResponse(input)
        setInput('')
        setScroll(prev => !prev)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <Box px={{ xs: 0.5, md: 3 }} pb={{ xs: 1, md: 3 }}>
            <Box component="form" onSubmit={handleSubmit}>
                <Stack direction="row" spacing={{ xs: 0.5, md: 2 }}>
                    <TextField
                        placeholder="Please tell me about your query!"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                        inputRef={inputRef}
                        sx={{ flex: 1 }}
                    />

                    {/* ✅ MUST be submit */}
                    <Button type="submit" variant="contained">
                        Ask
                    </Button>

                    {/* ✅ MUST be button */}
                    <Button
                        type="button"
                        variant="contained"
                        onClick={handleSave}
                        disabled={!chat.length}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>

            <Snackbar
                open={showSnackbar}
                message="Chat saved."
                autoHideDuration={5000}
                onClose={() => setShowSnackbar(false)}
                action={
                    <Link to="/history">
                        <Button size="small">See past conversations</Button>
                    </Link>
                }
            />
        </Box>
    )
}

export default Chat
