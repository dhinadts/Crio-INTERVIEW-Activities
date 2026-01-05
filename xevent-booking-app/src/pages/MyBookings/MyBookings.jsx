import { Container, Box, Typography, Stack, Divider, Button } from "@mui/material";
import NavBar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings);
  }, []);

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleClearAll = () => {
    setBookings([]);
    localStorage.removeItem('bookings');
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography component="h1" variant="h4" fontWeight={700} mb={2}>
              My Bookings
            </Typography>
            <Typography color="text.secondary">
              {bookings.length} upcoming event{bookings.length !== 1 ? 's' : ''}
            </Typography>
          </Box>

          {bookings.length === 0 ? (
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 4,
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Typography variant="h6" color="text.secondary" mb={2}>
                No bookings yet
              </Typography>
              <Typography color="text.secondary">
                Book your first event to see it here!
              </Typography>
            </Box>
          ) : (
            <>
              {/* Clear All Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handleClearAll}
                >
                  Clear All Bookings
                </Button>
              </Box>

              {/* Bookings List */}
              <Stack spacing={3}>
                {bookings.map((booking, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 2,
                      p: 4,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={{ xs: 2, md: 4 }}
                      alignItems="flex-start"
                    >
                      {/* Event Info */}
                      <Box flex={1}>
                        <Typography
                          component="h3"
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                          mb={1}
                        >
                          {booking.eventName}
                        </Typography>

                        <Stack spacing={1} mb={2}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <CalendarTodayIcon fontSize="small" color="action" />
                            <Typography>
                              <strong>Date:</strong> {booking.bookingDisplayDate || booking.bookingDate}
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <AccessTimeIcon fontSize="small" color="action" />
                            <Typography>
                              <strong>Time:</strong> {booking.bookingTime}
                            </Typography>
                          </Stack>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <LocationOnIcon fontSize="small" color="action" />
                            <Typography>
                              {booking.address}, {booking.city}, {booking.state}
                            </Typography>
                          </Stack>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        {/* Rating */}
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography color="#4CAF50" fontWeight={600}>
                            Rating: {booking.rating}/5
                          </Typography>
                          <Typography color="text.secondary" fontSize={14}>
                            • Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                          </Typography>
                        </Stack>
                      </Box>

                      {/* Actions */}
                      <Stack alignItems={{ xs: "flex-start", md: "flex-end" }}>
                        <Typography
                          color="success.main"
                          fontWeight={600}
                          mb={1}
                          sx={{
                            px: 2,
                            py: 0.5,
                            bgcolor: "success.light",
                            borderRadius: 1,
                          }}
                        >
                          Confirmed
                        </Typography>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDeleteBooking(index)}
                        >
                          Cancel Booking
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}