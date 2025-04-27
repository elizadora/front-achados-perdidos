import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalDetails from '../components/ModalDetails';
import ItemModal from "../components/ItemModal";
import ItemCard from "../components/ItemCard";
import DeleteItemModal from "../components/DeleteItemModal";
import { getUserItems } from "../services/itemService";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function MyItems() {
    // object to store items
    const [items, setItems] = useState([]);

    // object to store selected item, modal state and item id
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    // function to fetch items from the API and set the items state
    const fetchItems = async () => {
        try {
            const res = await getUserItems();
            setItems(res.data);
        } catch (error) {
            console.error("Erro ao buscar itens:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // useEffect to fetch items when the component mounts
    // and when the item is saved
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <main className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Meus Itens</h1>
                <p className="text-gray-600">Aqui estão os itens que você adicionou.</p>
                <button
                    onClick={() => {
                        setItemId(null);
                        setShowModal(true);
                    }}
                    className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition">Cadastrar Item</button>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-1/2">
                    <CircularProgress />
                </div>
            ) : (
                < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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
                                onDeleteClick={(id) => {
                                    setDeleteItemId(id);
                                }}
                                showEditButton={true}
                            />
                        ))
                    )}
                </div>
            )}
            <Footer />

            <ModalDetails item={selectedItem} onClose={closeModal} isOwner={true} />
            <ItemModal
                open={showModal}
                onClose={() => {
                    setShowModal(false);
                    setItemId(null);
                }}
                itemIdFromProps={itemId}
                onItemSaved={fetchItems}
            />
            {
                deleteItemId && (
                    <DeleteItemModal
                        onClose={() => setDeleteItemId(null)}
                        itemIdFromProps={deleteItemId}
                        onItemSaved={fetchItems}
                    />
                )
            }
        </main >
    )
}