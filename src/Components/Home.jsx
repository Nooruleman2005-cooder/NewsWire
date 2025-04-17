import React from 'react'
import { Button, Container, Row, Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';
import b1Image from '../img/b1.jpg';
import p1Image from '../img/p1.jpg';
import s1Image from '../img/s1.jpg';

const Home = () => {
  return (
    <>
      <section className="hero bg-white text-rgb(73, 73, 122) py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Welcome to NewsWire Orbit</h1>
              <p className='headp'>You'r go-to platform for the latest world news.</p>
              <Button size="lg" href="#featured" className='custom-nav-link2'>
                Explore Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="featured" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Featured News</h2>
          <Row>
            <Col sm={12} md={4}>
              <Card className='card'>
                <Card.Img variant="top" src={b1Image} height={200} />
                <Card.Body>
                  <Card.Title>Business News</Card.Title>
                  <Card.Text>
                    Latest updates from the business world. Stay ahead with our insights.
                  </Card.Text>
                  <Button variant="primary" className='custom-nav-link2' href="/news">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className='card'>
                <Card.Img variant="top" src={p1Image} height={200} />
                <Card.Body>
                  <Card.Title>Politics</Card.Title>
                  <Card.Text>
                    Stay updated with the latest political happenings across the globe.
                  </Card.Text>
                  <Button variant="primary" className='custom-nav-link2' href="/news">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className='card'>
                <Card.Img variant="top" src={s1Image} height={200} />
                <Card.Body>
                  <Card.Title>Sports</Card.Title>
                  <Card.Text>
                    All the sports news, from football to cricket and everything in between.
                  </Card.Text>
                  <Button variant="primary" className='custom-nav-link2' href="/news">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home