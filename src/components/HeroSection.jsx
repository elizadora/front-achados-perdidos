import React, { useState } from 'react';
import ilustracao from '../assets/imagens/ilustracaoHeroSection.png'; 
import ModalCadastro from './ModalCadastro'; // <-- vamos criar esse componente

const HeroSection = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ilustracao}
            alt="Pessoa segurando objeto perdido"
            className="max-w-xs"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900">
            Perdeu. Achou. <br /> Conectou.
          </h1>
          <p className="text-gray-500 mt-2">Reencontros começam aqui.</p>
          <button
            onClick={() => setMostrarModal(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition"
          >
            Cadastrar item
          </button>
        </div>
      </section>

      {mostrarModal && <ModalCadastro onClose={() => setMostrarModal(false)} />}
    </>
  );
};

export default HeroSection;
