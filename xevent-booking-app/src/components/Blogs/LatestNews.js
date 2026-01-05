import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

import blog1 from "../../assets/blogs.jpg";
import blog2 from "../../assets/blogs.jpg";
import blog3 from "../../assets/blogs.jpg";
import authorIcon from "../../assets/icon.png";


const blogs = [
    {
        img: blog1,
        date: "March 31, 2022",
        title: "5 Strategies to Maximize Your Event Attendance",
        author: "John Doe",
        icon: authorIcon
    },
    {
        img: blog2,
        date: "March 31, 2022",
        title: "5 Strategies to Maximize Your Event Attendance",
        author: "John Doe",
        icon: authorIcon

    },
    {
        img: blog3,
        date: "March 31, 2022",
        title: "5 Strategies to Maximize Your Event Attendance",
        author: "John Doe",
        icon: authorIcon

    },
];

export default function LatestNews() {
    return (
        <Box py={8} px={2}>
            <Box textAlign="center" mb={5}>
                <Typography variant="overline" color="primary">
                    Blog & News
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                    Read Our Latest News
                </Typography>
            </Box>

            <Grid container spacing={4} maxWidth="1200px" mx="auto">
                {blogs.map((blog, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={blog.img}
                                alt="blog"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    Events | {blog.date}
                                </Typography>

                                <Typography variant="h6" fontWeight={600} mt={1}>
                                    {blog.title}
                                </Typography>

                                <Box display="flex" alignItems="center" gap={1} mt={1}>
                                    <Box
                                        component="img"
                                        src={authorIcon}
                                        alt="author"
                                        sx={{ width: 16, height: 16 }}
                                    />
                                    <Typography variant="body2" color="primary">
                                        {blog.author}
                                    </Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
