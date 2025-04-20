// ItensRecentes.jsx
import React, { useState } from 'react';
import ModalDetalhes from '../components/ModalDetalhes'; // Importando o ModalDetalhes
import carteiraImg from '../assets/imagens/carteira.png';
import chavesImg from '../assets/imagens/chaves.png';
import fonesImg from '../assets/imagens/fones.png';
import jaquetaImg from '../assets/imagens/jaqueta.png';

const itens = [
  {
    nome: 'Carteira marrom',
    categoria: 'Objetos Pessoais',
    local: 'Parque',
    data: '22/05/2025',
    status: 'Achado',
    imagem: carteiraImg,
    descricao: 'Tamanho pequeno, com detalhes em couro.'
  },
  {
    nome: 'Chaves',
    categoria: 'Chaves',
    local: 'UFC',
    data: '30/05/2025',
    status: 'Perdida',
    imagem: chavesImg,
    descricao: 'Chaves de carro, com chaveiro azul.'
  },
  {
    nome: 'Fones de ouvido',
    categoria: 'Eletrônicos',
    local: 'Cantina',
    data: '17/04/2025',
    status: 'Achado',
    imagem: fonesImg,
    descricao: 'Fones sem fio, cor preta.'
  },
  {
    nome: 'Jaqueta jeans',
    categoria: 'Roupas',
    local: 'Americanas',
    data: '01/04/2025',
    status: 'Perdida',
    imagem: jaquetaImg,
    descricao: 'Jaqueta de jeans, tamanho médio.'
  },
];

const StatusBadge = ({ status }) => {
  const base = 'px-2 py-1 text-xs font-semibold rounded-full';
  const styles = status === 'Achado'
    ? `${base} bg-green-100 text-green-800`
    : `${base} bg-yellow-100 text-yellow-800`;

  return <span className={styles}>{status}</span>;
};

const ItensRecentes = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Itens recentes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {itens.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-full h-40 object-cover rounded-t-lg transition duration-300 hover:grayscale"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{item.nome}</h3>
              <p className="text-sm text-gray-500">{item.categoria}</p>
              <p className="text-sm text-gray-500">Local: {item.local}</p>
              <p className="text-sm text-gray-500 mb-2">Data: {item.data}</p>
              <StatusBadge status={item.status} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-gray-500 text-sm hover:underline">Ver Mais +</button>
      </div>

      {/* Exibindo o ModalDetalhes */}
      <ModalDetalhes item={selectedItem} onClose={closeModal} />
    </section>
  );
};

export default ItensRecentes;
