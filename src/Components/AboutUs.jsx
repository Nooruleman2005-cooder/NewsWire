import React from 'react'
import Slider from './Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';

export const AboutUs = () => {
  return (
    <>
      <div className='about'>
        <h1>About Us</h1>
        <p>
          Welcome to our website! We're a team of passionate developers dedicated to building
          high-quality web applications. Our mission is to create user-friendly and innovative
          digital experiences that solve real-world problems.
        </p>
        <Slider />
        <p>
          Whether you're here to explore our projects, learn more about what we do, or get in
          touch — we're glad you're here!
        </p>
      </div>
    </>
  )
}

export default AboutUs
