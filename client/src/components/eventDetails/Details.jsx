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
import { useEffect } from "react";
import axios from "axios";
import EventMap from "../eventMap/EventMap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../slicers/dataSlice";

function Details() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${id}`)
      .then((res) => dispatch(setData(res.data)));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <div className="breadCrumb">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-angle-right"></i>
          <p>{data.title}</p>
        </div>

        <div className="detailsContainer">
          <div className="detailsSliderContainer">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={data.image} alt={data.title} />
              </SwiperSlide>
              {data.cover?.map((item) => (
                <SwiperSlide key={item}>
                  <img src={item} />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
            <div className="needToKnow">
              <h3>What You Need to Know About the Event</h3>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i> Your e-ticket will be
                  sent to you via e-mail and sms.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> You do not need a
                  printout.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> After the start of the
                  game, no spectators will be allowed in the hall.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Ticket control will be
                  done at the entrance of the event, you must show your ticket
                  over the phone.
                </li>
              </ul>
            </div>
          </div>

          <div className="details">
            <div className="eventName">
              <h1>{data.title}</h1>
            </div>
            <div className="eventTime">
              <h2>14 Haziran 2023, 23:30</h2>
            </div>
            <div className="eventPlace">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <h4>{data.location?.name}</h4>
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
              <p>{data.description}</p>
            </div>
            <div className="location">
              <h2>Place</h2>
              <p className="place">{data.location?.name}</p>
              <p className="address">{data.location?.address}</p>
              <div style={{ width: "100%", height: "350px" }}>
                {/* <iframe
                      title="Kuştepe Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.904786651383!2d28.979199315262647!3d41.065591972897036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbed7f11eafb%3A0x3e02af7f22d727c8!2sKu%C5%9Ftepe%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1653553808442!5m2!1sen!2str"
                      width="100%"
                      height="100%"
                      style={{ border: "0" }}
                      allowFullScreen
                    ></iframe> */}
                <EventMap mapLink={data?.location?.mapLink} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
