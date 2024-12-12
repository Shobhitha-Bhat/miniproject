import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function NotifyParentPage() {
  return (
    <div className="container mt-4">
      {/* Compose Email Header */}
      <div className="d-flex justify-content-between align-items-center p-2 bg-light border rounded">
        <h5>Compose</h5>
        <Button variant="close" aria-label="Close"></Button>
      </div>

      {/* Compose Form */}
      <Form className="p-3 border rounded bg-white">
        {/* To Field */}
        <Form.Group className="mb-3" controlId="formTo">
          <Form.Label>To</Form.Label>
          <Form.Control type="email" placeholder="Enter Parent recipient email" />
        </Form.Group>

        {/* CC Field */}
        <Form.Group className="mb-3" controlId="formCC">
          <Form.Label>CC</Form.Label>
          <Form.Control type="email" placeholder="Enter CC email (optional)" />
        </Form.Group>

        {/* Subject Field */}
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter email subject" />
        </Form.Group>

        {/* Message Body */}
        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Write your message here..."
          />
        </Form.Group>

        {/* Actions */}
        <div className="d-flex justify-content-between">
          <Button variant="primary">Send</Button>
          <div>
            <Button variant="secondary" className="me-2">
              Save as Draft
            </Button>
            <Button variant="danger">Discard</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default NotifyParentPage;