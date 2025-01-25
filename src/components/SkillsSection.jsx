import React from 'react';
import { FaLaravel, FaReact, FaGithub, FaLinux, FaBootstrap, FaSymfony } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { DiScrum, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const SkillSection = () => (
    <div className="p-6">

        <h2 className="text-3xl font-bold text-[#22D3EE]">SKILLS</h2>
        
        <div className="mt-8 space-y-8">
            {/* Lenguajes de Programación */}
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Lenguajes de Programación</h3>
                <div className="flex flex-wrap gap-4">
                    <SkillTag icon={<RiPhpFill size={20} />} name="PHP" color="#797db5" />
                    <SkillTag icon={<IoLogoJavascript size={20} />} name="JavaScript" color="#f7e119" textColor="black" />
                </div>
            </div>

            {/* Frameworks */}
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                    <SkillTag icon={<FaLaravel size={20} />} name="Laravel" color="#fa342d" />
                    <SkillTag icon={<FaReact size={20} />} name="React" color="#00d8ff" />
                    <SkillTag icon={<FaSymfony size={20} />} name="Symfony" color="#212121" />
                </div>
            </div>

            {/* Herramientas y Metodologías */}
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Herramientas y Metodologías</h3>
                <div className="flex flex-wrap gap-4">
                    <SkillTag icon={<FaGithub size={20} />} name="GitHub" color="#222a36" />
                    <SkillTag icon={<FaLinux size={20} />} name="Linux" color="#e0b400" />
                    <SkillTag icon={<DiScrum size={20} />} name="Scrum" color="#5b94ba" />
                </div>
            </div>

            {/* Bases de Datos */}
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Bases de Datos</h3>
                <div className="flex flex-wrap gap-4">
                    <SkillTag icon={<BiLogoPostgresql size={20} />} name="PostgreSQL" color="#316191" />
                    <SkillTag icon={<DiMysql size={20} />} name="MySQL" color="#00628c" />
                </div>
            </div>

            {/* Maquetación Web */}
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Maquetación Web</h3>
                <div className="flex flex-wrap gap-4">
                    <SkillTag icon={<RiTailwindCssFill size={20} />} name="TailwindCSS" color="#02afb8" />
                    <SkillTag icon={<FaBootstrap size={20} />} name="Bootstrap" color="#7d11f7" />
                </div>
            </div>
        </div>
    </div>
);

const SkillTag = ({ icon, name, color, textColor = "white" }) => (
    <div className={`flex items-center gap-2 ${textColor === "black" ? 'text-black' : 'text-white'} text-sm font-bold px-3 py-2 rounded-full shadow-md`} style={{ backgroundColor: color }}>
        {icon} {name}
    </div>
);

export default SkillSection;
