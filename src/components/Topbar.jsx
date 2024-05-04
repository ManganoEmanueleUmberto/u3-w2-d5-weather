import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>ClimaCast</Navbar.Brand>
        <Nav className="ms-auto">
          <Navbar.Text className="me-4">Wanna search another city?</Navbar.Text>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Back to search
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
