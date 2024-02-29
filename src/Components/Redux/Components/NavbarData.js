import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
function NavbarData() {
  const allUser = useSelector((state) => state.cart.User);
  const total = useSelector((state) => state.cart.totalCount);
  console.log(total, "total datataatat");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Again</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Create Post</Nav.Link>
            <Nav.Link href="/read">
              All Post&nbsp;(
              {allUser && allUser.length > 0 ? (
                allUser.length
              ) : (
                <span variant="info">Your Post List is empty</span>
              )}
              )
            </Nav.Link>

            {/* Additionally, you can check if allUser is an array before accessing its length to further safeguard against errors: */}
            {/* {Array.isArray(allUser) && allUser.length > 0 ? (
  allUser.length
) : (
  <span variant="info">Your cart is empty</span>
)} */}

            <Nav.Link href="/showDataRk">Show RTK Data</Nav.Link>
            <Nav.Link href="/showcartItems">
              <FaCartPlus style={{ fontSize: "20px" }} />
            </Nav.Link>
            <div className="">
              {/* <span>{total.length}</span> */}
              <span>{total}</span>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarData;
