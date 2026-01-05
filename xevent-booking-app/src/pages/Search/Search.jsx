import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import EventCard from "../../components/HospitalCard/HospitalCard";
import EventSearch from "../../components/HospitalSearch/HospitalSearch";
// src\components\HospitalSearch\HospitalSearch.jsx
import NavBar from "../../components/Navbar/Navbar";

import tickIcon from "../../assets/event_booked.png";



import cta from "../../assets/singer_2.png";
// const cta = "";
export default function Search() {
  const [searchParams] = useSearchParams();

  const [events, setEvents] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [isLoading, setIsLoading] = useState(false);

  // Fetch events
  useEffect(() => {
    const getEvents = async () => {
      if (!state || !city) return;

      setIsLoading(true);
      setEvents([]);

      try {
        const response = await axios.get(
          "https://eventdata.onrender.com/events",
          {
            params: { state, city },
          }
        );
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, [state, city]);

  // Sync URL params
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  return (
    <>
      <NavBar />

      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
        }}
      >
        {/* Search Bar Section */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translateY(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <EventSearch />
          </Container>
        </Box>

        {/* Results */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10 }}>
          {events.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography fontSize={24} fontWeight={500} mb={2}>
                {`${events.length} events available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city?.toLowerCase()}
                </span>
              </Typography>

              <Stack direction="row" spacing={2}>
                <img src={tickIcon} height={24} width={24} alt="verified" />
                <Typography color="#787887">
                  Verified events with easy & quick booking
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction={{ xs: "column", md: "row" }} alignItems="flex-start">
            {/* Event Cards */}
            <Stack spacing={3} width={{ xs: "100%", md: "calc(100% - 384px)" }}>
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}

              {isLoading && (
                <Typography bgcolor="#fff" p={3} borderRadius={2}>
                  Loading events...
                </Typography>
              )}

              {!state && !isLoading && (
                <Typography bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            {/* CTA Banner */}
            <Box ml={{ md: 3 }} mt={{ xs: 4, md: 0 }}>
              <img src={cta} width={360} alt="cta" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
