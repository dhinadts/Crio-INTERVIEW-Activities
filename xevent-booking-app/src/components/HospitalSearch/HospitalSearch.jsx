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
        gap: 2,
        alignItems: "stretch",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: "56px",
      }}
    >
      {/* State Dropdown */}
      <Box 
        id="state" 
        sx={{ 
          flex: 1, 
          display: "flex",
          minWidth: 0,
        }}
      >
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
            width: "100%",
            backgroundColor: "white",
            '& .MuiSelect-select': {
              height: "auto",
              minHeight: "56px",
              display: "flex",
              alignItems: "center",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
                zIndex: 9999,
              },
            },
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
      </Box>

      {/* City Dropdown */}
      <Box 
        id="city" 
        sx={{ 
          flex: 1, 
          display: "flex",
          minWidth: 0,
        }}
      >
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
            width: "100%",
            backgroundColor: "white",
            '& .MuiSelect-select': {
              height: "auto",
              minHeight: "56px",
              display: "flex",
              alignItems: "center",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
                zIndex: 9999,
              },
            },
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
      </Box>

      {/* Search Button - FIXED POSITIONING */}
      <Button
        type="submit"
        variant="contained"
        id="searchBtn"
        size="large"
        startIcon={<SearchIcon />}
        sx={{
          minHeight: "56px",
          px: 4,
          minWidth: { xs: "100%", md: "140px" },
          mt: { xs: 1, md: 0 },
          alignSelf: { xs: "stretch", md: "auto" },
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}