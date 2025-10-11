import React from 'react';

function CardBodyNews({ title, date, content }) {
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fecha: {date}</h6>
            <p className="card-text">{content}</p>
        </>
    );
}

export default CardBodyNews;
