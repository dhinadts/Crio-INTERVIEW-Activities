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

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://eventdata.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `https://eventdata.onrender.com/cities/${formData.state}`
        );
        setCities(data.data);
      } catch (error) {
        console.log("Error in fetching city:", error);
      }
    };

    if (formData.state != "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
    /*  if (formData.state && formData.city) {
       try {
         const response = await axios.get(`https://eventdata.onrender.com/events`, {
           params: { state: formData.state, city: formData.city },
         });
 
         // Optionally save or use the data before navigating
         console.log("Events:", response.data);
         // navigate only if successful
         navigate(`/search?state=${formData.state}&city=${formData.city}`);
       } catch (err) {
         console.error("Event fetch failed:", err);
       }
     } */
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
        position: "relative", // Add position relative
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
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

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
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

      {/* FIXED: Add z-index to ensure button is clickable */}
      <Button
        type="submit"
        variant="contained"
        title="getEvents"
        id="searchBtn"
        size="large"
        startIcon={<SearchIcon />}
        sx={{
          py: "15px",
          px: 8,
          flexShrink: 0,
          zIndex: 1000, // Add high z-index to ensure it's above other elements
          position: "relative", // Ensure z-index works
        }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}