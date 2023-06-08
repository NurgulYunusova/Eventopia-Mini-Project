import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/images/slider-photo-1.jpg";
import Slider2 from "../../assets/images/slider-photo-2.jpg";
import Slider3 from "../../assets/images/slider-photo-3.jpg";
import "./slider.scss";

function Slider() {
  const images = [Slider1, Slider2, Slider3];

  return (
    <>
      <h3>Slider</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
