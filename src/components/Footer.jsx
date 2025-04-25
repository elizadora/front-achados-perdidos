import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Logo = () => (
  <div className="flex items-center justify-start gap-2 text-white mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
    <span className="font-bold text-2xl">Achados & Perdidos</span>

  </div>
);

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <div className="flex gap-4">
            <a href="https://instagram.com/achadoseperdidos.app" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-200" />
            </a>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-200" />
            </a>
            <a href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-200" />
            </a>
            <a href="mailto:contato@achadoseperdidos.com.br" className="flex items-center gap-1 text-lg hover:text-gray-200">
              <MdEmail className="text-2xl" />
              <span className="hidden sm:inline"></span>
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="/privacidade" className="underline hover:text-gray-200">Política de Privacidade</a>
          <a href="/termos" className="underline hover:text-gray-200">Termos de Uso</a>
        </div>

        <p className="text-xs text-gray-200 mt-6 text-center">
          © 2025 Achados & Perdidos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
