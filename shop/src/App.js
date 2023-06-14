import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="warning" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="#home">Myepang</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">식품</Nav.Link>
            <Nav.Link href="#features">생활용품</Nav.Link>
            <Nav.Link href="#pricing">주방용품</Nav.Link>
            <Nav.Link href="#pricing">패션의류</Nav.Link>
            <Nav.Link href="#pricing">완구/취미</Nav.Link>
            <Nav.Link href="#pricing">기획전</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default App;
