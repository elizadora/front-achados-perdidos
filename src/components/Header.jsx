import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-blue-500 px-6 py-4 flex items-center justify-between bg-white">
      <h1 className="text-blue-700 text-xl font-bold">Três Pulinhos</h1>

      <div className="flex items-center space-x-6">
        {/* Campo de busca - visível sempre */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-4 pr-8 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700 text-sm" />
        </div>

        {/* Navegação em telas maiores */}
        <nav className="hidden sm:flex space-x-4 text-sm font-medium">
          <a href="#" className="text-black underline underline-offset-4">Início</a>
          <a href="#" className="text-black hover:underline">Meus itens</a>
        </nav>

        {/* Menu hambúrguer em telas pequenas */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-700 focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu dropdown mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:hidden z-50 p-4 space-y-2">
          <a href="#" className="block text-black hover:underline">Início</a>
          <a href="#" className="block text-black hover:underline">Meus itens</a>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-4 pr-8 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700 text-sm" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
