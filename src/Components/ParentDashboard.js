import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import academic from '../Assets/academic.png'
import extracurricularactivities from '../Assets/extracurricularactivities.png'
import senddata from '../Assets/senddata.png'
import AcademicsPage from '../SubComponents/AcademicsPage';

export const ParentDashboard = ({logout}) => {
const navigate=useNavigate();

  const handlelogout=()=>{
    logout();
    navigate('/')
  }

  const user=JSON.parse(localStorage.getItem("LoginData"))
const username=user?.pmail?  user.pmail : "parent"

  return (
    <>
    <Header/>
    <h3 className="my-5 text-center">Parent Dashboard Welcome {username} </h3>
    <Container>

    <Row xs={1} md={3} className="g-0">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col 
        // key={idx}
        >
          <Card style={{ width: '15rem', height: '20rem', objectFit:"cover"}}>
            <Card.Img variant="top" src={academic} style={{ width: "auto", height: '15rem'}}/>
            <Card.Body>
          <Button variant="primary">Academic Stats</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col 
        // key={idx}
        >
          <Card style={{ width: '15rem', height: '20rem' }}>
            <Card.Img variant="top" src={extracurricularactivities} style={{ width:"auto", height: '15rem'}} />
            <Card.Body>
          <Button variant="primary">Extracurricular Activities</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col 
        // key={idx}
        >
          <Card style={{ width: '15rem', height: '20rem' }}>
            <Card.Img variant="top" src={senddata} style={{ width: "auto", height: '15rem'}} />
            <Card.Body>
          <Button variant="primary">Ask / Tell Faculty</Button>
            </Card.Body>
          </Card>
        </Col>
       
    </Row>
    </Container>

      <Button variant="danger" onClick={handlelogout}>Logout</Button>
    </>
  )
}