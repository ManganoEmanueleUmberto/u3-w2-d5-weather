import { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [formState, setFormState] = useState({
    search: "",
  });
  const navigate = useNavigate();
  const handleFieldChange = (propertyValue) => {
    console.log(propertyValue);
    setFormState({ search: propertyValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + formState.search);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search a city"
                  className=" mr-sm-2"
                  onChange={(e) => handleFieldChange(e.target.value)}
                />
              </Col>
              <Col>
                <Button type="submit" className="align-items-center">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
