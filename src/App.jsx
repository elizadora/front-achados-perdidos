import React from 'react';
import Header from '../src/components/Header.jsx';
import HeroSection from '../src/components/HeroSection.jsx';
import ItensRecentes from '../src/components/RecentItems.jsx';
import ImageCarousel from './components/ImageCarousel';
import Footer from '../src/components/Footer.jsx';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <div>
        <HeroSection />
        <ItensRecentes />
      </div>
      <ImageCarousel />
      <Footer />
    </main>
  );
};

export default Home;
