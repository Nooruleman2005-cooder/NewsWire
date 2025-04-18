import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spinner, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';

const SearchPage = () => {
    const { searchTerm } = useParams();
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(
                    'https://newsdata.io/api/1/news?apikey=pub_81461a9772b2793a5bedb477880c371a9ded4&q=world%20news '
                );
                const data = await res.json();
                const authorFiltered = data?.results?.filter(
                    (results) =>
                        results?.source_name &&
                        results?.source_name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredNews(authorFiltered);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching filtered news:', err);
                setLoading(false);
            }
        };

        fetchNews();
    }, [searchTerm]);

    return (
        <Container className="mt-4 search-page">
            <h1 style={{ textAlign: 'center', color: 'rgb(73, 73, 122)' }}>Search Results for: <strong>{searchTerm}</strong></h1>
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <Spinner animation="border" />
                </div>
            ) : filteredNews?.length > 0 ? (
                filteredNews?.map((result, index) => (
                    <Card key={index} className="mb-4 card">
                        <Card.Header className='newsh'>{result?.source_name}</Card.Header>
                        <Card.Body>
                            <img src={result?.image_url} alt="" />
                            <Card.Title className='newst'>{result?.title}</Card.Title>
                            <Card.Text className='newstex'>
                                {result?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p className='news-subtitle'>No articles found for "{searchTerm}"</p>
            )}
        </Container>
    );
};

export default SearchPage;
