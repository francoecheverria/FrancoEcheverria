import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const ContactSection = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-[#22D3EE] mb-8">CONTACTAME</h2>

    <p className="text-lg text-gray-300 mb-8">Si te gustaría trabajar conmigo o hacerme alguna consulta, ¡no dudes en contactarme a través de cualquiera de los siguientes medios!</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Email */}
      <div className="flex flex-col items-center bg-[#212121] p-4 rounded-lg shadow-md">
        <a href="mailto:francoecheverria2000@gmail.com" className="text-yellow-300 hover:text-white flex items-center gap-2">
          <CiMail size={32} />
          <span className="text-sm text-gray-300">Email:</span>
        </a>
        <p className="text-sm text-[#22D3EE] mt-2">francoecheverria2000@gmail.com</p>
      </div>

      {/* Whatsapp */}
      <div className="flex flex-col items-center bg-[#212121] p-4 rounded-lg shadow-md">
        <a href="https://wa.me/541123359227" className="text-yellow-300 hover:text-white flex items-center gap-2">
          <FaWhatsapp size={32} />
          <span className="text-sm text-gray-300">Whatsapp:</span>
        </a>
        <p className="text-sm text-[#22D3EE] mt-2">+54 9 1123359227</p>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col items-center bg-[#212121] p-4 rounded-lg shadow-md">
        <a href="https://www.linkedin.com/in/franco-echeverria/" className="text-yellow-300 hover:text-white flex items-center gap-2">
          <FaLinkedin size={32} />
          <span className="text-sm text-gray-300">LinkedIn:</span>
        </a>
        <p className="text-sm text-[#22D3EE] mt-2">Franco Echeverria</p>
      </div>

      {/* GitHub */}
      <div className="flex flex-col items-center bg-[#212121] p-4 rounded-lg shadow-md">
        <a href="https://github.com/francoecheverria" className="text-yellow-300 hover:text-white flex items-center gap-2">
          <FaGithub size={32} />
          <span className="text-sm text-gray-300">GitHub:</span>
        </a>
        <p className="text-sm text-[#22D3EE] mt-2">francoecheverria</p>
      </div>
    </div>
  </div>
);

export default ContactSection;
