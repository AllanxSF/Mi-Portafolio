import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Img';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';
import "../../styles/components/organisms/ProjectCard.css";

function ProjectCard({ project }) {
    const navigate = useNavigate();

    return (
        <Card className="project-card">
            <Image src={project.image} alt={project.name} className="card-img-top" />
            <Card.Body className="project-card-body">
                <CardBody title={project.name} description={project.description} />
                <Button
                    variant="primary"
                    onClick={() => window.open(project.github, "_blank")}
                >
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>

    );
}

export default ProjectCard;