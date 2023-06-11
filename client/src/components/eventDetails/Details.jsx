import Slider1 from "../../assets/images/slider-photo-1.jpg";
import Slider2 from "../../assets/images/slider-photo-2.jpg";
import Slider3 from "../../assets/images/slider-photo-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./details.scss";

function Details() {
  const images = [Slider1, Slider2, Slider3];

  return (
    <>
      <div className="breadCrumb">
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-angle-right"></i>
        <p>Ezginin Günlüğü konseri</p>
      </div>

      <div className="detailsContainer">
        <div className="detailsSliderContainer">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images &&
              images.map((image, key) => (
                <SwiperSlide key={key}>
                  <img src={image} alt={`Slide ${key + 1}`} />
                </SwiperSlide>
              ))}
            <div className="swiper-pagination"></div>
          </Swiper>
          <div className="needToKnow">
            <h3>What You Need to Know About the Event</h3>
            <ul>
              <li>
                <i className="fa-solid fa-check"></i> Your e-ticket will be sent to
                you via e-mail and sms.
              </li>
              <li>
                <i className="fa-solid fa-check"></i> You do not need a printout.
              </li>
              <li>
                <i className="fa-solid fa-check"></i> After the start of the game,
                no spectators will be allowed in the hall.
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Ticket control will be done at
                the entrance of the event, you must show your ticket over the
                phone.
              </li>
            </ul>
          </div>
        </div>

        <div className="details">
          <div className="eventName">
            <h1>Ezginin Günlüğü konseri</h1>
          </div>
          <div className="eventTime">
            <h2>14 Haziran 2023, 23:30</h2>
          </div>
          <div className="eventPlace">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <h4>Ruby Lou Kitchen</h4>
          </div>
          <div className="ticket">
            <h2>Ticket Options</h2>
            <div className="price">
              <i className="fa-solid fa-ticket-simple"></i>
              <h4>General Price 25$</h4>
            </div>
          </div>
          <div className="description">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolores dignissimos sed officiis magnam. Quis consequuntur officia
              voluptatem cupiditate ratione magni deserunt harum sit,
              reprehenderit saepe optio assumenda fuga dolorum beatae laborum
              aperiam delectus nemo sunt? Itaque fugit ex soluta ut dicta
              dignissimos, non voluptatibus! Sunt adipisci magni incidunt hic.
            </p>
          </div>
          <div className="location">
            <h2>Place</h2>
            <p className="place">Ruby Lou Kitchen</p>
            <p className="address">
              Kuştepe, Mecidiyeköy Yolu Cd. No:12 Şişli/İstanbul
            </p>
            <div style={{ width: "100%", height: "350px" }}>
              <iframe
                title="Kuştepe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.904786651383!2d28.979199315262647!3d41.065591972897036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbed7f11eafb%3A0x3e02af7f22d727c8!2sKu%C5%9Ftepe%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1653553808442!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
