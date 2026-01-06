import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import faqImage from "../../../assets/blogs.jpg"; // replace with your image

const faqs = [
  {
    q: "Why choose our event tracking platform?",
    a: "Our platform offers real-time updates, easy booking management, and a user-friendly experience designed for both organizers and attendees.",
  },
  {
    q: "What makes us different from others?",
    a: "We focus on simplicity, reliability, and seamless event tracking with secure data handling.",
  },
  {
    q: "How do we ensure data security?",
    a: "We use industry-standard security practices to ensure your data is protected at all times.",
  },
  {
    q: "How can I get support for my events?",
    a: "Our support team is available 24/7 to assist you with any queries or issues.",
  },
];

export default function FAQ() {
  return (
    <Box py={8} px={2}>
      <Box textAlign="center" mb={5}>
        <Typography variant="overline" color="primary">
          Get Your Answer
        </Typography>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Frequently Asked Questions
        </Typography>
      </Box>

      <Grid
        container
        maxWidth="1200px"
        mx="auto"
        spacing={4}
        alignItems="center"
      >
        {/* Left Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={faqImage}
            alt="FAQ"
            sx={{
              width: "100%",
              borderRadius: 3,
            }}
          />
        </Grid>

        {/* Right FAQ */}
        <Grid item xs={12} md={7}>
          {faqs.map((item, index) => (
            <Accordion key={index} elevation={0}>
              <AccordionSummary expandIcon={<AddIcon color="primary" />}>
                <Typography fontWeight={600}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
