import React, { useEffect, useState } from "react";
import './CountryList.css';
const CountryList = () => {
  const [countriesList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch countries:", err);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countriesList.filter((country) =>
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (countriesList.length === 0) {
    return <div>No countries found.</div>;
  }

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for countries"
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredCountries.map((country, index) => (
          <div
            key={index}
            className="countryCard"
          >
            <img
              src={country.png}
              alt={`${country.common} flag`}
              height="100"
              width="100"
              style={{ objectFit: "contain" }}
            />
            <div style={{ marginTop: "10px" }}>{country.common}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
