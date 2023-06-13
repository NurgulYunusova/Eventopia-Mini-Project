import React, { Fragment, useEffect } from "react";
import "../card/card.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../slicers/dataSlice";

function Card() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/events").then((res) => {
      dispatch(setData(res.data));
    });
  }, [dispatch]);


  const goToDetails = (id) => {
    navigate(`/eventDetails/${id}`);
  };


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
