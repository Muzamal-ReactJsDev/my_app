import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");

  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    let items = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
    };
    console.log(items, "values");
    //     fetch('',{
    //       method:"POST",
    //       headers:{
    //         "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify(items)
    //     }).then((response)=>{
    // console.log(response,"response from the api")
    //     }).catch((error)=>{
    // console.log(error,"error in the data")
    //     })
  };

  return (
    <div>
      <Container className="login-container">
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              {" "}
              {/* Attach onSubmit event to the form */}
              <div>
                <h5>First Name</h5>
                <input
                  type="text"
                  autoComplete="off"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Enter your Name"
                ></input>
              </div>
              <div>
                <h5>User Name</h5>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  placeholder="Enter your Name"
                ></input>
              </div>
              <div>
                <h5>Last Name</h5>
                <input
                  type="text"
                  name="lastName"
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Enter Last Name"
                ></input>
              </div>
              <div>
                <h5>Email</h5>
                <input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your Email"
                ></input>
              </div>
              <div>
                <h5>Phone Number</h5>
                <input
                  type="number"
                  name="phoneNumber"
                  autoComplete="off"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Enter your Phone"
                ></input>
              </div>
              <div>
                <h5>Password</h5>
                <input
                  style={{
                    backgroundColor: `${showPassword ? "yellow" : "red"}`,
                  }}
                  // type="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your Password"
                ></input>

                {showPassword ? (
                  <IoEyeSharp onClick={togglePassword} />
                ) : (
                  <FaEyeSlash onClick={togglePassword} />
                )}
              </div>
              <div>
                <h5>confirm Password</h5>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  autoComplete="off"
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  placeholder="Enter your confirmPassword"
                ></input>
              </div>
              {/* <button onClick={hanleSubmitt()}>Login</button> */}
              <button type="submit">Login</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;
