import React, { Fragment, useEffect, useState } from "react";
import "../card/card.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setData } from "../slicers/dataSlice";
import moment from "moment";

function Card() {
  // const data = useSelector((state) => state.data);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/events").then((res) => {
  //     dispatch(setData(res.data));
  //   });
  // }, [dispatch]);


  // const goToDetails = (id) => {
  //   navigate(`/eventDetails/${id}`);
  // };

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events")
      .then((res) => setData(res.data));
  }, []);

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
                      <h3>
                        {moment(q.startDate).format("DD MMMM YYYY")} -{" "}
                        {q.startDate.slice(11, 16)}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    </>
  );
}

export default Card;
