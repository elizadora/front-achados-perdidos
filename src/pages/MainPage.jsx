import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecentItems from "../components/RecentItems";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAllItems } from "../services/itemService";
import ImageCarousel from "../components/ImageCarousel";

export default function Main() {
      const [items, setItems] = useState([]);
    
      const fetchItems = async () => {
        try {
          const response = await getAllItems();
          setItems(response.data);
        } catch (error) {
          console.error("Erro ao buscar itens:", error);
        }
      };
    
      useEffect(() => {
        fetchItems();
      }, []);

    return (
        <main className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div>
                <HeroSection onItemSaved={fetchItems}/>
                <RecentItems items={items} onItemSaved={fetchItems}/>
            </div>
            <ImageCarousel />
            <Footer />
        </main>
    )
};