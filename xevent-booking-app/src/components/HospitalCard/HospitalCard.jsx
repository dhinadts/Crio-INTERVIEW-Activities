import eventIcon from "../../assets/event_booked.png";
import { useState, useEffect } from "react";
import {
  Box, Button, Divider, Stack, Typography, Modal,
  Radio, RadioGroup, FormControlLabel, FormControl
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function HospitalCard({ event, details }) {
  const eventData = event || details || {};

  // Extract event name from API response
  const eventName = eventData["eventName"] || eventData.eventName || eventData["Hospital Name"] || "Event";

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableDates, setAvailableDates] = useState([]);

  // Generate dates for the next 7 days
  useEffect(() => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      dates.push({
        date: date.toISOString().split('T')[0],
        display: i === 0 ? "Today" :
          i === 1 ? "Tomorrow" :
            date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }

    setAvailableDates(dates);
    setSelectedDate(dates[0].date); // Set today as default
  }, []);

  const timeSlots = ["Morning", "Afternoon", "Evening"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedTime("");
  };

  const handleBookEvent = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }

    // Format date for display
    const selectedDateObj = availableDates.find(d => d.date === selectedDate);
    const displayDate = selectedDateObj ? selectedDateObj.display : selectedDate;

    // Save booking to localStorage
    const bookingData = {
      eventName: eventName,
      rating: eventData["Overall Rating"] || eventData.rating || 4,
      address: eventData.Address || eventData.address || "",
      city: eventData.City || eventData.city || "",
      state: eventData.State || eventData.state || "",
      bookingDate: new Date().toISOString(),
      bookingDisplayDate: displayDate,
      bookingTime: selectedTime,
      bookingEmail: "user@example.com"
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    handleClose();
    alert(`Successfully booked ${eventName} for ${displayDate} - ${selectedTime}`);
  };

  return (
    <>
      <Box data-testid="event-card"
        onClick={handleOpen}

        sx={{
          borderRadius: 2,
          bgcolor: "#fff",
          p: { xs: 2, md: 4 },
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          cursor: "pointer"
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
            alt="event icon"
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
              {eventName}
            </Typography>

            <Typography color="#414146" fontSize={14} fontWeight={600}>
              {eventData.City || eventData.city || "City"}, {eventData.State || eventData.state || "State"}
            </Typography>

            <Typography fontSize={14} mt={0.5} mb={1}>
              {eventData.Address || eventData.address || "Address not available"}
            </Typography>

            <Divider sx={{ borderStyle: "dashed", my: 2 }} />

            {/* Rating */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <StarIcon sx={{ color: "#4CAF50", fontSize: 20 }} />
              <Typography fontWeight={700} color="#4CAF50">
                {eventData["Overall Rating"] || eventData.rating || 4}
              </Typography>
              <Typography fontSize={14} color="#666">
                ({Math.floor(Math.random() * 100) + 50} reviews)
              </Typography>
            </Stack>
          </Box>

          {/* Action */}
          <Stack justifyContent="flex-end" alignItems={{ xs: "flex-start", md: "flex-end" }}>
            <Typography
              textAlign={{ xs: "left", md: "center" }}
              color="primary.green"
              fontSize={14}
              fontWeight={500}
              mb={1}
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <CalendarTodayIcon fontSize="small" />
                <span>Available for next 7 days</span>
              </Stack>
            </Typography>

            <Button
              variant="contained"
              data-testid="book-event-btn"
              onClick={handleOpen}
              disableElevation
              sx={{
                whiteSpace: 'nowrap',
                minWidth: '180px'
              }}
            >
              Book FREE Event
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Booking Modal with Calendar */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          maxHeight: '90vh',
          overflow: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <Typography variant="h6" mb={3} fontWeight={600}>
            Book: {eventName}
          </Typography>

          {/* Date Selection */}
          <Typography data-testid="date-section" mb={2} fontWeight={600}>
            Select Date
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {availableDates.map((date) => (
                <Button
                  data-testid="date-option"
                  variant={selectedDate === date.date ? "contained" : "outlined"}
                  onClick={() => setSelectedDate(date.date)}
                >
                  <Typography component="p">
                    {date.display}
                  </Typography>
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Time Selection */}
          <Typography data-testid="time-section" mb={2} fontWeight={600}>
            Select Time Slot
          </Typography>
          <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
            <RadioGroup
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <Stack spacing={2}>
                {timeSlots.map((slot) => (
                  <FormControlLabel
                    data-testid="time-option"
                    key={slot}
                    value={slot}
                    control={<Radio />}
                    label={
                      <Typography component="p">
                        {slot} ({(slot === "Morning" && "9:00 AM - 12:00 PM") ||
                          (slot === "Afternoon" && "1:00 PM - 4:00 PM") ||
                          (slot === "Evening" && "5:00 PM - 8:00 PM")})
                      </Typography>
                    }
                  />
                ))}
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* Summary */}
          {selectedDate && selectedTime && (
            <Box sx={{
              bgcolor: '#f0f7ff',
              p: 2,
              borderRadius: 2,
              mb: 3,
              border: '1px solid #e0e0e0'
            }}>
              <Typography fontWeight={600} color="primary.main" mb={1}>
                Booking Summary
              </Typography>
              <Typography>
                Date: {availableDates.find(d => d.date === selectedDate)?.display}
              </Typography>
              <Typography>
                Time: {selectedTime}
              </Typography>
              <Typography>
                Event: {eventName}
              </Typography>
            </Box>
          )}

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="outlined"
              onClick={handleClose}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleBookEvent}
              disabled={!selectedDate || !selectedTime}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Confirm Booking
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}