import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import AcademicCard from '../SubComponents/AcademicCard'
// import ExtraCurricularCard from '../SubComponents/ExtraCurricularCard';
// import StudentProfileCard from '../SubComponents/StudentProfileCard';
import NotifyParentCard from '../SubComponents/NotifyParentCard';
import { Link } from 'react-router-dom';



export const FacultyDashboard = ({logout}) => {
const navigate=useNavigate();

  const handlelogout=()=>{
    logout();
    localStorage.clear();
    
  }

const user=JSON.parse(localStorage.getItem("LoginData"))
const username=user?.femail?  user.femail : "faculty"
  return (
    <>
    
        <Header/>
        <Container className="mt-4">
      <h3>Faculty Dashboard Welcome {username} </h3>
      <Row className="gy-4">
      <Card>
        <Card.Body>
            <Card.Title>Academics</Card.Title>
            <Card.Text>Click to view academic details.</Card.Text>
            <Link to="/academicspage" className="btn btn-primary">Go to Academics</Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
            <Card.Title>Extra-Curricular</Card.Title>
            <Card.Text>Track and manage students' extracurricular activities.</Card.Text>
            <Link to="/extracurricularpage" className="btn btn-primary">extracurriculars</Link>
        </Card.Body>          
      </Card>

      <Card>
        <Card.Body>
            <Card.Title>Student Profile</Card.Title>
            <Card.Text>View and manage student profile details.</Card.Text>
            <Link to="/studentprofilepage" className="btn btn-primary">Go to Student Profile</Link>
        </Card.Body>
      </Card>
        <Col md={6}>
          <NotifyParentCard />
        </Col>
      </Row>
    </Container>
    <Button variant="danger" onClick={handlelogout}>Logout</Button>
    </>
    

  )
}
