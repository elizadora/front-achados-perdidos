import React from 'react';
import { Button, Modal, Stack, Box } from "@mui/material";
import { deleteItem } from '../services/itemService';

const DeleteItemModal = ({ onClose, itemIdFromProps, onItemSaved }) => {
    const handleDeleteItem = async () => {
        try {
            await deleteItem(itemIdFromProps);
            onClose();
            onItemSaved?.();
        } catch (error) {
            console.error("Erro ao deletar o item", error);
        }
    };

    return (
        <Modal
            open={!!itemIdFromProps}
            onClose={onClose}
            aria-labelledby="delete-item-modal"
            aria-describedby="confirm-delete-item"
            className="flex justify-center items-center p-1"
        >
            <Box className="overflow-y-auto relative bg-white p-5 rounded-lg w-[85%] md:w-[40%] lg:w-[26%]"
                sx={{
                    boxShadow: 24,
                }}>
                <p id="delete-item-modal" className="text-black font-medium text-base mb-2">
                    Atenção
                </p>
                <p id="confirm-delete-item" className="text-gray-700 font-normal text-sm lg:text-base">
                    Tem certeza que deseja remover esse item?
                </p>

                <div className="flex justify-center sm:justify-end pt-[4vh]">
                    <Stack spacing={2} direction="row" sx={{
                        '& .MuiButton-root': {
                            textTransform: 'capitalize',
                        }
                    }}>
                        <Button variant="outlined" onClick={onClose}
                            className="!text-sm md:!text-base !border-[#8A8A8A] !text-[#8A8A8A]">
                            Não
                        </Button>

                        <Button variant="contained" onClick={handleDeleteItem}
                            className="!text-sm md:!text-base !bg-[#0028DF] hover:!bg-[#0024C9]">
                            Sim
                        </Button>
                    </Stack>
                </div>
            </Box>
        </Modal>
    );
};

export default DeleteItemModal;
