import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    let items = { username, password };
    console.log(items, "Login Value");
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp, "response from api");
      })
      .catch((error) => {
        console.log(error, "error from the api");
      });
    // axious Method
    // let items = { username, password };
    // console.log(items, "Login Value");
    // axios
    //   .post("https://dummyjson.com/auth/login", items)
    //   .then((res) => {
    //     console.log(res, "resssssss");
    //   })
    //   .catch((error) => {
    //     console.log(error, "erro");
    //   });

    // try {
    //      let items = { username, password };
    // console.log(items, "Login Value");
    //   const dataresonse=await fetch("https://dummyjson.com/auth/login",{
    //     method:"POST",
    //     headers:{
    //       "Content-Type": "application/json",
    //       // Accept: "application/json",
    //     },
    //     body:JSON.stringify(items)
    //   })
    //   const datahandle=await dataresonse.json();
    //   console.log(datahandle,"response");
    //   return datahandle;
    // } catch (error) {
    //   console.log(error,"error");
    // }
    // let items = { username, password };
    // console.log(items, "Login Value");
    //   const dataresonse=await fetch("https://dummyjson.com/auth/login",{
    //     method:"POST",
    //     headers:{
    //       "Content-Type": "application/json",
    //       // Accept: "application/json",
    //     },
    //     body:JSON.stringify(items)
    //   })
    //   try {
    //   const datahandle=await dataresonse.json();
    //   console.log(datahandle,"response");
    //   return datahandle;
    // } catch (error) {
    //   console.log(error,"error");
    // }
  };
  return (
    <div>
      <Container className="registration-container">
        <Row>
          <Col>
            <form onSubmit={handleLogin}>
              <div>
                <h5>User Name</h5>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="enter the username"
                />
              </div>
              <div>
                <h5>Password</h5>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="enter the password"
                />
              </div>
              <button type="submitt">Login</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LoginForm;
