import React, { Fragment, useEffect, useState } from "react";
import "../card/card.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import RatingStarComponent from "../ratingComponent/RatingStarComponent";

function Card() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();
  const { category, location, startDate, endDate } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    axios.get("http://localhost:3001/api/events").then((res) => {
      setData(res.data);
    });
  }, []);

  
  function filterEvents(events, category, locationAddress, locationName, startDate, endDate) {
    return events.filter((event) => {
      const eventCategory = event.categories[0]._id;
      const eventLocationAddress = event.location.address;
      const eventLocationName = event.location.name;
      const eventStartDate = new Date(event.startDate);
      const eventEndDate = new Date(event.endDate);

      const isCategoryMatch = !category || eventCategory === category;
      const isLocationAddressMatch = !locationAddress || eventLocationAddress === locationAddress;
      const isLocationNameMatch = !locationName || eventLocationName === locationName;
      const isStartDateMatch = !startDate || eventStartDate >= new Date(startDate);
      const isEndDateMatch = !endDate || eventEndDate <= new Date(endDate);

      return (
        isCategoryMatch &&
        isLocationAddressMatch &&
        isLocationNameMatch &&
        isStartDateMatch &&
        isEndDateMatch
      );
    });
  }

  useEffect(() => {
    const filtered = filterEvents(data, category, location.address, location.name, startDate, endDate);
    setFilteredData(filtered);
  }, [data, category, location, startDate, endDate]);

  const goToDetails = (id) => {
    navigate(`/eventDetails/${id}`);
  };

  return (
    <>
      <div className="cards">
        {filteredData &&
          filteredData.map((q, key) => (
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
                    <div>
                      <RatingStarComponent rating={q.rating} />
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
