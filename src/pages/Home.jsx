import React from 'react';
import Image from '../components/atoms/Img';
import gato from '../assets/img/gato.webp';
import Text from '../components/atoms/Text';
import Url from '../components/atoms/Url';
import { Container } from 'react-bootstrap';
import '../styles/pages/Home.css';

function Home() {
  return (
    <Container fluid className="home-container">
      {/* 🔹 Div contenedor para separar los estilos de esta página */}
      <div className="home-section">
        <Url href="https://github.com/AllanxSF">
          <Image src={gato} alt="Gato" className="home-image" />
        </Url>

        <h1 className="home-title">Allan</h1>

        <Text className="home-text">
          Estudiante de informática Duoc UC | Entusiasta de la Tecnología
        </Text>

        <Text className="home-text">
          <Url href="https://github.com/AllanxSF">
            https://github.com/AllanxSF
          </Url>
        </Text>

        <Text className="home-text">
          Bienvenido a mi portafolio personal donde comparto mis proyectos y
          noticias recientes. ¡Explora y conoce más sobre mi trabajo!
        </Text>
      </div>
    </Container>
  );
}

export default Home;

