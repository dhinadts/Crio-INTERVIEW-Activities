import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import eventLogo from "../../assets/event_logo.png"; // replace with your logo
import eventLogo from "../../assets/event_image.png";


export default function EventTracking() {
    return (
        <Box
            sx={{
                backgroundColor: "#eef6ff",
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 6 },
            }}
        >
            <Grid
                container
                maxWidth="1200px"
                mx="auto"
                alignItems="center"
                spacing={4}
            >
                {/* Left Logo */}
                <Grid item xs={12} md={5} textAlign="center">
                    <Box
                        component="img"
                        src={eventLogo}
                        alt="Event Logo"
                        sx={{ maxWidth: "100%", height: "auto" }}
                    />
                </Grid>

                {/* Right Content */}
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={600}
                    >
                        CONNECTING PEOPLE THROUGH EVENTS!!
                    </Typography>

                    <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
                        Event <span style={{ color: "#1976d2" }}>Tracking</span>
                    </Typography>

                    <Typography color="text.secondary" mb={3}>
                        Our goal is to deliver an exceptional event experience in a
                        courteous, respectful, and engaging manner. We hope you will
                        allow us to help you stay updated and connected through our
                        platform.
                    </Typography>

                    <Box>
                        {[
                            "Stay Updated About Events",
                            "Check Event Details Online",
                            "Manage Your Bookings",
                        ].map((text, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={1}
                            >
                                <CheckCircleIcon color="primary" />
                                <Typography>{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
