import React from 'react';
import Chip from '@mui/material/Chip';
import no_image from '../assets/images/no_image.png';

const translateStatus = (status) => {
  return status == 0 ? 'Achado' : 'Perdido';
};

const ItemCard = ({ item, onOpenModal, onEditClick, showEditButton = false }) => {
  return (
    <div
      className="min-h-[20vh] flex flex-col relative bg-white rounded-lg shadow-sm border
      border-gray-200 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => onOpenModal(item)}
    >
      <img
        src={item.foto || no_image}
        alt={item.nome}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="font-semibold text-gray-800">{item.nome}</h3>
          <p className="text-sm text-gray-500">
            {item.item_category?.[0]?.category?.name}
          </p>
          <p className="text-sm text-gray-500">
            {item.rua && item.bairro ? `${item.rua}, ${item.bairro}` : ''}
          </p>
          {item.data && (
            <p className="text-sm text-gray-500 mb-2">
              {new Date(item.data).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className={`flex items-center mt-4 ${showEditButton ? 'justify-between' : 'justify-end'}`}>
          <Chip variant="outlined" label={translateStatus(item.status)} />
          {showEditButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditClick(item.id);
              }}
              className="cursor-pointer ml-2 text-[#0028DF] hover:underline text-sm"
            >
              Editar
            </button>
          )}
        </div>

      </div>
    </div>
  );
};


export default ItemCard;