import Slider1 from "../../assets/images/slider-photo-1.jpg";
import Slider2 from "../../assets/images/slider-photo-2.jpg";
import Slider3 from "../../assets/images/slider-photo-3.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.scss";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Slider() {
  const images = [Slider1, Slider2, Slider3];

  return (
    <>
      <h3>Slider</h3>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
      >
        {images &&
          images.map((image) => (
            <SwiperSlide>
              <img src={image} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Slider;
