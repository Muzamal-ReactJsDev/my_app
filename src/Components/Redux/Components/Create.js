import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Create.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserData } from "../Features/UserDataSlice";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const getUserData = (e) => {
    setUserData(
      {
        ...userData,
        [e.target.name]: [e.target.value],
      },
      console.log(userData, "Form Data which i'm Giving")
    );
  };
  const handleSubmitt = (e) => {
    e.preventDefault();
    // const items = userData;
    // console.log(items, "Forms Values");
    // nechay hum na jo CreateUserData likha ha uska mtlb k hum is form ka data hum na api ma bheeej rhy hain a name same wohi dena ha jo hum na pechay action(userDtaSlice) ka components ma likha ha tha k data hum api ma bheej sekhian....
    dispatch(CreateUserData(userData));
    navigate("/Read");
  };

  return (
    <div>
      <Container className="create-css">
        <Row>
          <h3>Create Post</h3>
          <Col>
            {/* yahan nechay input filed ma same wohi name deny hain jo name hum na Api ma liya hain..... */}

            <form onSubmit={handleSubmitt}>
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={getUserData}
              />
              <h5>Email</h5>
              <input
                type="email"
                name="email"
                autoComplete="off"
                onChange={getUserData}
              />
              <h5>Age</h5>
              <input type="age" name="age" onChange={getUserData} />
              <h5>Gender</h5>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={getUserData}
              />
              &nbsp;&nbsp; Male
              <br />
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
              />
              &nbsp;&nbsp; Female
              <br />
              <br />
              <div>
                <button type="submit">Submitt</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Create;
