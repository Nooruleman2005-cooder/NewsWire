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
                    'https://newsdata.io/api/1/news?apikey=pub_81461a9772b2793a5bedb477880c371a9ded4&q=world%20news '
                );
                const data = await res.json();
                console.log("API Response: ", data);
                setNews(data?.results);
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
                        {news?.map((item, index) => (
                            <Card key={index} className="mb-4 card">
                                <Card.Header className='newsh'>{item?.source_name}</Card.Header>
                                <Card.Body>
                                    <img src={item?.image_url} alt="" />
                                    <Card.Title className='newst'>{item?.title}</Card.Title>
                                    <Card.Text className='newstex'>
                                        {item?.description}
                                    </Card.Text>
                                    <GoSomewhere title={item?.source_name} />
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
