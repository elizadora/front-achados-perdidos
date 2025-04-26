import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalDetails from '../components/ModalDetails';
import ItemModal from "../components/ItemModal";
import ItemCard from "../components/ItemCard";
import { getUserItems } from "../services/itemService";

import { useEffect, useState } from "react";

export default function MyItems() {
    const [items, setItems] = useState([]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const fetchItems = async () => {
        try {
            const res = await getUserItems();
            setItems(res.data);
        } catch (error) {
            console.error("Erro ao buscar itens:", error);
        }
    }

    useEffect(() => {
        fetchItems();
    }
        , []);


    return (
        <main className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Meus Itens</h1>
                <p className="text-gray-600">Aqui estão os itens que você adicionou.</p>
                <button 
                onClick={() => setShowModal(true)}
                className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition">Cadastrar Item</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
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
            <Footer />

            <ModalDetails item={selectedItem} onClose={closeModal} />
            <ItemModal
                open={showModal}
                onClose={() => setShowModal(false)}
                itemIdFromProps={itemId}
                onItemSaved={fetchItems}
            />
        </main>
    )
}