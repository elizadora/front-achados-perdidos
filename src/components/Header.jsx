import React, { useContext, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import DialogMessage from './DialogMessage';


import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [dialogConfig, setDialogConfig] = useState({
    title: "",
    message: "",
    open: false,
    onConfirm: () => { },
  });

  const navLinks = [
    { name: 'Início', path: '/principal' },
    { name: 'Meus itens', path: '/meus-itens' },
    { name: 'Conta', path: '/conta' }
  ];

  const handleDialogOpen = () => {
    setDialogConfig({
      title: "Atenção",
      message: "Você tem certeza que deseja sair da sua conta?",
      open: true,
      onConfirm: handleLogout,
    });
  }
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  }

  return (
    <header className="w-full border-b border-blue-500 px-6 py-4 flex items-center justify-between bg-white">
      <h1 className="text-blue-700 text-xl font-bold">Três Pulinhos</h1>

      <div className="flex items-center space-x-6">
        <nav className="hidden sm:flex space-x-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`text-black  ${link.path === window.location.pathname ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'}`}>
              {link.name}
            </Link>
          ))}
          <button onClick={handleDialogOpen} className="bg-blue-600 text-white px-4 py-0.5 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer" >
            Sair
          </button>
        </nav>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-700 focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:hidden z-50 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`block text-black ${link.path === window.location.pathname ? 'underline underline-offset-4' : ':hover:underline'}`}>
              {link.name}
            </Link>
          ))}

          <button onClick={handleDialogOpen} className="bg-blue-600 text-white px-4 py-0.5 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
            Sair
          </button>
        </div>
      )}

      <DialogMessage
        title={dialogConfig.title}
        message={dialogConfig.message}
        open={dialogConfig.open}
        onClose={() => setDialogConfig({ ...dialogConfig, open: false })}
        onConfirm={dialogConfig.onConfirm}
      />
    </header>
  );
};

export default Header;