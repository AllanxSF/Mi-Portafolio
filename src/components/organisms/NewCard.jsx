import React from 'react';
import CardBodyNews from '../molecules/NewBodyCard';
import Button from '../atoms/Button';
import Image from '../atoms/Img';

function NewsCard({ newsItem }) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card news-card shadow-sm h-100">
                {newsItem.image && (
                    <Image src={newsItem.image} alt={newsItem.title} className="card-img-top" />)}
                <div className="card-body d-flex flex-column">
                    <CardBodyNews title={newsItem.title} date={newsItem.date} content={newsItem.content} />
                    <Button variant="primary" className="mt-auto" onClick={() => window.open(newsItem.link, "_blank")} >
                        Leer más
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;

