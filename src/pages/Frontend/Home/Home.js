import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineTicket } from "react-icons/hi";
import Header from "../../component/Header";
import Aladdin from "../../../pics/aladdin.jpg"
import dear from "../../../pics/dear.jpeg"

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="toppart bg-img text-white d-flex justify-content-center flex-column">
          <div className="container">
            <div className="row">
              <div className="col ">
                <h1><b>Find your speccial experience.</b></h1>
                <p>
                  From local escapes to far-flung adventures find what makes you happy anytime anywhere.
                </p>
                <div className="input w-50 bg-white d-flex justify-content-center align-items-center px-3 py-1 rounded-3 pe-2">
                  <BsSearch className="text-dark" />
                  <input
                    type="text"
                    placeholder="Search destinations or activities"
                    className="border-0 form-control"
                  />
                  <button className="btn text-white bg-orange">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-2">
            <div className="card h-50 position-relative">
              <span
                class="badge text-bg-danger rounded-0 top-3 mt-2 position-absolute"
                style={{ marginLeft: "-8px" }}
              >
                Up to 50% off
              </span>
              <img
                src={Aladdin}
                className="card-img h-100"
              ></img>
              <div className="position-absolute bottom-0 mb-2 ms-4">
                <h4 className="ms-4 text-white">Aladdin</h4>
              </div>
            </div>
            <div className="card mt-1 position-relative" style={{ height: "49%" }}>
              <span
                class="badge text-bg-danger rounded-0 top-3 mt-2 position-absolute"
                style={{ marginLeft: "-8px" }}
              >
                Up to 50% off
              </span>
              <img
                src={dear}
                className="card-img h-100"
              ></img>
              <div className="position-absolute bottom-0 mb-2 ms-1">
                <h4 className=" text-white text-center">Dear Evan Hansens</h4>
              </div>
            </div>
          </div>
          <div className="col-8 rounded-2 position-relative bg-img2">
            <div className="rounded-2">
              <div className="position-absolute bottom-0 ms-3 mb-2 text-white">
                <h3><b>Explore our seoul</b></h3>
                <p>
                  200 hotels,345 local fights and 234 bus providers
                </p>
              </div>
              <div className="position-absolute end-0 bottom-0 mb-4 me-3">
                <button className="btn bg-orange text-white">Explore</button>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card h-100 border-0">
              <span
                class="badge text-bg-danger rounded-0 top-3 mt-2 position-absolute"
                style={{ marginLeft: "-8px" }}
              >
                Up to 50% off
              </span>
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                className="card-img h-75"
                alt=""
              />
              <div className="card-body h-50">
                <h5 className="ms-1">Person Hotel</h5>
                <p className="mb-0 ms-1">Hotel/stay</p>
                <p className="mb-0 pt-2"><GoLocation className="text-primary"/> Turkey,Mamaris</p>
                <p className="mb-0 pt-2"><HiOutlineTicket className="text-primary"/> Ticket available:375</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
