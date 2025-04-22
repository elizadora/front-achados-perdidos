import React, { useState, useEffect } from 'react';
import ModalDetalhes from '../components/ModalDetalhes';
import itemService from '../services/itemService';

const ItensRecentes = () => {
  const [itens, setItens] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await itemService.getAllItems();
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };

    fetchItens();
  }, []);

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
              src={item.foto}
              alt={item.nome}
              className="w-full h-40 object-cover rounded-t-lg transition duration-300 hover:grayscale"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{item.nome}</h3>
              <p className="text-sm text-gray-500">
                {item.item_categoria?.[0]?.categoria?.nome || 'Sem categoria'}
              </p>
              {item.data && (
                <p className="text-sm text-gray-500 mb-2">
                  Data: {new Date(item.data).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-gray-500 text-sm hover:underline">Ver Mais +</button>
      </div>

      <ModalDetalhes item={selectedItem} onClose={closeModal} />
    </section>
  );
};

export default ItensRecentes;
