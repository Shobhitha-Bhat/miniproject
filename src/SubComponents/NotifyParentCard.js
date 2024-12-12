import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotifyParentCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/notifyparentpage');
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Notify Parent</Card.Title>
        <Card.Text>Send messages to parents about student updates.</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Open Chat
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NotifyParentCard;