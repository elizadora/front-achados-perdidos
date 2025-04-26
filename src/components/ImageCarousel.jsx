import React, { useState, useEffect } from 'react';
import img1 from '../assets/imagens/banner-1.png';
import img2 from '../assets/imagens/banner-3.png';
import img3 from '../assets/imagens/banner-2.jpg';
import iconeMapa from '../assets/imagens/mapa_icon.png';

const imagens = [img1, img2, img3];

const SectionSobre = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="w-full py-12 px-6 bg-white flex flex-col items-center">
      {/* Carrossel */}
      <div className="max-w-xl w-full mb-20">
        <img
          src={imagens[indexAtual]}
          alt={`Banner ${indexAtual + 1}`}
          className="w-full rounded-lg shadow-md transition-all duration-700 ease-in-out"
        />
        {/* Indicadores clicáveis */}
        <div className="flex justify-center mt-3 gap-2">
          {imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndexAtual(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                indexAtual === i ? 'bg-blue-600 w-4' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Texto + Imagem lado a lado e mais estreitos */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 font-[Poppins]">
        {/* Texto */}
        <div className="text-center md:text-left max-w-md">
            <h3 className="text-2xl font-bold mb-4">
            Nossa plataforma conecta quem perdeu e quem encontrou objetos.
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
            Você pode cadastrar um item que encontrou, procurar por algo que perdeu ou ajudar a
            devolver pertences a seus donos. Junte-se a uma comunidade colaborativa.
            </p>
            <p className="text-base font-bold">
            Mais agilidade, mais solidariedade.
            </p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
            <img src={iconeMapa} alt="Ícone de mapa" className="max-w-[300px]" />
        </div>
        </div>

    </section>
  );
};

export default SectionSobre;
