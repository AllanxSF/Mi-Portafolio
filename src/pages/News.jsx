import React from 'react';
import NewsCard from '../components/organisms/NewCard';
import news from '../data/news';
import '../styles/pages/News.css';

function News() {
    return (
        <section id="news" className="news-section container mt-5">
            <h2 className="news-title">Noticias</h2>

            <div className="row justify-content-center">
                {news.map((item) => (
                    <NewsCard key={item.id} newsItem={item} />
                ))}
            </div>
        </section>
    );
}

export default News;





