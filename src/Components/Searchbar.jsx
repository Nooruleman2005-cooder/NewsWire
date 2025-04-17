import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search/${search}`);
        } else {
            navigate('/home');
        }
    };

    return (
        <>
            <Form onSubmit={handleSearch}>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search by author" value={search} onChange={(e) => setSearch(e.target.value)}
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Searchbar