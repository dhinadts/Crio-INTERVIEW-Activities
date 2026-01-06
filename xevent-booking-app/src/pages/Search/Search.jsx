import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import {
  Container,
  Stack,
  Box,
  Typography,
  Button
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../../components/Navbar/Navbar";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";

import tickIcon from "../../assets/event_booked.png";
import cta from "../../assets/singer_2.png";


export default function Search() {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [isLoading, setIsLoading] = useState(false);

  // Sync URL params → state
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const getEvents = async () => {
    if (!state || !city) return;

    setIsLoading(true);
    setEvents([]);

    try {
      const response = await axios.get(
        "https://eventdata.onrender.com/events",
        { params: { state, city } }
      );
      setEvents(response.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <Box sx={{ background: "#EFF5FE", minHeight: "100vh" }}>
        {/* Search Box */}
        <Container maxWidth="xl" sx={{ pt: 6 }}>
          <HospitalSearch />
        </Container>

        {/* Search Button (ONLY trigger fetch here) */}
        <Container maxWidth="xl" sx={{ mt: 2 }}>
          <Button
            id="searchBtn"
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            onClick={getEvents}
            disabled={!state || !city}
          >
            Search
          </Button>
        </Container>

        {/* Results */}
        <Container maxWidth="xl" sx={{ pt: 4 }}>
          {isLoading && <Typography>Loading events...</Typography>}

          {!isLoading && events.length > 0 && (
            <Typography variant="h5">
              {events.length} events available in {city}
            </Typography>
          )}

          {!isLoading && events.length === 0 && state && city && (
            <Typography>No events found</Typography>
          )}

          <Stack spacing={3} mt={3}>
            {events.map((event, index) => (
              <HospitalCard key={index} event={event} />
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
