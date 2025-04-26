import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-left">Três Pulinhos</h2>
          <p className="text-sm text-gray-200 mt-1 text-left">Conectando pessoas aos seus pertences desde sempre.</p>
        </div>

        <div className="mt-4 text-left">
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://linkedin.com/in/beatrizmonteirofig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200"
              >
                <FaLinkedin className="text-lg" />
                beatrizmonteirofig
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/milenadnz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-200">
                <FaLinkedin className="text-lg" />
                milenadnz
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elizadora-mendon%C3%A7a-2373821aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-200">
                <FaLinkedin className="text-lg" />
                elizadoramendonça
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/mariacarolinalv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-200">
                <FaLinkedin className="text-lg" />
                mariacarolinalv
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/fernandopfarias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-200">
                <FaLinkedin className="text-lg" />
                fernandopfarias
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-center mt-8">
          <div className="flex gap-6 text-sm">
            <a href="/privacidade" className="underline hover:text-gray-200">Política de Privacidade</a>
            <a href="/termos" className="underline hover:text-gray-200">Termos de Uso</a>
          </div>

          <p className="text-xs text-gray-200 mt-4 text-center">
            © 2025 Achados & Perdidos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;