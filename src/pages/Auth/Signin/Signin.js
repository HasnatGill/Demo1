import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { SiNaver } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
// import { AiFillEye } from "react-icons/ai";

function Signin() {
  return (
    <div className="Sign-page">
      <div className="container">
        <div className="card">
          <div className="header">
            <h4>Let's Go</h4>
            <div className="em">
            <span className="border-0">&#128521;</span>
            </div>
            <button className="Button px-4 py-1">
              <RiKakaoTalkFill /> Sign in with kakaotalk
            </button>
          </div>
          <div className="icon mt-1">
            <h6>
              <BsApple className="me-1"/>
              Apple
            </h6>
            <h6>
              <BsFacebook className="me-1"/>
              FaceBook
            </h6>
            <h6>
              <SiNaver className="me-1"/>
              Naver
            </h6>
            <h6>
              <BsGoogle className="me-1"/>
              Google
            </h6>
          </div>
          <p className="text-center">or continue with</p>
          <div className="input">
            <div className="row m-0 p-0">
              <div className="col-6">
                <label className="fw-bold">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="inputtext mt-1 mb-1"
                />
              </div>
              <div className="col-6">
                <label className="fw-bold">last Name</label>
                <input
                  type="text"
                  placeholder="last Name"
                  className="inputtext mt-2 mb-1"
                />
              </div>
            </div>
            <div className="row m-0 p-0 ">
              <div className="col">
                <label className="fw-bold">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="inputtext w-100 mt-2 mb-1"
                />
              </div>
            </div>
            <div className="row m-0 p-0">
              <div className="col">
                <label className="fw-bold">Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="inputtext w-100 mt-2 mb-1 "
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
                <input type="checkbox"  />
                <p>
                  I've read and accepted <span>Terms of Service</span> and{" "}
                  <span>Privacy Policy</span>
                </p>
              </div>
            </div>
            <div className="row m-0 p-0 text-center">
              <div className="col-12 my-1">
                <button className="Botton w-75 py-1">Sign in </button>
              </div>
              <div className="col-12">
                Don't have an account? <a href="#" className="Signlink">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
