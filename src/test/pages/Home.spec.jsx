import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
    it('renderiza el nombre Allan en el título', () => {
        render(<Home />);
        const title = screen.getByText('Allan');
        expect(title).not.toBeNull();
    });

    it('renderiza el texto de presentación', () => {
        render(<Home />);
        const text = screen.getByText(/Estudiante de informática Duoc UC/i);
        expect(text).not.toBeNull();
    });

    it('renderiza el enlace a GitHub', () => {
        render(<Home />);
        const githubLink = screen.getByRole('link', { name: /github/i });
        expect(githubLink).not.toBeNull();
        expect(githubLink.getAttribute('href')).toBe('https://github.com/AllanxSF');
    });

    it('renderiza la imagen del gato con su alt correcto', () => {
        render(<Home />);
        const image = screen.getByAltText('Gato');
        expect(image).not.toBeNull();
        expect(image).toHaveClass('home-image');
    });

    it('verifica que el contenedor principal tenga las clases de estilo', () => {
        render(<Home />);
        const container = screen.getByText('Allan').closest('div');
        expect(container).toHaveClass('home-section');
    });
});


