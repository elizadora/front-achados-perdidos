import React, { useState } from 'react';
import { MenuItem, IconButton, Menu, Chip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import no_image from '../assets/images/no_image.png';

const translateStatus = (status) => {
  return status == 0 ? 'Achado' : 'Perdido';
};

const ItemCard = ({ item, onOpenModal, onEditClick, onDeleteClick, showEditButton = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    onEditClick(item.id);
    handleMenuClose();
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDeleteClick(item.id);
    handleMenuClose();
  };

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
            <div>
              <IconButton
                size="small"
                onClick={handleMenuOpen}
                className="!text-gray-800"
              >
                <MoreVertIcon fontSize="small" />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleEdit}><EditOutlined className="mr-2"/>Editar</MenuItem>
                <MenuItem onClick={handleDelete}> <DeleteOutlined  className="mr-2"/>Excluir</MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
