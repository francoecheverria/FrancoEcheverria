import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";


const ContactSection = () => (
    <div className="p-6">
        <h2 className="text-3xl font-bold text-[#22D3EE]">CONTACTAME</h2>
        <div className="flex space-x-4 mt-8">

            <div className="p-2">
                <a href="https://www.linkedin.com/in/franco-echeverria/" className="text-yellow-300 hover:text-yellow-300">
                    <div className="flex items-center gap-2 ">
                        <CiMail size={32} />
                        <p className="text-sm text-gray-300 mt-2"> Email: </p>
                    </div>
                    <p className="text-sm text-[#22D3EE] mt-2"> FRANCOECHEVERRIA2000@GMAIL.COM</p>
                </a>
            </div>

            <div className="p-2">
                <a href="https://www.linkedin.com/in/franco-echeverria/" className="text-yellow-300 hover:text-yellow-300">
                    <div className="flex items-center gap-2 ">
                        <FaWhatsapp size={32} />
                        <p className="text-sm text-gray-300 mt-2"> Whatsapp. </p>
                    </div>
                    <p className="text-sm text-[#22D3EE] mt-2"> +54 9 1123359227</p>
                </a>
            </div>

            <div className="p-2">
                <a href="https://www.linkedin.com/in/franco-echeverria/" className="text-yellow-300 hover:text-yellow-300">
                    <div className="flex items-center gap-2 ">
                        <FaLinkedin size={32} />
                        <p className="text-sm text-gray-300 mt-2"> Linkedin: </p>
                    </div>
                    <p className="text-sm text-[#22D3EE] mt-2"> Franco Echeverria</p>
                </a>
            </div>

            <div className="p-2">
                <a href="https://github.com/francoecheverria" className="text-yellow-300 hover:text-yellow-300">
                    <div className="flex items-center gap-2 ">
                        <FaGithub size={32} />
                        <p className="text-sm text-gray-300 mt-2"> Github: </p>
                    </div>
                    <p className="text-sm text-[#22D3EE] mt-2"> francoecheverria</p>
                </a>
            </div>



        </div>
    </div>
);

export default ContactSection;
