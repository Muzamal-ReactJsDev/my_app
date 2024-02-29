import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserData, ShowUserData } from "../Features/UserDataSlice";
import "./Read.css";
import { ThreeDots } from "react-loader-spinner";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
const Read = () => {
  const [popupId, setPopUpId] = useState("");
  console.log(popupId, "Value for the Modal");
  const [showPopUpModal, setShowPopUpModal] = useState(false);

  const setShowPopUp = () => {
    setShowPopUpModal(true);
  };
  const setClosePopUp = () => {
    setShowPopUpModal(false);
  };

  // ab yahan hum na aik variable dena ha or usay path dena ha k data hamara kahan ha or kis trah show krwana ha ...... or isay hum kuch is trah lkhian gay......
  //   const ShowAllUserFromStore = useSelector((state) => state.cart.User);
  //   console.log(ShowAllUserFromStore, "Data I'm getting from the Store");

  // or ab ma yahan Oper waly ki destructuring kr rha ha to kuxh is trh sy ho gie hum Redux store ma sy User,loading or error ko bahir nikal layian gay or kuxh is trah sy likhian gay.....

  const { User, error, loading } = useSelector((state) => state.cart);
  console.log(User, "Getting all the things from the Store");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowUserData());
  }, []);

  const DeleteData = (deleteId) => {
    console.log(deleteId, "This is for Deleting");
    dispatch(DeleteUserData(deleteId));
  };

  return (
    <div>
      <h3 className="text-center">Data in my List</h3>
      <Container className="read-css-container">
        <Row className="text-center read-css-row">
          {error ? (
            <h5>Error in the data</h5>
          ) : loading ? (
            <h5>
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </h5>
          ) : User && User.length > 0 ? (
            User?.map((dataStore, id) => {
              return (
                <>
                  <div key={dataStore.id}>
                    <Col className="read-css-col" xs={12}>
                      <h3>{dataStore.name}</h3>
                      <h5>{dataStore.email}</h5>
                      <span>{dataStore.age}</span>
                      <div className="read-css-btn-div">
                        <button
                          onClick={() => [
                            setPopUpId(dataStore.id),
                            setShowPopUp(),
                          ]}
                        >
                          View
                        </button>
                        {/* <button onClick={setShowPopUp}
              >View</button> */}
                        {/* yahan hum ny dataStore is liya likha ha kio k hum next edit waly form ma yahi same data chahat hain.... */}
                        <Link className="m-3" to={`/update/${dataStore.id}`}>
                          Update
                        </Link>
                        <button onClick={() => DeleteData(dataStore.id)}>
                          Delete
                        </button>
                      </div>
                    </Col>
                  </div>
                </>
              );
            })
          ) : (
            <h5>Error</h5>
          )}
        </Row>
      </Container>
      {showPopUpModal && (
        <PopUp
          setClosePopUp={setClosePopUp}
          setOpenPopUp={setShowPopUp}
          id={popupId}
        />
      )}
    </div>
  );
};

export default Read;
