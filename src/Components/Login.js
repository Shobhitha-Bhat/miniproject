import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = ({ userType, userLogin, setUserData }) => {
  const navigate = useNavigate();

  const [femail, setfemail] = useState("");
  const [facultyid, setfacultyid] = useState("");
  const [usn, setusn] = useState("");
  const [pmail, setpmail] = useState("");

  const goto = (e) => {
    e.preventDefault();
    if(userType==='faculty'){
      if(femail==="" || facultyid===""){
        alert("Its required to fill the fields")
        return;
      }
    }else if(userType==='parent'){
      if(usn==="" || pmail===""){
        alert("Its required to fill the fields")
        return;
      }
    }
    setUserData({ femail, facultyid, usn, pmail });
    setfemail('')
    setfacultyid('')
    setusn('')
    setpmail('')

    // Redirect based on userType
    if (userType === "faculty") {
      navigate("/facultyDashboard");
    } else if (userType === "parent") {
      navigate("/parentDashboard");
    }
  };

  const renderLoginForm = () => {
    if (userType === "faculty") {
      return (
        <Form onSubmit={goto}>
          <Form.Group controlId="facultyEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={femail}
              placeholder="Enter email"
              onChange={(e) => setfemail(e.target.value)}
              // required
            />
          </Form.Group>
          <Form.Group controlId="facultyid">
            <Form.Label>FacultyID</Form.Label>
            <Form.Control
              type="text"
              value={facultyid}
              onChange={(e) => setfacultyid(e.target.value)}
              placeholder="FacultyID"
              // required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="my-5">
            Login as Faculty
          </Button>
        </Form>
      );
    } else if (userType === "parent") {
      return (
        <Form onSubmit={goto}>
          <Form.Group controlId="parentEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={pmail}
              onChange={(e) => setpmail(e.target.value)}
              placeholder="Enter email"
              // required
            />
          </Form.Group>
          <Form.Group controlId="StudentUSN">
            <Form.Label>Student USN</Form.Label>
            <Form.Control
              type="text"
              value={usn}
              onChange={(e) => setusn(e.target.value)}
              placeholder="Student USN"
              // required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="my-5">
            Login as Parent
          </Button>
        </Form>
      );
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Select Login Type</h2>
          <div className="d-flex justify-content-between mb-4">
            <Button onClick={() => userLogin("faculty")}>Faculty Login</Button>
            <Button onClick={() => userLogin("parent")}>Parent Login</Button>
          </div>
          {renderLoginForm()}
        </Col>
      </Row>
    </Container>
  );
};
