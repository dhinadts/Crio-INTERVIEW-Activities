import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import MyBookings from "./pages/MyBookings/MyBookings";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {theme} from './components/Theme/Theme';
import { ThemeProvider } from "@mui/material";

// Responsive heading typography
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="my-bookings" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
