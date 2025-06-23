import { Stack } from "@mui/material";
import InitialChat from "../components/FirstChat/FirstChat.jsx";
import ChatInput from "../components/ChatInput";
import ChatCard from "../components/ChatCard";
import FeedbackModal from "../components/FeedbackModal";
import { useEffect, useRef, useState } from "react";
import data from "../data/sampleData.json";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollingToBottom, setscrollingToBottom] = useState(false);
  const { chat, setChat } = useOutletContext();
  const { mode } = useContext(ThemeContext);
  const listOfRef = useRef(null);

  const createResponse = (input) => {
    const response = data.find(
      (item) => input.toLowerCase() == item.question.toLowerCase()
    );

    let answer = "Sorry, Did not understand your query!";

    if (response != undefined) {
      answer = response.response;
    }

    setChat((prev) => [
      ...prev,
      {
        type: "Human",
        text: input,
        time: new Date(),
        id: chatId,
      },
      {
        type: "AI",
        text: answer,
        time: new Date(),
        id: chatId + 1,
      },
    ]);

    setChatId((prev) => prev + 2);
  };

  useEffect(() => {
    listOfRef.current?.lastElementChild?.scrollIntoView();
  }, [scrollingToBottom]);

  return (
    <Stack
      className={`${styles.chatContainer} ${
        mode === "light" ? styles.lightMobileBackground : ""
      }`}
    >
      <Navbar />

      {chat.length == 0 && <InitialChat createResponse={createResponse} />}

      {chat.length > 0 && (
        <Stack
          className={styles.chatScrollArea}
          spacing={{ xs: 2, md: 3 }}
          ref={listOfRef}
        >
          {chat.map((item, index) => (
            <ChatCard
              details={item}
              key={index}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setShowModal(true)}
            />
          ))}
        </Stack>
      )}

      <ChatInput
        createResponse={createResponse}
        setScroll={setscrollingToBottom}
        chat={chat}
        clearChat={() => setChat([])}
      />

      <FeedbackModal
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModal(false)}
      />
    </Stack>
  );
}
