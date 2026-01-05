import { Box, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import doctorIcon from "../../assets/singer_1.png";
import pharmacyIcon from "../../assets/singer_2.png";

import './EventCarousel.css';
const carouselItems = [
    { img: doctorIcon },
    { img: pharmacyIcon },
    { img: doctorIcon },
    { img: pharmacyIcon },
    { img: doctorIcon },
    { img: pharmacyIcon },
    { img: doctorIcon },
    { img: pharmacyIcon },
    { img: doctorIcon },
];

export default function EventCarousel() {
    return (
        <Box
            sx={{
                maxWidth: "1200px",   // ✅ centered container
                mx: "auto",           // ✅ center horizontally
                px: { xs: 2, md: 6 }, // ✅ left & right padding
                mt: 6,
            }}
        >
            <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                slidesPerGroup={1}   // 👈 IMPORTANT for more bullets
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        if (index < 4) {
                            return `<span class="${className} custom-dot"></span>`;
                        }
                        return "";
                    },
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {carouselItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Grid container direction="column">
                            <Grid item>
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt="event"
                                    sx={{
                                        width: "100%",
                                        height: 320,
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
