import React, { useState, useEffect } from 'react';
import ModalDetails from '../components/ModalDetails';
import StatusBadge from '../components/StatusBadge';
import itemService from '../services/itemService';

const RecentItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await itemService.getAll();
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Itens Recentes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* if items length is 0 show a message */}
        {items.length === 0 ? (
          <div className="col-span-4 text-center">
            <p className="text-gray-500">Nenhum item recente encontrado</p>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-lg transition duration-300 hover:grayscale"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.item_category?.[0]?.category?.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.street}, {item.neighborhood}
                </p>
                {item.date && (
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                )}
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center mt-6">
        <button className="text-gray-500 text-sm hover:underline cursor-pointer">
          View More +
        </button>
      </div>

      {/* Modal */}
      <ModalDetails item={selectedItem} onClose={closeModal} />
    </section>
  );
};

export default RecentItems;
