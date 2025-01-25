import React from 'react';
import { FaLaravel, FaReact, FaGithub, FaLinux, FaBootstrap, FaSymfony } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { DiScrum, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const SkillsSection = () => (
    <div className="p-6 ">

        <h2 className="text-3xl font-bold text-[#22D3EE]">SKILLS</h2>
        <div className="mt-8 space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Lenguajes de Programación</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-[#797db5] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <RiPhpFill size={20} /> PHP
                    </div>
                    <div className="flex items-center gap-2 bg-[#f7e119] text-black text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <IoLogoJavascript size={20} /> JavaScript
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-[#fa342d] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaLaravel size={20} /> Laravel
                    </div>
                    <div className="flex items-center gap-2 bg-cyan-500 text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaReact size={20} /> React
                    </div>
                    <div className="flex items-center gap-2 bg-[#212121] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaSymfony size={20} /> Symfony
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Herramientas y Metodologías</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-[#222a36] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaGithub size={20} /> GitHub
                    </div>
                    <div className="flex items-center gap-2 bg-[#e0b400] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaLinux size={20} /> Linux
                    </div>
                    <div className="flex items-center gap-2 bg-[#5b94ba] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <DiScrum size={20} /> Scrum
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Bases de Datos</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-[#316191] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <BiLogoPostgresql size={20} /> PostgreSQL
                    </div>
                    <div className="flex items-center gap-2 bg-[#00628c] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <DiMysql size={20} /> MySQL
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Maquetación Web</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-[#02afb8] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <RiTailwindCssFill size={20} /> TailwindCSS
                    </div>
                    <div className="flex items-center gap-2 bg-[#7d11f7] text-white text-sm font-bold px-3 py-2 rounded-full shadow-md">
                        <FaBootstrap size={20} /> Bootstrap
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SkillsSection;