import React, { useState, useEffect } from 'react';
import ModalDetalhes from '../components/ModalDetalhes'; // Importando o ModalDetalhes
import axios from 'axios'; 

const ItensRecentes = () => {
  const [itens, setItens] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fazer requisição para obter itens do back-end
  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await axios.get('/api/itens'); // Endpoint da API para obter itens
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

  const StatusBadge = ({ status }) => {
    const base = 'px-2 py-1 text-xs font-semibold rounded-full';
    const styles = status === 'Achado'
      ? `${base} bg-green-100 text-green-800`
      : `${base} bg-yellow-100 text-yellow-800`;

    return <span className={styles}>{status}</span>;
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
              src={item.foto} // Usando a foto do item vindo da API
              alt={item.nome}
              className="w-full h-40 object-cover rounded-t-lg transition duration-300 hover:grayscale"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{item.nome}</h3>
              <p className="text-sm text-gray-500">{item.categoria}</p>
              <p className="text-sm text-gray-500">Local: {item.local}</p>
              <p className="text-sm text-gray-500 mb-2">Data: {new Date(item.data).toLocaleDateString()}</p>
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
