import React from "react";
import { BsSearch } from "react-icons/bs";
import Header from "../../component/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="toppart bg-img text-white d-flex justify-content-center flex-column">
          <div className="container">
            <div className="row">
              <div className="col ">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae debitis recusandae perferendis sapiente quam eos,
                  obcaecati
                </p>
                <div className="input w-75 bg-white d-flex justify-content-center align-items-center px-3 py-1 rounded-3 pe-2">
                  <BsSearch className="text-dark" />
                  <input
                    type="text"
                    placeholder="Search destination or activites"
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
                Primary
              </span>
              <img
                src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
                className="card-img h-100"
              ></img>
              <div className="position-absolute bottom-0 mb-2 ms-1">
                <h3 className="ms-3 text-white">Heading</h3>
              </div>
            </div>
            <div className="card mt-1" style={{ height: "49%" }}>
              <img
                src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
                className="card-img h-100"
              ></img>
            </div>
          </div>
          <div className="col-8 rounded-2 position-relative bg-img2">
            <div className="rounded-2">
              <div className="position-absolute bottom-0 text-white">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  blanditiis
                </p>
              </div>
              <div className="position-absolute end-0 bottom-0 mb-4 me-3">
                <button className="btn bg-orange text-white">Button</button>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card h-100 pb-3">
              <img
                src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
                className="card-img h-50"
                alt=""
              />
              <div className="card-body h-50">
                <h5>Person Hotel</h5>
                <p className="mb-0">Hotel/stay</p>
                <p className="mb-0">Location</p>
                <p className="mb-0">Ticket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
