import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, Stack } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeContext';
import Header from '../components/Header/Header';
import InitialChat from '../components/InitialChat/InitialChat';
import Card from '../components/Card/Card';
import Chat from '../components/Chat/Chat';
import FeedbackModal from '../components/FeedbackModal/FeedbackModal';
import mockData from '../api/sampleData.json';

const Home = () => {
    const { mode } = useContext(ThemeContext)
    const listRef = useRef(null)
    const { chat, setChat } = useOutletContext();
    const [chatId, setChatId] = useState(1)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [scrollToBottom, setScrollToBottom] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const generateResponse = (input) => {
        const normalizedInput = input.toLowerCase().trim();

        // ✅ FIX 1: Greeting handling
        if (normalizedInput === "hello") {
            setChat(prev => ([
                ...prev,
                {
                    type: 'Human',
                    text: input,
                    time: new Date(),
                    id: chatId
                },
                {
                    type: 'AI',
                    text: "Hello! How can I assist you today?",
                    time: new Date(),
                    id: chatId + 1
                }
            ]));
            setChatId(prev => prev + 2);
            return;
        }

        const response = mockData.find(
            item => normalizedInput === item.question.toLowerCase()
        );

        let answer = "Sorry, Did not understand your query!";

        if (response) {
            answer = response.response;
        }

        setChat(prev => ([
            ...prev,
            { type: 'Human', text: input, time: new Date(), id: chatId },
            { type: 'AI', text: answer, time: new Date(), id: chatId + 1 }
        ]));

        setChatId(prev => prev + 2);
    };


    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView()
    }, [scrollToBottom])

    return (
        <Stack height={'100vh'} justifyContent={'space-between'} sx={{ '@media (max-width:767px)': { background: mode === 'light' ? 'linear-gradient(#F9FAFA 60%, #EDE4FF)' : '' } }} >
            <Header />
            {chat.length === 0 && <InitialChat generateResponse={generateResponse} />}
            {chat.length > 0 && (
                <Stack
                    height={1}
                    flexGrow={0}
                    p={{ xs: 2, md: 3 }}
                    spacing={{ xs: 2, md: 3 }}
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
                    ref={listRef}
                >
                    {chat.map((item, index) => (
                        <Card
                            details={item}
                            key={index}
                            updateChat={setChat}
                            setSelectedChatId={setSelectedChatId}
                            showFeedbackModal={() => setShowModal(true)}
                        />
                    ))}
                </Stack>
            )}
            <Box component="div">
                <Chat generateResponse={generateResponse} setScroll={setScrollToBottom} chat={chat} clearChat={() => setChat([])} />
            </Box>
            <FeedbackModal open={showModal} updateChat={setChat} chatId={selectedChatId} handleClose={() => setShowModal(false)} />
        </Stack>
    )
}

export default Home