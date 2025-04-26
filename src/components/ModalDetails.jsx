import React from 'react';
import Cancel from "@mui/icons-material/Cancel";
import no_image from '../assets/images/no_image.png';
import { IconButton } from "@mui/material";

const ModalDetails = ({ item, onClose, isOwner = false }) => {
  if (!item) return null;

  const translateStatus = (status) => {
    return status == 0 ? 'Achado' : 'Perdido';
  };

  const contato = item.usuario?.telefone || item.usuario?.email || null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[85%] md:w-96 relative">

        <IconButton onClick={onClose}
          className="!absolute !top-3 !right-4.5 !text-[#0028DF] hover:!bg-[#3a5bff21]">
          <Cancel />
        </IconButton>

        <h3 className="text-xl font-bold mb-4">{item.nome}</h3>

        <img
          src={item.foto || no_image}
          alt={item.nome}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <div className="mb-4 text-sm text-gray-700 space-y-2">
          <p><strong>Status:</strong> {translateStatus(item.status)}</p>
          <p><strong>Categoria:</strong> {item.item_categoria?.[0]?.categoria?.nome || 'Sem categoria'}</p>
          {item.data && (
            <p><strong>Data:</strong> {new Date(item.data).toLocaleDateString()}</p>
          )}
          <p><strong>Rua:</strong> {item.rua || 'Não informado'}</p>
          <p><strong>Bairro:</strong> {item.bairro || 'Não informado'}</p>
          <p><strong>Cidade:</strong> {item.cidade || 'Não informado'}</p>
          <p><strong>Referência:</strong> {item.referencia || 'Não informado'}</p>
        </div>

        {contato && !isOwner && (
          <>
            <hr className="my-4" />
            <div className="text-sm text-gray-700">
            <p><strong>Nome:</strong> {item.usuario.nome }</p>
              <p><strong>Contato:</strong> {contato}</p>
            </div>
          </>
        )}

        <div className="text-end mt-4">
          <button
            onClick={onClose}
            className="cursor-pointer bg-white border !text-[#8A8A8A] !border-[#8A8A8A] px-4 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
