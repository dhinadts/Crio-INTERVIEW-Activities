import { MenuItem, Select, InputAdornment, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function HospitalSearch() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";

  /* ===== Fetch States ===== */
  useEffect(() => {
    axios
      .get("https://eventdata.onrender.com/states")
      .then((res) => setStates(res.data))
      .catch(console.error);
  }, []);

  /* ===== Fetch Cities ===== */
  useEffect(() => {
    if (!state) return;

    axios
      .get(`https://eventdata.onrender.com/cities/${state}`)
      .then((res) => setCities(res.data))
      .catch(console.error);
  }, [state]);

  const handleStateChange = (e) => {
    navigate(`/search?state=${e.target.value}&city=`);
  };

  const handleCityChange = (e) => {
    navigate(`/search?state=${state}&city=${e.target.value}`);
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2} width="100%">
      {/* State */}
      <div id="state" style={{ flex: 1 }}>
        <Select
          fullWidth
          displayEmpty
          value={state}
          onChange={handleStateChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        >
          <MenuItem disabled value="">
            State
          </MenuItem>
          {states.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* City */}
      <div id="city" style={{ flex: 1 }}>
        <Select
          fullWidth
          displayEmpty
          value={city}
          disabled={!state}
          onChange={handleCityChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        >
          <MenuItem disabled value="">
            City
          </MenuItem>
          {cities.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </div>
    </Stack>
  );
}
