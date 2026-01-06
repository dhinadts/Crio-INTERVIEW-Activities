import { Box, Grid, Typography, TextField, Button } from "@mui/material";

import phoneMockup from "../../../assets/phone_hand.png";
import googlePlay from "../../../assets/googleplay.png";
import appStore from "../../../assets/apple.png";

export default function DownloadApp() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #eef6ff 0%, #ffffff 100%)",
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
        {/* Left Phone Image */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src={phoneMockup}
            alt="App Preview"
            sx={{
              width: "100%",
              maxWidth: 320,
            }}
          />
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Download the{" "}
            <span style={{ color: "#1976d2" }}>Event Tracker</span> App
          </Typography>

          <Typography color="text.secondary" mt={1} mb={3}>
            Get the link to download the app
          </Typography>

          {/* Phone Input */}
          <Box display="flex" gap={2} mb={3}>
            <TextField
              fullWidth
              size="small"
              placeholder="+91 Enter phone number"
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                height: 40,
                px: 3,
                whiteSpace: "nowrap",
              }}
            >
              Send SMS
            </Button>
          </Box>


          {/* Store Buttons */}
          <Box display="flex" gap={2} mt={1}>
            {/* Google Play */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                background: "#000",
                color: "#fff",
                px: 2,
                py: 1,
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={googlePlay}
                alt="Google Play"
                sx={{ width: 20 }}
              />
              <Box>

                <Typography variant="subtitle2" fontWeight={600}>
                  Google Play
                </Typography>
              </Box>
            </Box>

            {/* App Store */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                background: "#000",
                color: "#fff",
                px: 2,
                py: 1,
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={appStore}
                alt="App Store"
                sx={{ width: 20 }}
              />
              <Box>

                <Typography variant="subtitle2" fontWeight={600}>
                  App Store
                </Typography>
              </Box>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
}
