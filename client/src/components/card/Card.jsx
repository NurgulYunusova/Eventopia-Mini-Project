import React from "react";
import img from "../../assets/images/slider-photo-1.jpg";
import "../card/card.scss";
function Card() {
  return (
    <>
      <div className="cards">
        <div className="card-box">
          <div className="card-box-img">
            <img src={img} alt="" />
          </div>
          <div className="card-box-detail">
            <div className="card-box-title">
              <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
              <div className="card-box-detail-address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Ruby Lou Kitchen</h3>
              </div>
              <div className="card-box-detail-date">
                <i class="fa-regular fa-calendar-days"></i>
                <h3>14 Haz Çar - 23:30</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-img">
            <img src={img} alt="" />
          </div>
          <div className="card-box-detail">
            <div className="card-box-title">
              <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
              <div className="card-box-detail-address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Ruby Lou Kitchen</h3>
              </div>
              <div className="card-box-detail-date">
                <i class="fa-regular fa-calendar-days"></i>
                <h3>14 Haz Çar - 23:30</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-img">
            <img src={img} alt="" />
          </div>
          <div className="card-box-detail">
            <div className="card-box-title">
              <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
              <div className="card-box-detail-address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Ruby Lou Kitchen</h3>
              </div>
              <div className="card-box-detail-date">
                <i class="fa-regular fa-calendar-days"></i>
                <h3>14 Haz Çar - 23:30</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-img">
            <img src={img} alt="" />
          </div>
          <div className="card-box-detail">
            <div className="card-box-title">
              <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
              <div className="card-box-detail-address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Ruby Lou Kitchen</h3>
              </div>
              <div className="card-box-detail-date">
                <i class="fa-regular fa-calendar-days"></i>
                <h3>14 Haz Çar - 23:30</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="card-box-img">
            <img src={img} alt="" />
          </div>
          <div className="card-box-detail">
            <div className="card-box-title">
              <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
              <div className="card-box-detail-address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Ruby Lou Kitchen</h3>
              </div>
              <div className="card-box-detail-date">
                <i class="fa-regular fa-calendar-days"></i>
                <h3>14 Haz Çar - 23:30</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card-box">
        <div className="card-box-img">
            <img src={img} alt="" />
        </div>
        <div className="card-box-detail">
            <div className="card-box-title">
                <h1>Ezginin Günlüğü konseri</h1>
            </div>
            <div className="card-box-details">
                <div className="card-box-detail-address">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <h3>Ruby Lou Kitchen</h3>
                </div>
                <div className="card-box-detail-date">
                    <i class="fa-regular fa-calendar-days"></i>                    
                    <h3>14 Haz Çar - 23:30</h3>
                </div>
            </div>
        </div>
    </div> */}
    </>
  );
}

export default Card;
