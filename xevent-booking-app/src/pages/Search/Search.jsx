import { Container, Stack, Box, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import NavBar from "../../components/Navbar/Navbar";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";
import HospitalCard from "../../components/HospitalCard/HospitalCard";

import tickIcon from "../../assets/event_booked.png";
import cta from "../../assets/singer_2.png";

/* ================= API FUNCTION (SEPARATE) ================= */
const fetchEvents = async ({
  state,
  city,
  setEvents,
  setIsLoading,
}) => {
  if (!state || !city) return;

  setIsLoading(true);
  setEvents([]);

  try {
    const res = await axios.get(
      "https://eventdata.onrender.com/events",
      { params: { state, city } }
    );
    setEvents(res.data);
  } catch (error) {
    console.error("Error fetching events:", error);
  } finally {
    setIsLoading(false);
  }
};

export default function Search() {
  const [searchParams] = useSearchParams();

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canFetch, setCanFetch] = useState(false);

  const state = searchParams.get("state");
  const city = searchParams.get("city");

  /* ================= DEBOUNCED FETCH ================= */
  useEffect(() => {
    if (!canFetch || !state || !city) return;

    const timer = setTimeout(() => {
      fetchEvents({
        state,
        city,
        setEvents,
        setIsLoading,
      });
    }, 400); // ⏱ debounce

    return () => clearTimeout(timer);
  }, [canFetch, state, city]);

  return (
    <>
      <NavBar />

      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          minHeight: "100vh",
        }}
      >
        {/* ===== Search Section ===== */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            pb: 8,
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translateY(50px)",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <Stack spacing={2}>
              <HospitalSearch />

              {/* ✅ SEARCH BUTTON (FIGMA SAFE) */}
              <Button
                id="searchBtn"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                disabled={!state || !city}
                onClick={() => setCanFetch(true)}
                sx={{ alignSelf: "flex-end", minWidth: 160 }}
              >
                Search
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* ===== Results ===== */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10 }}>
          {events.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" fontWeight={600}>
                {events.length} events available in {city}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <img src={tickIcon} height={24} alt="verified" />
                <Typography color="#787887">
                  Verified events with easy & quick booking
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction={{ xs: "column", md: "row" }}>
            {/* Cards */}
            <Box width={{ md: "calc(100% - 384px)" }}>
              <Stack spacing={3}>
                {isLoading && (
                  <Typography bgcolor="#fff" p={3} borderRadius={2}>
                    Loading events...
                  </Typography>
                )}

                {!isLoading && events.length === 0 && state && city && (
                  <Typography bgcolor="#fff" p={3} borderRadius={2}>
                    No events found in {city}, {state}
                  </Typography>
                )}

                {events.map((event, index) => (
                  <HospitalCard key={index} event={event} />
                ))}
              </Stack>
            </Box>

            {/* CTA */}
            <Box ml={{ md: 3 }} mt={{ xs: 4, md: 0 }}>
              <img src={cta} width={360} alt="cta" style={{ borderRadius: 8 }} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
