import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProjectCard from '../../../components/organisms/ProjectCard';


// 🔹 Componente envolvente con Router
const MockRouter = ({ children }) => {
    const router = createMemoryRouter(
        [{ path: '*', element: children }],
        { initialEntries: ['/'] }
    );
    return <RouterProvider router={router} />;
};

describe('ProjectCard Component', () => {
    // 🔹 Mock del window.open para evitar abrir pestañas reales
    beforeAll(() => {
        global.open = jasmine.createSpy('open');
    });

    const mockProject = {
        id: 1,
        name: 'Proyecto Test',
        description: 'Descripción test',
        image: 'test.jpg',
        github: 'https://github.com/test',
    };

    it('renderiza el título del proyecto', () => {
        render(
            <MockRouter>
                <ProjectCard project={mockProject} />
            </MockRouter>
        );
        expect(screen.getByText(mockProject.name)).toBeTruthy();
    });

    it('renderiza la descripción del proyecto', () => {
        render(
            <MockRouter>
                <ProjectCard project={mockProject} />
            </MockRouter>
        );
        expect(screen.getByText(mockProject.description)).toBeTruthy();
    });

    it('renderiza la imagen del proyecto', () => {
        render(
            <MockRouter>
                <ProjectCard project={mockProject} />
            </MockRouter>
        );
        const image = screen.getByRole('img', { name: mockProject.name });
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe(mockProject.image);
    });

    it('renderiza el botón "Ver detalles"', () => {
        render(
            <MockRouter>
                <ProjectCard project={mockProject} />
            </MockRouter>
        );
        const button = screen.getByText('Ver detalles');
        expect(button).toBeTruthy();
        expect(button.className).toContain('btn-primary');
    });

    it('abre el enlace de GitHub al hacer clic en el botón', () => {
        render(
            <MockRouter>
                <ProjectCard project={mockProject} />
            </MockRouter>
        );
        const button = screen.getByText('Ver detalles');
        fireEvent.click(button);
        expect(global.open).toHaveBeenCalledWith(mockProject.github, '_blank');
    });
});
