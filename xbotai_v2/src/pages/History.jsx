import { Typography, Box, Stack, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ChatHistoryCard from "../components/ChatHistoryCard";
import ChatFilter from "../components/ChatFilter";
import Navbar from "../components/Navbar/Navbar";
import styles from "./History.module.css";

export default function History() {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const localChats = localStorage.getItem("chat") || [];
    if (localChats.length > 0) {
      setChats(JSON.parse(localChats));
      setFilteredChats(JSON.parse(localChats));
    }
  }, []);

  return (
    <Box className={`${styles.pageWrapper} ${styles.scrollable}`}>
      <Navbar />

      <Box className={styles.pageContent}>
        <Typography variant="h2" className={styles.heading}>
          Conversation History
        </Typography>

        {chats.length > 0 && (
          <ChatFilter allChats={chats} filterChats={setFilteredChats} />
        )}

        {chats.length == 0 && (
          <Typography className={styles.messageBox}>No saved chats.</Typography>
        )}

        {chats.length > 0 && filteredChats.length == 0 && (
          <Typography className={styles.messageBox}>No such chats.</Typography>
        )}

        {filteredChats.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filteredChats.map((item, index) => (
              <ChatHistoryCard details={item} key={index} />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
