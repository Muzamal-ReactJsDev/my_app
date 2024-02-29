// // ya second way ha popUp show krwamy ka.... aik hum na show ma kiya howa ha ab ya RTK query ma ha...

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useDispatch } from "react-redux";
// import { addCartItem } from "../Features/UserDataSlice";

// function ShowDataRTKPop({ dataRTK, showRTKpop, CloseRTKpopUP }) {
//   const dispatch = useDispatch();
//   console.log(
//     dataRTK,
//     "Here is the Data which i recieve from the ShowDataRtk to Display in popUp"
//   );

//   function AddtoCart(addcartdta) {
//     console.log(addcartdta, "Here i want to Perform add to Cart");
//     dispatch(addCartItem(addcartdta));

//   }

//   return (
//     <>
//       <h2>Data in the Modal</h2>
//       <Modal show={showRTKpop} backdrop="static" keyboard={false}>
//         <div className="p-4">
//           <h5>Title: &nbsp;{dataRTK.title}</h5>
//           <p>Price: &nbsp;{dataRTK.price} RS</p>
//           <h6>Category: &nbsp;{dataRTK.category}</h6>
//         </div>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={CloseRTKpopUP}>
//             Close
//           </Button>
//           <Button>-</Button>
//           <Button>+</Button>
//           <Button variant="success" onClick={() => AddtoCart(dataRTK)}>
//             Add to Cart
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default ShowDataRTKPop;

// add cartData..

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/UserDataSlice";

function ShowDataRTKPop({ dataRTK, showRTKpop, CloseRTKpopUP }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  console.log(
    dataRTK,
    "Here is the Data which i recieve from the ShowDataRtk to Display in popUp"
  );

  // State to track quantity

  const handleIncrement = () => {
    // Function to increase quantity
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Function to decrease quantity (prevent going below 1)
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const AddtoCart = (product) => {
    // Function to add item to cart with the selected quantity
    console.log(product, quantity, "Data to Perform Add in Cart");

    const TotalData = {
      ...product,
      quantity: quantity,
    };
    console.log(TotalData, "Data Which will be send to the Cart");
    dispatch(addCartItem(TotalData));
    CloseRTKpopUP();
    // console.log(itemToAdd,"Data to Perform Add in Cart")
    // You may also consider adding a message or action after adding to the cart
    // e.g., displaying a toast notification or updating the UI to reflect the addition
  };
 

  return (
    <>
      <h2>Data in the Modal</h2>
      <Modal show={showRTKpop} backdrop="static" keyboard={false}>
        <div className="p-4">
          <h5>Title: &nbsp;{dataRTK.title}</h5>
          <p>Price: &nbsp;{dataRTK.price} RS</p>
          <h6>Category: &nbsp;{dataRTK.category}</h6>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseRTKpopUP}>
            Close
          </Button>
          <div>
            <Button variant="outline-danger" onClick={handleDecrement}>
              - {/* Decrement Button */}
            </Button>
            <span>{quantity}</span>
            <Button variant="outline-success" onClick={handleIncrement}>
              + {/* Increment Button */}
            </Button>
          </div>
          <Button variant="success" onClick={() => AddtoCart(dataRTK)}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShowDataRTKPop;