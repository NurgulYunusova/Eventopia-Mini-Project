import Slider1 from "../../assets/images/slider-photo-1.jpg";
import Slider2 from "../../assets/images/slider-photo-2.jpg";
import Slider3 from "../../assets/images/slider-photo-3.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.scss";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Slider() {
  const images = [Slider1, Slider2, Slider3, Slider1, Slider2, Slider3];

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="swiper_container"
      >
        {images &&
          images.map((image, key) => (
            <SwiperSlide key={key}>
              <img src={image} alt={`Slide ${key + 1}`} />
            </SwiperSlide>
          ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIcon
              sx={{
                fontSize: "2rem",
                color: "#222224",
              }}
            />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIcon
              sx={{
                fontSize: "2rem",
                color: "#222224",
              }}
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
