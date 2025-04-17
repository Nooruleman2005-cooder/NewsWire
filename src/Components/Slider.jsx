import React from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import s2 from '../img/s2.jpg'
import b2 from '../img/b3.jpg'
import p2 from '../img/p2.jpg'

const Slider = () => {
  return (
    <>
      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={p2}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Stay updated with the latest political happenings across the globe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b2}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Latest updates from the business world. Stay ahead with our insights.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>All the sports news, from football to cricket and everything in between.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;