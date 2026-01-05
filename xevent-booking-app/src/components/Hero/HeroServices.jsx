import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import doctorIcon from "../../assets/event_booked.png";
import pharmacyIcon from "../../assets/event_booked.png";
import hospitalIcon from "../../assets/event_booked.png";
import capsuleIcon from "../../assets/event_booked.png";
import ambulanceIcon from "../../assets/event_booked.png";
import IconCard from "./IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Events" },
      { img: pharmacyIcon, title: "Venues" },
      { img: hospitalIcon, title: "Tickets", active: true },
      { img: capsuleIcon, title: "Workshops" },
      { img: ambulanceIcon, title: "Services" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
        justifyContent={"center"}
      >
        {Services.map((service, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 2 }}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
