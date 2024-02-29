import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Auth.css";
import { Formik, useFormik } from "formik";
import { validationLogin } from "./ValidationLogin";
const LoginValidation = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    handleReset,
  } = useFormik({
    // yahan initialValues ki jaga kuch b likh  sakty hain left waly initialValues ki jaga
    initialValues: initialValues,
    // yahan validationSchema ki jaga kuch or Likhian gay to Error message show nhii hon gay....
    validationSchema: validationLogin,
    onSubmit: async (values) => {
      console.log(values, "values of the form");

      // or ya credential nechay wali api k liya....!!!!{
      //   "username": "michael",
      //   "password": "success-password"
      // }

      await fetch("https://json-placeholder.mock.beeceptor.com/login", {
        // ya nechay wali APi ka credential hain......{ username: 'kminchelle',
        // password: '0lelplR',}
        // await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response, "Response from the api");
        })
        .catch((error) => {
          console.log(error, "error in the Data");
        });
      handleReset();
    },
  });
  console.log(errors, "error in the  form data for Validation");

  return (
    <div>
      <Container className="registration-style">
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div>
                <h5>User Name</h5>
                <input
                  name="username"
                  type="text"
                  autoComplete="off"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="enter the username"
                />
                <div>
                  {errors.username && touched.username ? (
                    <span>{errors.username}</span>
                  ) : null}
                </div>
              </div>
              <div>
                <h5>Password</h5>
                <input
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="enter the password"
                />
              </div>
              <div>
                {errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}
              </div>

              <div className="text-center">
                <button className="mt-3" type="submit">
                  Registration
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginValidation;
