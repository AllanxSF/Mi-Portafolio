import mijiBeauty from '../assets/img/miji.webp';
import teLoConvierto from '../assets/img/te lo.webp';
import miPortafolio from '../assets/img/portafolio.webp';

const projects = [
  {
    id: 1,
    name: 'Miji Beauty',
    description: 'Se desarrolló una tienda online de cosméticos coreanos utilizando HTML, CSS y JavaScript, con el objetivo de aplicar los fundamentos del desarrollo web. El proyecto nos ayudó a poner en práctica la estructura y diseño de páginas web, la creación de diseños mediante CSS y la implementación de validaciones en formularios para mejorar la interacción del usuario. Además, se trabajó con herramientas de control de versiones (GitHub).',
    image: mijiBeauty,
    github: 'https://github.com/AllanxSF/MijiBeauty'
  },
  {
    id: 2,
    name: 'Te lo convierto',
    description: 'Se desarrolló backend para la conversión de archivos más utilizados, usando Java y Spring Boot, aplicando una arquitectura (controlador, servicio, repositorio y modelo) para mantener una estructura modular y escalable. Se configuró Swagger para la documentación de la API y se realizaron pruebas de endpoints con Postman, garantizando el correcto funcionamiento de los servicios.El proyecto incluyó scripts SQL para la carga de datos inicial, archivos de configuración para distintos entornos y pruebas automatizadas con JUnit. ',
    image: teLoConvierto,
    github: 'https://github.com/LilvanZetaZeta/teloconvierto'

  },
  {
    id: 3,
    name: 'Mi Portafolio',
    description: 'Se desarrolló un portafolio personal utilizando el framework React, integrando componentes personalizados. El proyecto incluyó el almacenamiento de datos en archivos JSON y la implementación de pruebas unitarias con Jasmine y Karma, evaluando la correcta funcionalidad de los componentes. Esto permitió aplicar conocimientos de desarrollo web, diseño adaptable y testeo.',
    image: miPortafolio,
    github: 'https://github.com/AllanxSF/Mi-Portafolio'
  }
];

export default projects;