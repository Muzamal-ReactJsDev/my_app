import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function Example({ setClosePopUp, setOpenPopUp, id }) {
  // ab phly yahan hum na jo Redux k store ma data Add kiya howa ha usayGet karian gay same jesy hum ny length k liya kiya tha...
  const allUser = useSelector((state) => state.cart.User);
  // ab yahan hum Condition Lagain gay ky....

  const ShowUserPopUp = allUser.filter((ele) => ele.id === id);
  console.log(ShowUserPopUp, "Here is the Data in the Popup to be Display");

  // const [show, setShow] = useState(true);

  return (
    <>
      <h2>Data in the Modal</h2>
      <Modal show={setOpenPopUp} backdrop="static" keyboard={false}>
        <div className="p-4">
          <h3>Name: &nbsp;{ShowUserPopUp[0].name}</h3>
          <p>Email: &nbsp;{ShowUserPopUp[0].email}</p>
          <h5>Gender: &nbsp;{ShowUserPopUp[0].gender}</h5>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={setClosePopUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;

// is ko nechay waly Method sy b kr skty hain us surat ma jb hum Read.js ma just dataStore send karian na k dataStore.id dataStore.is likhny sy just id ay gie lekin just dataStore likhny sy complete Data ay ga...

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useSelector } from "react-redux";

// function Example({ setClosePopUp, setOpenPopUp, id }) {

//   console.log(id,"llllllllllllll")

//   return (
//     <>
//       <h2>Data in the Modal</h2>
//       <Modal show={setOpenPopUp} backdrop="static" keyboard={false}>
//         <div className="p-4">
//           <h3>Name: &nbsp;{id.name}</h3>
//           <p>Email: &nbsp;{id.email}</p>
//           <h5>Gender: &nbsp;{id.gender}</h5>
//         </div>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={setClosePopUp}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default Example;
