import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';

const GoSomewhere = ({title}) => {
        const navigate = useNavigate();
        const handleClick = () => {
        const value = title ? title : 'Unknown';
            navigate(`/search/${value}`);
        }

  return (
    <>
    <Button variant="primary" className='custom-nav-link2' onClick={handleClick}>Go somewhere</Button>
    </>
  )
}

export default GoSomewhere