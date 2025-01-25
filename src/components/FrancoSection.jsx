import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FrancoSection = () => (
  <div className="p-6 ">
    <h1 className="text-4xl md:text-5xl font-extrabold md:text-left">
      <span className="text-[#D946EF]">FRANCO</span> <span className="text-[#22D3EE]">ECHEVERRIA</span>
    </h1>
    <p className="text-yellow-300 mt-2 text-lg md:text-left">
      Creciendo como desarrollador.
    </p>

    <p className="mt-6 md:text-left text-xl font-medium text-gray-400">
      BIENVENIDOS A MI PORTAFOLIO COMO DESARROLLADOR WEB.
    </p>

    <div className="mt-4 md:text-left text-base text-gray-400 leading-relaxed space-y-2">
      <p>
        Soy desarrollador PHP con 5 años de experiencia profesional, apasionado por crear soluciones
        robustas y eficientes.
      </p>
      <p>
        Durante mi carrera, he tenido la oportunidad de trabajar tanto como full stack como backend
        developer, especializándome en tecnologías como
        <span className="text-[#22D3EE] font-semibold"> Laravel</span> y
        <span className="text-[#22D3EE] font-semibold"> ReactJS</span>.
      </p>
    </div>

    <div className="mt-8 md:text-left text-base text-gray-400 leading-relaxed space-y-4">
      <div>
        <h2 className="text-xl font-bold text-[#22D3EE]">Habilidades principales:</h2>
        <ul className="mt-2 list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-gray-300">Backend:</span> PHP (5 años), Laravel (2 años), diseño y optimización de APIs RESTful.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Frontend:</span> ReactJS (2 años), integrando interfaces dinámicas y optimizadas para aplicaciones Laravel.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Bases de datos:</span> MySQL y PostgreSQL, experiencia en diseño, modelado y optimización de consultas complejas.
          </li>
          <li>
            <span className="font-semibold text-gray-300">DevOps:</span> Experiencia con despliegue en servidores Nginx y configuraciones en entornos de producción.
          </li>
          <li>
            <span className="font-semibold text-gray-300">Metodologías de trabajo:</span> Metodologías ágiles (Scrum, Kanban).
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#22D3EE]">Algunos proyectos destacados:</h2>
        <ul className="mt-2 list-disc list-inside space-y-2">
          <li>
            Desarrollo de sistemas de monitoreo en tiempo real para videovigilancia, integrados con datos geolocalizados.
          </li>
          <li>
            Implementación de CRMs personalizados, con funcionalidades de análisis de datos y dashboards interactivos.
          </li>
          <li>
            Integración de APIs para aplicaciones orientadas a la gestión financiera y seguimiento de presupuestos.
          </li>
          <li>
            Simulación de sistemas interactivos (como torneos deportivos y juegos educativos).
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-8 md:text-left text-base text-gray-400 leading-relaxed space-y-4">
      <p className="mt-4 md:text-left text-base text-gray-400 leading-relaxed">
        Si quieres ponerte en contacto conmigo, escríbeme a{' '}
        <a
          href="mailto:francoecheverria2000@gmail.com"
          className="text-[#22D3EE] underline hover:text-yellow-300"
        >
          francoecheverria2000@gmail.com
        </a>.
      </p>
    </div>

    <a
      href="/docs/CV-Franco-Echeverria.pdf"
      download="CV-Franco-Echeverria.pdf"
      className="mt-6 px-6 py-2 text-[#D946EF] font-bold rounded-lg border-[#D946EF] transition-colors duration-200 
             hover:bg-[#1E1B47] hover:text-[#22D3EE] hover:border hover:border-[#22D3EE] "
    >
      Descarga mi CV
    </a>

    <div className="mt-8 flex space-x-6 justify-center md:justify-start">
      <a
        href="https://www.linkedin.com/in/franco-echeverria/"
        className="text-[#22D3EE] transition hover:text-yellow-300"
        title="LinkedIn"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="https://github.com/francoecheverria"
        className="text-[#22D3EE] transition hover:text-yellow-300"
        title="GitHub"
      >
        <FaGithub size={28} />
      </a>
    </div>
  </div>
);

export default FrancoSection;
