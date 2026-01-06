import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";
import NavBar from "../../components/Navbar/Navbar";
import tickIcon from "../../assets/event_booked.png";
import cta from "../../assets/singer_2.png";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [isLoading, setIsLoading] = useState(false);
  const [canFetch, setCanFetch] = useState(false);

  useEffect(() => {
    if (state && city) {
      setCanFetch(true);
    }
  }, [state, city]);

  useEffect(() => {
    const getEvents = async () => {
      if (!state || !city) return;

      setIsLoading(true);
      setEvents([]);

      try {
        const response = await axios.get(
          `https://eventdata.onrender.com/events?state=${state}&city=${city}`
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
          minHeight: "100vh",
        }}
      >
        
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            pb: 8,
            position: "relative",
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
              position: "relative",
              zIndex: 100,
              overflow: "visible !important", 
            }}
          >
            <HospitalSearch />
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10 }}>
          {events.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography component="h1" variant="h4" fontWeight={600} mb={1}>
                {events.length} events available in {city}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <img src={tickIcon} height={24} width={24} alt="verified" />
                <Typography color="#787887">
                  Verified events with easy & quick booking
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction={{ xs: "column", md: "row" }} alignItems="flex-start">
            {/* Event Cards */}
            <Box width={{ xs: "100%", md: "calc(100% - 384px)" }}>
              <Stack spacing={3}>
                {events.map((event, index) => (
                  <HospitalCard key={index} event={event} />
                ))}

                {isLoading && (
                  <Typography bgcolor="#fff" p={3} borderRadius={2}>
                    Loading events...
                  </Typography>
                )}

                {events.length === 0 && !isLoading && state && city && (
                  <Typography bgcolor="#fff" p={3} borderRadius={2}>
                    No events found in {city}, {state}
                  </Typography>
                )}

                {!state && !isLoading && (
                  <Typography bgcolor="#fff" p={3} borderRadius={2}>
                    Please select a state and city to search for events
                  </Typography>
                )}
              </Stack>
            </Box>

            <Box
              ml={{ md: 3 }}
              mt={{ xs: 4, md: 0 }}
              sx={{ position: "sticky", top: 20 }}
            >
              <img src={cta} width={360} alt="cta" style={{ borderRadius: 8 }} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}