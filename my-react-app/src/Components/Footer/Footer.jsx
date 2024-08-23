import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container fluid className="p-3">
        <Row>
          <Col md="4" className="mb-3">
            <h5>BadBoyZ</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-white">Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md="4" className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </Col>
          <Col md="4" className="mb-3">
            <h5>Contact</h5>
            <p>
              12th Main Street<br />
              Bangalore North<br />
              Karnataka, India<br />
              +91 6362958069<br />
              badboyzparadise@gmail.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BadBoyZ. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
