import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./Components/AuthPractice/RegistrationForm";
import LoginForm from "./Components/AuthPractice/LoginForm";
import RegistrationValidation from "./Components/AuthWithValidation/RegistrationValidation";
import LoginValidation from "./Components/AuthWithValidation/LoginValidation";
import NavbarData from "./Components/Redux/Components/NavbarData";
import Create from "./Components/Redux/Components/Create";
import Read from "./Components/Redux/Components/Read";
import Update from "./Components/Redux/Components/Update";
import ShowDataRTK from "./Components/Redux/Components/ShowDataRTK";
import Cart from "./Components/Redux/Components/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarData />
        <Routes>
          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/Login" element={<LoginForm />}></Route>
          {/* <Route path="/" element={<RegistrationValidation />} />
          <Route path="/loginValidation" element={<LoginValidation />} /> */}
          {/* <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/showDataRk" element={<ShowDataRTK/>} />
          <Route path="/showcartItems" element={<Cart/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
