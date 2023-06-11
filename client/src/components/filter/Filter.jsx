import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "../filter/filter.scss";
function Filter() {
  //location place startdate enddate
  const [category, setcategory] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [place, setplace] = React.useState("");
  const [startDate, setstartDate] = React.useState();
  const [endDate, setendDate] = React.useState();

  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setlocation(event.target.value);
  };
  const handleChangePlace = (event) => {
    setplace(event.target.value);
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
                  <MenuItem value={10}>Concert</MenuItem>
                  <MenuItem value={20}>Sport</MenuItem>
                  <MenuItem value={30}>Music</MenuItem>
                  <MenuItem value={40}>Theatre</MenuItem>
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
                  <MenuItem value={10}>Sport</MenuItem>
                  <MenuItem value={20}>Music</MenuItem>
                  <MenuItem value={30}>Theatre</MenuItem>
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
                  <MenuItem value={10}>Sport</MenuItem>
                  <MenuItem value={20}>Music</MenuItem>
                  <MenuItem value={30}>Theatre</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="date-section">
            <div className="start-date-section">
              <p>Start Date</p>
              <input
                type="date"
                onChange={(e) => setstartDate(e.target.value)}
              />
            </div>
            <div className="end-date-section">
              <p>End Date</p>
              <input type="date" onChange={(e) => setendDate(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
