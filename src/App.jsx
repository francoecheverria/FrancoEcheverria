import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import { FaHome, FaBriefcase, FaGraduationCap, FaLaptopCode, FaPhone } from 'react-icons/fa'; // Icons

import FrancoSection from './components/FrancoSection';
import PortfolioSection from './components/PortfolioSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProtectedSection from './components/ProtectedSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('Franco');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to toggle sidebar

  const sections = {
    Franco: <FrancoSection />,
    PORTAFOLIO: <PortfolioSection />,
    skills: <SkillsSection />,
    educacion: <EducationSection />,
    contacto: <ContactSection />,
  };

  const MainContent = () => {
    const location = useLocation();
    if (location.pathname === '/protected') {
      return <ProtectedSection />;
    }

    return sections[activeSection];
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-[#242424] text-[#95b7e8]">

        {/* Sidebar */}
        <aside
          className={`bg-[#1E1B47] text-[#95b7e8] min-h-screen flex flex-col items-center py-8 transition-all duration-300 ${isSidebarVisible ? 'w-60' : 'w-20'}`}
        >

          {/* Sidebar toggle button */}
          <div>
            <button
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className="text-[#D946EF] p-3 transition-all duration-200 hover:text-[#22D3EE] mb-8"
            >
              <span className="text-lg">☰</span>
            </button>
          </div>

          {/* Profile Image */}
          <div className={`${isSidebarVisible ? 'block' : 'hidden'}`}>
            <img
              src="https://avatars.githubusercontent.com/u/97467210?s=400&u=795e3acab48e41cb3c644b9151b099c13f089820&v=4"
              alt="Perfil"
              className="rounded-full w-52 h-52 border-4 border-[#D946EF] mb-4"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-4 w-full">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`bg-transparent block w-full text-left px-4 py-2 rounded-lg border-[transparent] text-base font-medium cursor-pointer transition-all duration-200 ${activeSection === key
                  ? 'text-[#22D3EE]'
                  : 'text-[#D946EF] hover:text-[#22D3EE] hover:border hover:border-[#22D3EE]'} `}
              >
                <div className="flex items-center">
                  {/* Icons */}
                  {isSidebarVisible ? (
                    // If sidebar is visible, show the text
                    <>
                      {key === 'Franco' && <FaHome className="mr-2" />}
                      {key === 'PORTAFOLIO' && <FaBriefcase className="mr-2" />}
                      {key === 'skills' && <FaLaptopCode className="mr-2" />}
                      {key === 'educacion' && <FaGraduationCap className="mr-2" />}
                      {key === 'contacto' && <FaPhone className="mr-2" />}
                      {key.toUpperCase()}
                    </>
                  ) : (
                    // If sidebar is hidden, only show the icon
                    <>
                      {key === 'Franco' && <FaHome size={30} className="mr-2" />}
                      {key === 'PORTAFOLIO' && <FaBriefcase size={30} className="mr-2" />}
                      {key === 'skills' && <FaLaptopCode size={30} className="mr-2" />}
                      {key === 'educacion' && <FaGraduationCap size={30} className="mr-2" />}
                      {key === 'contacto' && <FaPhone size={30} className="mr-2" />}
                    </>
                  )}
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[#12103B]">
          <MainContent />
        </main>

      </div>

      <Routes>
        <Route path="/protected" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
