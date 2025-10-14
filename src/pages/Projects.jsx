import React from 'react';
import { Container } from 'react-bootstrap';
import projects from '../data/Projects';
import ProjectCard from '../components/organisms/ProjectCard';
import '../styles/pages/Projects.css';

function Projects() {
    return (
        <Container className="projects-container my-5" fluid>
            <h1 className="projects-title">Proyectos</h1>
            <div className="projects-row">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Container>
    );
}

export default Projects;

