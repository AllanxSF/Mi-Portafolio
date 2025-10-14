import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBodyNews from '../../../components/molecules/NewBodyCard';

describe('CardBodyNews Component', () => {
    const mockData = {
        title: 'Noticia de prueba',
        date: '2025-10-13',
        content: 'Este es el contenido de la noticia de prueba.',
    };

    it('renderiza el título correctamente', () => {
        render(<CardBodyNews {...mockData} />);
        expect(screen.getByText(mockData.title)).toBeTruthy();
    });

    it('renderiza la fecha correctamente', () => {
        render(<CardBodyNews {...mockData} />);
        const dateElement = screen.getByText(`Fecha: ${mockData.date}`);
        expect(dateElement).toBeTruthy();
        expect(dateElement).toHaveClass('card-subtitle');
    });

    it('renderiza el contenido correctamente', () => {
        render(<CardBodyNews {...mockData} />);
        expect(screen.getByText(mockData.content)).toBeTruthy();
    });
});
