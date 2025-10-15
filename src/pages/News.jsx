import React from 'react';
import { Container } from 'react-bootstrap';
import NewsCard from '../components/organisms/NewCard';
import news from '../data/News';
import '../styles/pages/News.css';

function News() {
    return (
        <Container className="mt-5">
            <div className="news-section">
                <h2 className="news-title text-center">Noticias</h2>

                <div className="row justify-content-center">
                    {news.map((item) => (
                        <NewsCard key={item.id} newsItem={item} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default News;







