import Banner from "./components/Banner/Banner";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDoctors from "./components/Navigation/pages/FindDoctors";
import Home from "./components/Navigation/pages/Home";
import Hospitals from "./components/Navigation/pages/Hospitals";
import Medicines from "./components/Navigation/pages/Medicines";
import Surgeries from "./components/Navigation/pages/Surgeries";
import SoftwareProvider from "./components/Navigation/pages/SoftwareProvider";
import Facilities from "./components/Navigation/pages/Facilities";
import Carousel from "./components/Carousel/Carousel";
import Specialisation from "./components/Specialisation/Specialisation";
import Summary from "./components/Summery-Section/Summary";
import BlogsAndNews from "./components/BlogsAndNews-Section/BlogsAndNews";

import image1 from "./assets/Offer10.png";
import image2 from "./assets/Offer20.png";
import DrAhmadKhan from "./assets/Dr Ahmad Khan.png";
import DrHeenaSachdeva from "./assets/Dr Heena Sachdeva.png";
import DrAnkurSharma from "./assets/Dr Ankur Sharma.png";
import "./App.css";

function App() {
  const carouselData = [
    { id: 0, img: image1, imgText: "Offers" },
    { id: 1, img: image2, imgText: "Offers" },
    { id: 2, img: image1, imgText: "Offers" },
    { id: 3, img: image2, imgText: "Offers" },
    { id: 4, img: image1, imgText: "Offers" },
  ];

  const specialistDoctors = [
    {
      id: 0,
      img: DrAhmadKhan,
      name: "Dr. Ahmad Khan",
      role: "Neurologist",
    },
    {
      id: 1,
      img: DrHeenaSachdeva,
      name: "Dr. Heena Sachdeva",
      role: "Orthopadics",
    },
    {
      id: 2,
      img: DrAnkurSharma,
      name: "Dr. Ankur Sharma",
      role: "Medicine",
    },
    {
      id: 3,
      img: DrAhmadKhan,
      name: "Dr. Ahmad Khan",
      role: "Neurologist",
    },
    {
      id: 4,
      img: DrHeenaSachdeva,
      name: "Dr. Heena Sachdeva",
      role: "Orthopadics",
    },
    {
      id: 5,
      img: DrAnkurSharma,
      name: "Dr. Ankur Sharma",
      role: "Medicine",
    },
  ];

  return (
    <>
      <Banner />
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findDoctors" element={<FindDoctors />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/surgeries" element={<Surgeries />} />
            <Route path="/softwareProvider" element={<SoftwareProvider />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </Router>
        <Carousel carouselData={carouselData} carouselItems={3} />
        <Specialisation />
        <Carousel
          carouselData={specialistDoctors}
          carouselItems="auto"
          carouselHeading="Our Medical Specialist"
        />
        <Summary />
        <BlogsAndNews />
      </div>
    </>
  );
}

export default App;
