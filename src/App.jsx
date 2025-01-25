import React, { useState } from 'react';
import './index.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import FrancoSection from './components/FrancoSection';
import PortfolioSection from './components/PortfolioSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProtectedSection from './components/ProtectedSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('Franco');

  const sections = {
    Franco: <FrancoSection />,
    PORTAFOLIO: <PortfolioSection />,
    skills: <SkillsSection />,
    educacion: <EducationSection />,
    contacto: <ContactSection />,
    protected: <ProtectedSection />, // Nueva sección
  };

  return (
    <div className="flex h-screen">
      {/* Barra lateral */}
      <aside className="bg-[#1E1B47] text-[#95b7e8] min-h-screen flex flex-col items-center py-8 w-60">
        <img
          src="https://avatars.githubusercontent.com/u/97467210?s=400&u=795e3acab48e41cb3c644b9151b099c13f089820&v=4"
          alt="Perfil"
          className="rounded-full w-52 h-52 border-4 border-[#D946EF] mb-4"
        />
        <nav className="space-y-4">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`bg-transparent block w-full text-left px-4 py-2 rounded-lg ${activeSection === key ? 'text-[#22D3EE]' : 'text-[#D946EF] hover:text-[#22D3EE]'}`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      {/* Sección principal */}
      <main className="bg-[#12103B] text-[#95b7e8] p-8 w-1000">{sections[activeSection]}</main>
    </div>
  );
};

export default App;
