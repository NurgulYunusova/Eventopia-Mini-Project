import React, { Fragment, useEffect, useState } from "react";
import "../card/card.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events")
      .then((res) => setData(res.data));
  }, []);

  const goToDetails = (id) => {
    console.log(id);
    navigate(`/eventDetails/${id}`);
  };

  console.log(data);

  return (
    <>
      <div className="cards">
        {data &&
          data.map((q, key) => (
            <Fragment key={key}>
              <div className="card-box" onClick={() => goToDetails(q._id)}>
                <div className="card-box-img">
                  <img src={q.image} alt={q.title} />
                </div>
                <div className="card-box-detail">
                  <div className="card-box-title">
                    <h1>{q.title}</h1>
                  </div>
                  <div className="card-box-details">
                    <div className="card-box-detail-address">
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      <h3>{q.location.name}</h3>
                    </div>
                    <div className="card-box-detail-date">
                      <i className="fa-regular fa-calendar-days"></i>
                      <h3>14 Haz Çar - 23:30</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
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
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <h3>Ruby Lou Kitchen</h3>
                </div>
                <div className="card-box-detail-date">
                    <i className="fa-regular fa-calendar-days"></i>                    
                    <h3>14 Haz Çar - 23:30</h3>
                </div>
            </div>
        </div>
    </div> */}
    </>
  );
}

export default Card;
