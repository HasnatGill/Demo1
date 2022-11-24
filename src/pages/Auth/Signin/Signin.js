import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { SiNaver } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";


const initialState = { email: "", password: "", first_name: "", last_name: "", middle_name: "" }

function Signin() {

  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      ...state
    };
    e.preventDefault()
    axios.post(`http://bookdarak.com/api/api.php`, { data })
      .then(res => {
        console.log(res);
        setState("")
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="Sign-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-2 col-md-8 offset-md-4 col-lg-6 offset-lg-3">
            <div className="card mt-5 mb-5">
              <div className="header">
                <h3 className="mt-2">Let's Go</h3>
                <div className="em">
                  <span className="border-0">&#128521;</span>
                </div>
                <button className="Button px-4 py-1">
                  <RiKakaoTalkFill /> Sign in with kakaotalk
                </button>
              </div>
              <div className="icon mt-1">
                <h6>
                  <BsApple className="me-1" />
                  Apple
                </h6>
                <h6>
                  <BsFacebook className="me-1" />
                  FaceBook
                </h6>
                <h6>
                  <SiNaver className="me-1" />
                  Naver
                </h6>
                <h6>
                  <BsGoogle className="me-1" />
                  Google
                </h6>
              </div>
              <p className="text-center">or continue with</p>
              <div className="input">
                <div className="row m-0 p-0">
                  <div className="col-12 col-md-12 col-lg-6">
                    <label className="fw-bold">First Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="inputtext mt-1 mb-1 form-control"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <label className="fw-bold">last Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="last_name"
                      placeholder="last Name"
                      className="inputtext mt-2 mb-1 form-control"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0 ">
                  <div className="col">
                    <label className="fw-bold">Middle Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="middle_name"
                      placeholder="Middle Name"
                      className="inputtext  mt-2 mb-1 form-control"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0 ">
                  <div className="col">
                    <label className="fw-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="inputtext form-control mt-2 mb-1"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="col">
                    <label className="fw-bold">Password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      className="inputtext form-control mt-2 mb-1 "
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="col">
                    <a href="#" className="Froget">
                      Forget your password?
                    </a>
                  </div>
                </div>
                <div className="row m-0 p-0  ">
                  <div className="col checkbox" >
                    <input type="checkbox" />
                    <p>
                      I've read and accepted <span>Terms of Service</span> and{" "}
                      <span>Privacy Policy</span>
                    </p>
                  </div>
                </div>
                <div className="row m-0 p-0 text-center">
                  <div className="col-12 my-1">
                    <button className="Botton w-75 py-1" disabled={loading
                    } onClick={handleSubmit}>
                      {
                        !loading
                          ? "Sign Up"
                          : <div className="spinner-border spinner-border-sm"></div>
                      }
                    </button>
                  </div>
                  <div className="col-12">
                    Don't have an account? <a href="#" className="Signlink">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
