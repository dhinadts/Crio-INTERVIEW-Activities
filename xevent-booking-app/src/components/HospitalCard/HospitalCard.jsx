import eventIcon from "../../assets/event_booked.png";
import { useState } from "react";
import { Box, Button, Divider, Stack, Typography, Modal, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function EventCard({ event }) {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = ["Morning", "Afternoon", "Evening"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedTime("");
  };

  const handleBookEvent = () => {
    // Save booking to localStorage
    const bookingData = {
      ...event,
      bookingDate: new Date().toISOString(),
      bookingTime: selectedTime,
      bookingEmail: "user@example.com" // You should get this from user input
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    handleClose();
    alert("Event booked successfully!");
  };

  return (
    <>
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

            <Button
              variant="contained"
              disableElevation
              onClick={handleOpen}
            >
              Book FREE Event
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Date/Time Selection Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <Typography variant="h6" mb={2}>
            Select Time for {event.eventName}
          </Typography>

          <Typography mb={1}>Today</Typography>

          <FormControl component="fieldset">
            <RadioGroup
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timeSlots.map((slot) => (
                <FormControlLabel
                  key={slot}
                  value={slot}
                  control={<Radio />}
                  label={slot}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="outlined"
              onClick={handleClose}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleBookEvent}
              disabled={!selectedTime}
              fullWidth
            >
              Confirm Booking
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}