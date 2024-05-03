import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
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
    <div className="searchContainer d-flex flex-column justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "300px" }}>
        <path
          d="M298.667 192c0 11.026-11.13 20.442-13.849 30.61-2.812 10.515 2.035 24.213-3.293 33.419-5.404 9.337-19.742 11.95-27.32 19.528-7.579 7.576-10.194 21.912-19.53 27.313-9.206 5.326-22.903.476-33.417 3.287C191.095 308.873 181.686 320 170.667 320c-11.026 0-20.442-11.129-30.61-13.848-10.515-2.813-24.213 2.034-33.42-3.294-9.336-5.404-11.95-19.741-19.528-27.32-7.576-7.578-21.911-10.193-27.313-19.53-5.325-9.206-.476-22.902-3.286-33.417C53.794 212.428 42.667 203.02 42.667 192c0-11.026 11.129-20.442 13.848-30.61 2.812-10.515-2.035-24.213 3.293-33.419 5.405-9.337 19.742-11.95 27.321-19.528 7.578-7.576 10.193-21.912 19.53-27.313 9.206-5.326 22.902-.476 33.417-3.287C150.238 75.127 159.648 64 170.666 64c11.027 0 20.442 11.129 30.61 13.848 10.516 2.813 24.214-2.034 33.42 3.294 9.337 5.404 11.95 19.741 19.528 27.32 7.576 7.578 21.912 10.193 27.313 19.53 5.326 9.206.476 22.902 3.286 33.417 2.716 10.163 13.844 19.572 13.844 30.591z"
          style={{ fill: "#ffc200" }}
        />
        <circle cx="170.667" cy="192" r="85.333" style={{ fill: "#f98b00" }} />
        <ellipse
          cx="138.667"
          cy="160"
          rx="40.468"
          ry="20.234"
          transform="rotate(-45 138.667 160)"
          style={{ fill: "#ffa300" }}
        />
        <path
          d="M447.257 302.355A140.188 140.188 0 0 0 448 288a138.667 138.667 0 0 0-138.667-138.667c-64.945 0-119.306 44.713-134.375 104.989a95.855 95.855 0 1 0-57.625 172.345h309.334a63.833 63.833 0 0 0 20.59-124.312z"
          style={{ fill: "#bcc5ff" }}
        />
        <path
          d="M384 277.333a106.546 106.546 0 0 0-210.36-24.099 95.892 95.892 0 1 0-56.307 173.433c43.3 0 79.476-28.856 91.44-68.246C227.357 374.15 251.081 384 277.333 384a105.47 105.47 0 0 0 50.22-13.105A63.88 63.88 0 1 0 384 277.333z"
          style={{ fill: "#d6deff" }}
        />
        <ellipse
          cx="373.333"
          cy="330.667"
          rx="37.65"
          ry="25.1"
          transform="rotate(-45 373.333 330.667)"
          style={{ fill: "#eff2ff" }}
        />
        <ellipse
          cx="245.333"
          cy="245.333"
          rx="62.75"
          ry="41.834"
          transform="rotate(-45 245.333 245.333)"
          style={{ fill: "#eff2ff" }}
        />
        <ellipse
          cx="85.333"
          cy="320"
          rx="50.2"
          ry="33.467"
          transform="rotate(-45 85.333 320)"
          style={{ fill: "#eff2ff" }}
        />
      </svg>
      <Form className="w-25" onSubmit={handleSubmit}>
        <Row>
          <Col xs={10} className="ms-auto me-auto ">
            <Form.Control
              type="text"
              placeholder="Search a city"
              className=" mr-sm-2"
              onChange={(e) => handleFieldChange(e.target.value)}
            />
          </Col>
          <Col xs={3} className="ms-auto me-auto mt-4">
            <Button type="submit" className="align-items-center">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchPage;
