import { Box, Grid, Typography } from "@mui/material";

import teamImage from "../../assets/three_persons.png"; // replace with your image

export default function EventTrackSecond() {
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
                {/* Left Content */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={600}
                    >
                        TRACKING EVENTS FOR YOU AND YOUR TEAM
                    </Typography>

                    <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
                        Event Tracker
                    </Typography>

                    <Typography color="text.secondary">
                        We provide comprehensive tools to help you track and manage
                        your events efficiently. Whether it’s a small meeting or a
                        large conference, our platform ensures that you stay organized
                        and informed. All your event details are handled with the utmost
                        care and confidentiality.
                    </Typography>
                </Grid>

                {/* Right Image */}
                <Grid item xs={12} md={6} textAlign="center">
                    <Box
                        component="img"
                        src={teamImage}
                        alt="Event Team"
                        sx={{
                            width: "100%",
                            maxWidth: 420,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
