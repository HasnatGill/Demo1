import React from "react";
import { BiNotepad } from "react-icons/bi";
import { GiSevenPointedStar } from "react-icons/gi";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Pass
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ticket
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Musical
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Show</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Guided Tours <span className="badge badge-warning">New</span> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Hotel</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">B&B</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Snapshot</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Shuttle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Taxi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-1">SIM Card</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-1">
              <GiSevenPointedStar /> Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <BiNotepad /> Travel Note
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">...</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
