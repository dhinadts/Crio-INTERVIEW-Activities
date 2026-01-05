import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HospitalSearch() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("https://eventdata.onrender.com/states");
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const response = await axios.get(
          `https://eventdata.onrender.com/cities/${formData.state}`
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    if (formData.state !== "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" }, // Added alignment
        position: "relative",
        zIndex: 1, // Added z-index
      }}
    >
      {/* State Dropdown */}
      <div id="state" style={{ flex: 1 }}>
        <Select
          displayEmpty
          name="state"
          value={formData.state}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          required
          sx={{
            minWidth: 200,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <MenuItem disabled value="">
            State
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* City Dropdown */}
      <div id="city" style={{ flex: 1 }}>
        <Select
          displayEmpty
          name="city"
          value={formData.city}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          required
          sx={{
            minWidth: 200,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <MenuItem disabled value="">
            City
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Search Button - FIXED: Added proper positioning */}
      <Button
        type="submit"
        variant="contained"
        id="searchBtn"
        size="large"
        startIcon={<SearchIcon />}
        sx={{
          py: "15px",
          px: 8,
          flexShrink: 0,
          height: "56px", // Match Select height
          alignSelf: { xs: "stretch", md: "center" },
          position: "relative",
          zIndex: 1000,
        }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}