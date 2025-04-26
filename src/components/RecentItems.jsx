import React, { useState } from 'react';
import ModalDetails from '../components/ModalDetails';
import ItemModal from './ItemModal';
import ItemCard from '../components/ItemCard';
import CircularProgress from '@mui/material/CircularProgress';

const RecentItems = ({ items, isLoading, onItemSaved }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Itens Recentes</h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.length === 0 ? (
            <div className="col-span-4 text-center">
              <p className="text-gray-500">Nenhum item recente encontrado</p>
            </div>
          ) : (
            items.map((item, index) => (
              <ItemCard
                key={index}
                item={item}
                onEditClick={(id) => {
                  setItemId(id);
                  setShowModal(true);
                }}
                onOpenModal={openModal}
              />
            ))
          )}
        </div>
      )}

      <ModalDetails item={selectedItem} onClose={closeModal} />
      <ItemModal
        open={showModal}
        onClose={() => setShowModal(false)}
        itemIdFromProps={itemId}
        onItemSaved={onItemSaved}
      />
    </section>

  );
};

export default RecentItems;
