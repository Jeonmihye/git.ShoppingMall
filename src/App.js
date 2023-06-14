import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="warning" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="#home">MYEE BURGER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">What's New</Nav.Link>
            <Nav.Link href="#pricing">Story</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/빅맥.png"}
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/슈슈버거.png"}
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/img/치킨버거.png"}
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
