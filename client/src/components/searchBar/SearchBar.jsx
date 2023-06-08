import { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <>
      <div className="searchBar">
        <div>
          <label htmlFor="name">Search Event</label> <br />
          <input type="text" name="name" id="name" placeholder="Event Name" />
        </div>
        <div>
          <label htmlFor="place">Place</label> <br />
          <input type="text" name="place" id="place" placeholder="Place" />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
