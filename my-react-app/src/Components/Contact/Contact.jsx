import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-page mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <h4>Our Address</h4>
          <p>BadBoyZ Paradise</p>
          <p>12th Main street</p>
          <p>Bangalore North</p>
          <p>Karnataka, India</p>

          <h4 className="mt-4">Phone</h4>
          <p>+91 6362958069</p>

          <h4 className="mt-4">Email</h4>
          <p>badboyzparadise@gmail.com</p>
        </Col>

        <Col md={6}>
          <h4>Send Us a Message</h4>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message..." />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
