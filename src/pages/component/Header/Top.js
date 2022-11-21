import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

function Top() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="left">
          <h3>AthomeTrip</h3>
          <p>
            <BsSearch className="ms-2" />{" "}
            <input
              type="text"
              placeholder="Search Destinations or Activities"
            />
          </p>
        </div>
        <div className="right">
          <select>
          <option defaultValue="Eng">
               ENG
            </option>
            <option value="URD">
              URD
            </option>
          </select>
          <button className="Help">Help</button>
          <button className="Join">Join as partner</button>
          <button className="Sign">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Top;
