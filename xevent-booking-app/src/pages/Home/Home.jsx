import { Container, Box, Stack } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";
import FAQs from "../../components/Sections/FAQs/FAQs";
import OurFamilies from "../../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../../components/Sections/Blogs/Blogs";
import PatientCaring from "../../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../../components/Sections/Specialists/Specialists";
import Specialization from "../../components/Sections/Specialization/Specialization";
import Offers from "../../components/Sections/Offers/Offers";
import NavBar from "../../components/Navbar/Navbar";
import HeroServices from "../../components/Hero/HeroServices";
import Footer from "../../components/Footer/Footer";
import App from "../../App";
import FooterLink from "../../components/Footer/FooterLink";
import EventCarousel from "../../components/EventCarousel/EventCarousel"
import EventTracking from "../../components/EventTracking/EventTracking"
import LatestNews from "../../components/Blogs/LatestNews"
import EventTrackSecond from "../../components/EventTrackingSecond/EventTrackingSecond"
import DownloadApp from "../../components/Sections/DownloadApp/DownloadApp"

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <Hero />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: -6, lg: -10, xl: -14 }}
            position="relative"
            zIndex={1} // Changed from 99 to 1
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <HospitalSearch />
            <HeroServices />
          </Stack>
        </Container>
      </Box>



      <EventCarousel />
      <EventTracking />
      <LatestNews />
      <EventTrackSecond />
      <DownloadApp />

      {/* <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />
 */}
      <FAQs />
      <Footer />
    </Box>
  );
}
