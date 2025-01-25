import React from 'react';

const EducationSection = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-[#22D3EE]">EDUCACIÓN</h2>

    <div className="mt-8">
      <SectionTitle title="Carreras de Grado" />
      <div className="space-y-6">
        <EducationCard
          title="Tecnicatura en Programación"
          description="Actualmente estoy cursando la carrera de Tecnicatura en Programación en la UNSAM."
          date="Febrero 2024 - Actualidad"
        />
        <EducationCard
          title="Ingeniería en Telecomunicaciones"
          description="Realicé el primer año de Ingeniería en Telecomunicaciones en la UNSAM."
          date="Febrero 2019 - Diciembre 2021"
        />
        <EducationCard
          title="Técnico en Informática"
          description="Me recibí de la secundaria técnica con el título de Técnico en Informática."
          date="Marzo 2013 - Diciembre 2018"
        />
      </div>
    </div>

    <div className="mt-8">
      <SectionTitle title="Cursos y Capacitaciones" />
      <div className="space-y-6">
        <EducationCard
          title="Curso de Programación Avanzada"
          description="Cursé un programa intensivo de programación avanzada para fortalecer mis habilidades técnicas."
          date="Enero 2023 - Abril 2023"
        />
      </div>
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="text-2xl font-bold text-[#22D3EE] mb-4">{title}</h3>
);

const EducationCard = ({ title, description, date }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-yellow-300">{title}</h4>
    <p className="text-sm text-gray-300 mt-1">{description}</p>
    <p className="text-sm text-[#22D3EE] mt-1">{date}</p>
  </div>
);

export default EducationSection;
