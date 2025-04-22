import React from 'react';
import StatusBadge from './StatusBadge';

const ModalDetails = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-4">{item.name}</h3>
        <img
          src={item.photo}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <div className="mb-4 space-y-1 text-sm text-gray-700">
          <p><strong>Status:</strong> <StatusBadge status={item.status} /></p>
          <p><strong>Category:</strong> {item.item_category?.[0]?.category?.name}</p>
          <p><strong>Address:</strong> {`${item.street}, ${item.neighborhood}, ${item.city}`}</p>
          {item.reference && <p><strong>Reference:</strong> {item.reference}</p>}
          {item.date && <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
