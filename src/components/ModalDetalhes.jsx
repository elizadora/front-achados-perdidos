import React from 'react';
import StatusBadge from './StatusBadge';

const ModalDetalhes = ({ item, onClose }) => {
  if (!item) return null; // Se não houver item, o modal não será exibido

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        {/* Botão de fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times; {/* Esse é o "X" */}
        </button>

        <h3 className="text-xl font-bold mb-4">{item.nome}</h3>
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <div className="mb-4">
          <p><strong>Status:</strong> <StatusBadge status={item.status} /></p>
          <p><strong>Categoria:</strong> {item.categoria}</p>
          <p><strong>Local:</strong> {item.local}</p>
          <p><strong>Data:</strong> {item.data}</p>
          <p><strong>Descrição:</strong> {item.descricao}</p>
        </div>

        {/* Caso precise de mais informações, pode adicionar aqui, como um botão ou link */}
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalhes;
