import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import burgerData from "./data.js";
import DetailPage from "./Pages/Detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function BurgerItems(props) {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/img/" + props.index + ".png"}
        width="80%"
      ></img>
      <h4>{props.burger.title}</h4>
      <p>{props.burger.content}</p>
      <p>{props.burger.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>왜사 정보임</h4>
    </div>
  );
}

function App() {
  const [burger] = useState(burgerData);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="warning" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="home">MYEE BURGER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/home");
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              DETAIL
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/home"
          element={
            <div>
              {" "}
              <div className="main-bg" />
              <Container>
                <Row>
                  <Col sm>
                    {burger.map((item, index) => {
                      return (
                        <BurgerItems
                          burger={burger[index]}
                          index={index + 1}
                        ></BurgerItems>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </div>
          }
        />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<About />}>
          <Route path="/member" element={<div>멤버정보임</div>} />
          <Route path="/location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
