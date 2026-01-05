import { Box, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../../assets/event_image.png";

const footerLinks = {
  Company: ["About Us", "Pricing", "Gallery", "Contact Us", "Privacy Policy"],
  Features: [
    "Event Management",
    "Real-time Tracking",
    "Customizable Features",
    "Support",
    "Security",
  ],
  Resources: ["About Us", "Pricing", "Gallery", "Contact Us", "Privacy Policy"],
};

export default function Footer() {
  return (
    <Box sx={{ background: "#00a2ff", color: "#fff", pt: 6 }}>
      <Grid
        container
        maxWidth="1200px"
        mx="auto"
        spacing={4}
        px={2}
      >
        {/* Logo & Social */}
        <Grid item xs={12} md={4}>
          <Box component="img" src={logo} alt="logo" height={40} mb={2} />
          <Box>
            {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map(
              (Icon, i) => (
                <IconButton key={i} sx={{ color: "#fff" }}>
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Grid>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <Grid item xs={12} md={2} key={title}>
            <Typography fontWeight={700} mb={1}>
              {title}
            </Typography>
            {links.map((link) => (
              <Typography key={link} variant="body2" mb={0.5}>
                {link}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" py={3} mt={4} sx={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}>
        <Typography variant="body2">
          Copyright © 2023 EventTracker.com | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
