import eventIcon from "../../assets/event_booked.png";
// import thumb from "../../assets/thumbsup.png";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function EventCard({ event }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: "#fff",
        p: { xs: 2, md: 4 },
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        alignItems="flex-start"
      >
        {/* Left Icon */}
        <Box
          component="img"
          src={eventIcon}
          width={80}
          height={80}
          sx={{ flexShrink: 0 }}
        />

        {/* Event Info */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={20}
            mb={1}
          >
            {event.eventName}
          </Typography>

          <Typography color="#414146" fontSize={14} fontWeight={600}>
            {event.city}, {event.state}
          </Typography>

          <Typography fontSize={14} mt={0.5} mb={1}>
            {event.address}
          </Typography>

          <Divider sx={{ borderStyle: "dashed", my: 2 }} />

          {/* Rating */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <StarIcon sx={{ color: "#4CAF50", fontSize: 20 }} />
            <Typography fontWeight={700} color="#4CAF50">
              {event.rating}
            </Typography>
          </Stack>
        </Box>

        {/* Action */}
        <Stack justifyContent="flex-end">
          <Typography
            textAlign="center"
            color="primary.green"
            fontSize={14}
            fontWeight={500}
            mb={1}
          >
            Available Today
          </Typography>

          <Button variant="contained" disableElevation>
            Book FREE Event
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
