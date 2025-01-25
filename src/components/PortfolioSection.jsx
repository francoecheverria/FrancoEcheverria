import React from 'react';
import { IoIosGlobe } from 'react-icons/io';

const projects = [
  {
    name: 'Cuentas Exactas',
    description: 'Aplicación web desarrollada para el registro de gastos e ingresos.',
    technologies: [
      { name: 'LARAVEL', color: '#fa342d' },
      { name: 'PGSQL', color: '#316191' },
      { name: 'REACT', color: '#61dafb' },
      { name: 'TAILWIND', color: '#02afb8' }
    ],
    link: 'https://cuentasexactas.com/',
    imgSrc: './img/cuentasexactas.png'
  },
  {
    name: 'Metricas-PageSpeed',
    description: 'Aplicacion Web para medir las metricas de una pagina web.',
    technologies: [
      { name: 'LARAVEL', color: '#fa342d' },
      { name: 'PGSQL', color: '#316191' }
    ],
    link: 'https://cuentasexactas.com/',
    imgSrc: './img/cuentasexactas.png'
  },
  {
    name: 'Tennis Tournament',
    description: 'Simulador de torneo de tenis de equipos femeninos o masculinos.',
    technologies: [
      { name: 'LARAVEL', color: '#fa342d' },
      { name: 'PGSQL', color: '#316191' }
    ],
    link: 'https://cuentasexactas.com/',
    imgSrc: './img/cuentasexactas.png'
  },
  {
    name: 'Space Explorer',
    description: 'Videojuego interactivo de busqueda de objetos en el espacio.',
    technologies: [
      { name: 'REACT', color: '#61dafb' },
      { name: 'TAILWIND', color: '#02afb8' }
    ],
    link: 'https://cuentasexactas.com/',
    imgSrc: './img/cuentasexactas.png'
  }
];

const ProjectCard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#22D3EE]">PORTAFOLIO</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 sm:px-6 sm:pt-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="max-w-xs bg-[#1e1b47] rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.imgSrc}
              alt={project.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-yellow-300">{project.name}</h2>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>

              <div className="flex flex-wrap justify-center items-center gap-2 mt-4 rounded-full">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: tech.color,
                      color: tech.color === '#fa342d' || tech.color === '#316191' ? 'white' : 'black'
                    }}
                    // En pantallas pequeñas (mobile), se apilan de a dos
                    className="sm:flex-1 sm:max-w-[calc(50%-0.5rem)] text-xs font-bold px-2 py-1 rounded-full"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-4 text-pink-300">
                <a href={project.link} className="hover:text-pink-500 transition" title="Website">
                  <div className="flex items-center gap-2 bg-[#027dc4] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                    <IoIosGlobe size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
