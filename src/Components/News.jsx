import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';
import GoSomewhere from './GoSomewhere';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(
                    'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=837d1444fd5347bd95f8169fb8d41263'
                );
                const data = await res.json();
                console.log("API Response: ", data);
                setNews(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <div className="news-page">
                <h1 className="news-title">Latest News</h1>
                <p className="news-subtitle">
                    Discover trending stories, breaking developments, and insights into global events — all in one place.Stay updated with the latest headlines and breaking news from around the world.
                </p>

                {loading ? (
                    <div style={{ textAlign: 'center' }}>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="news-list">
                        {news.map((item, index) => (
                            <Card key={index} className="mb-4 card">
                                <Card.Header className='newsh'>{item.author}</Card.Header>
                                <Card.Body>
                                    <img src={item.urlToImage} alt="" />
                                    <Card.Title className='newst'>{item.title}</Card.Title>
                                    <Card.Text className='newstex'>
                                        {item.description}
                                    </Card.Text>
                                    <GoSomewhere title={item.author}/>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default News
