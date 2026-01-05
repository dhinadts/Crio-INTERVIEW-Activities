import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../assets/singer_image.png";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// const img = "";
export default function Hero() {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          pt={2}
        >
          <Box>
            <Typography variant="h3" component="h1">
              Skip the hassle! Track Online
            </Typography>
            <Typography variant="h1" component="h1" mb={1}>
              Event <span style={{ color: "#2AA7FF" }}>Tracker</span>
            </Typography>
            <Typography color="#5C6169" fontSize={{ md: 18, }} fontWeight={400} mb={3}>
              Connect instantly with our platform to manage and track your events efficiently.
            </Typography>
            <Link to="/search">
              <Button
                label="Search"
                variant="contained"
                size="large"
                title="Search"
                id="searchBtn"
                disableElevation
              >
                <button type="submit" id="searchBtn" style={{ backgroundColor: "transparent", border: "none", color: "white" }}>Find Events</button>

              </Button>
            </Link>
          </Box>
          <Box component={"img"} src={img} width={{ xs: 1, md: "50%" }} />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
}
