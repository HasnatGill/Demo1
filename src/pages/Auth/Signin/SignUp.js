import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { SiNaver } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";

function Signin() {
    const [state, setState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        middle_name: "",
    });

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        let { email, password } = state;
        var formData = new FormData(e.preventDefault());
        formData.append("email", email);
        formData.append("password", password);
        formData.append("type", "register");

        try {
            let { data } = await axios.post(
                "http://bookdarak.com/api/api.php",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Success!", data);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllData = async () => {
        try {
            const data = await axios.get("http://bookdarak.com/api/api.php/");
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

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
                            <div className="col-6">
                                <label className="fw-bold">First Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="firstName"
                                    value={state.firstName}
                                    placeholder="First Name"
                                    className="inputtext mt-1 mb-1"
                                />
                            </div>
                            <div className="col-6">
                                <label className="fw-bold">last Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="lastName"
                                    value={state.lastName}
                                    placeholder="last Name"
                                    className="inputtext mt-2 mb-1"
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
                                    value={state.middle_name}
                                    placeholder="Middle Name"
                                    className="inputtext w-100 mt-2 mb-1"
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
                                    value={state.email}
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
                                    name="password"
                                    placeholder="Password"
                                    className="inputtext w-100 mt-2 mb-1 "
                                    onChange={handleChange}
                                    value={state.password}
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
                            <div className="col checkbox">
                                <input type="checkbox" />
                                <p>
                                    I've read and accepted <span>Terms of Service</span> and{" "}
                                    <span>Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                        <div className="row m-0 p-0 text-center">
                            <div className="col-12 my-1">
                                <button className="Botton w-75 py-1" onClick={handleSubmit}>
                                    Sign in{" "}
                                </button>
                            </div>
                            <div className="col-12">
                                Don't have an account?{" "}
                                <a href="#" className="Signlink">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;