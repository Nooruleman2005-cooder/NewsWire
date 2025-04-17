import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 ">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 NewsWire Orbit. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
