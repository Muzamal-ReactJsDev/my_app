import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Auth.css";
import { Formik, useFormik } from "formik";
import { validation } from "./Validation";
const RegistrationValidation = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  // const Formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: (values) => {
  //     console.log(values, "values of the form");

  //   },
  // });
  // console.log(Formik,"jjj")
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
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values, "values of the form");
      handleReset();
    },
  });
  // console.log(errors, "error in the data");
  return (
    <div>
      <Container className="registration-style">
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Name</h5>
                <input
                  name="name"
                  type="text"
                  autoComplete="off"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="enter the name"
                />
                <div>
                  {errors.name && touched.name ? (
                    <span>{errors.name}</span>
                  ) : null}
                </div>
              </div>
              <div>
                <h5>Email</h5>
                <input
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="enter the email"
                />
                <div>
                  {errors.email && touched.email ? (
                    <span>{errors.email}</span>
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
              <div>
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  name="confirm_password"
                  autoComplete="off"
                  value={values.confirm_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="confirm your password"
                />
              </div>
              <div>
                {errors.confirm_password && touched.confirm_password ? (
                  <span>{errors.confirm_password}</span>
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

export default RegistrationValidation;
