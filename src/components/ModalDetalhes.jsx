import React from 'react';
import StatusBadge from './StatusBadge';

const ModalDetalhes = ({ item, onClose }) => {
  if (!item) return null;

  const translateStatus = (status) => {
    return status === 1 ? 'Achado' : 'Perdido';
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-4">{item.nome}</h3>

        <img
          src={item.foto}
          alt={item.nome}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <div className="mb-4 text-sm text-gray-700 space-y-2">
          <p><strong>Status:</strong> <StatusBadge status={translateStatus(item.status)} /></p>
          <p><strong>Categoria:</strong> {item.item_categoria?.[0]?.categoria?.nome || 'Sem categoria'}</p>
          {item.data && (
            <p><strong>Data:</strong> {new Date(item.data).toLocaleDateString()}</p>
          )}
          <p><strong>Rua:</strong> {item.rua}</p>
          <p><strong>Bairro:</strong> {item.bairro}</p>
          <p><strong>Cidade:</strong> {item.cidade}</p>
          <p><strong>Referência:</strong> {item.referencia}</p>
        </div>

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
