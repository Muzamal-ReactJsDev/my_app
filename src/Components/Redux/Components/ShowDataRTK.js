import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Features/UserDataSlice";
import { Col, Container, Row } from "react-bootstrap";
import "./ShowDataRTK.css";
import ShowDataRTKPop from "./ShowDataRTKPop";
import { Vortex } from "react-loader-spinner";
const ShowDataRTK = () => {
  const [showRtkPopUp, setShowRtkPopUp] = useState(false);
  // aik tareeka show waly ma k id kis trah send krnii ha or aik ya ha....
  const [rtkPopUpData, setrtkPopUpData] = useState("");
  console.log(rtkPopUpData, "yahooooo RTK data for POpUP");
  const dispatch = useDispatch();
  const { User, loading, error } = useSelector((state) => state.cart);
  console.log(User, "hiii RTK Quey");
  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const handleDataRtk = (rtkItems) => {
    console.log(rtkItems, "RTK data");
    // this for set the data to send in the Rtk
    setrtkPopUpData(rtkItems);
  };

  const showRTKpopUP = () => {
    // this is for the RTK POPUP
    setShowRtkPopUp(true);
  };
  const CloseshowRTKpopUP = () => {
    // this is for the RTK Close POPUP
    setShowRtkPopUp(false);
  };

  return (
    <div>
      <h3 className="text-center">RTK QUery Data</h3>
      <Container>
        <Row>
          {loading ? (
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          ) : (
            User?.map((rtkData, id) => {
              return (
                <>
                  <Col
                    key={rtkData.id}
                    xs={12}
                    md={4}
                    lg={4}
                    onClick={() => {
                      handleDataRtk(rtkData);
                      showRTKpopUP();
                    }}
                  >
                    <div className="rtk-main-div">
                      <h6>Title: {rtkData.title}</h6>
                      <h5>Price: {rtkData.price}</h5>
                      <h5>Description:</h5>
                      <p className="rtk-desc">{rtkData.description}</p>
                      <img
                        className="rtk-image"
                        src={rtkData.image}
                        alt="img"
                      />
                    </div>
                  </Col>
                </>
              );
            })
          )}
        </Row>
      </Container>

      {showRtkPopUp && (
        <ShowDataRTKPop
          dataRTK={rtkPopUpData}
          showRTKpop={showRTKpopUP}
          CloseRTKpopUP={CloseshowRTKpopUP}
        />
      )}
    </div>
  );
};

export default ShowDataRTK;
