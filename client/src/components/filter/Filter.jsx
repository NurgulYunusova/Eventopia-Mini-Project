import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setCategory,
  setLocationAddress,
  setLocationName,
  setStartDate,
  setEndDate,
} from "../slicers/filterSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "../filter/filter.scss";

function Filter() {
  const dispatch = useDispatch();
  const { category, location, startDate, endDate } = useSelector(
    (state) => state.filter
  );
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/categories").then((res) => {
      setCategories(res.data);
    });

    axios.get("http://localhost:3001/api/location").then((res) => {
      setLocations(res.data);
    });
  }, []);

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const handleChangeLocation = (event) => {
    const { name, value } = event.target;
    if (name === "address") {
      dispatch(setLocationAddress(value));
    } else if (name === "name") {
      dispatch(setLocationName(value));
    }
  };

console.log(location);
  return (
    <div className="filter-section">
      <div className="filter-section-left">
        <h1>All Events</h1>
      </div>
      <div className="filter-section-right">
        <div className="box-section">
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="formcontrol">
              <InputLabel className="inp" id="category-label">
                Category
              </InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Category"
                onChange={handleChangeCategory}
              >
                {categories &&
                  categories.map((q, key) => (
                    <MenuItem value={q._id} key={key}>
                      {q.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="formcontrol">
              <InputLabel className="inp" id="location-address-label">
                Location
              </InputLabel>
              <Select
                labelId="location-address-label"
                id="location-address-select"
                value={location.address}
                label="Location"
                onChange={handleChangeLocation}
                name="address"
              >
                {locations &&
                  locations.map((q, key) => (
                    <MenuItem value={q.address} key={key}>
                      {q.address}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="formcontrol">
              <InputLabel className="inp" id="location-name-label">
                Place
              </InputLabel>
              <Select
                labelId="location-name-label"
                id="location-name-select"
                value={location.name}
                label="Place"
                onChange={handleChangeLocation}
                name="name"
              >
                {locations &&
                  locations.map((q, key) => (
                    <MenuItem value={q.name} key={key}>
                      {q.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="date-section">
          <div className="start-date-section">
            <p>Start Date</p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => dispatch(setStartDate(e.target.value))}
            />
          </div>
          <div className="end-date-section">
            <p>End Date</p>
            <input
              type="date"
              value={endDate}
              onChange={(e) => dispatch(setEndDate(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
