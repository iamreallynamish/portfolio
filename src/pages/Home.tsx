
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FF0031] text-black font-mono">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center">
          <div className={`space-y-8 max-w-2xl ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight mb-8">
              NAMISH//:
            </h1>
            
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              At just 16, I've worked with some of YouTube India's top creators, crafting high-impact visuals that boost engagement. From thumbnails to banners, I blend creativity with strategy to make content pop. Now freelancing, I help brands and creators level up their visuals with sleek, scroll-stopping designs.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
