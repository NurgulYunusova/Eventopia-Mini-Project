import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "../filter/filter.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setLocation,
  setPlace,
  setStartDate,
  setEndDate,
} from "../slicers/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  // location place startdate enddate
  const { category, location, place, startDate, endDate } = useSelector(
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
    dispatch(setLocation(event.target.value));
  };

  const handleChangePlace = (event) => {
    dispatch(setPlace(event.target.value));
  };

  return (
    <>
      <div className="filter-section">
        <div className="filter-section-left">
          <h1>All Events</h1>
        </div>
        <div className="filter-section-right">
          <div className="box-section">
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="formcontrol">
                <InputLabel className="inp" id="demo-simple-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
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
                <InputLabel className="inp" id="demo-simple-select-label">
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Location"
                  onChange={handleChangeLocation}
                >
                  {locations &&
                    locations.map((q, key) => (
                      <MenuItem value={q._id} key={key}>
                        {q.address}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="formcontrol">
                <InputLabel className="inp" id="demo-simple-select-label">
                  Place
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={place}
                  label="Place"
                  onChange={handleChangePlace}
                >
                  {locations &&
                    locations.map((q, key) => (
                      <MenuItem value={q._id} key={key}>
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
    </>
  );
}

export default Filter;
