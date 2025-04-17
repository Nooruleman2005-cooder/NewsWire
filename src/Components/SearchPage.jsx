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
                    'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=837d1444fd5347bd95f8169fb8d41263');
                const data = await res.json();
                const authorFiltered = data.articles.filter(
                    (article) =>
                        article.author &&
                        article.author.toLowerCase().includes(searchTerm.toLowerCase())
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
            ) : filteredNews.length > 0 ? (
                filteredNews.map((article, index) => (
                    <Card key={index} className="mb-4 card">
                        <Card.Header className='newsh'>{article.author}</Card.Header>
                        <Card.Body>
                            <img src={article.urlToImage} alt="" />
                            <Card.Title className='newst'>{article.title}</Card.Title>
                            <Card.Text className='newstex'>
                                {article.description}
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
