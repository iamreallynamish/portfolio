
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FF0031] text-black font-mono">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-lg md:text-xl font-mono tracking-tight">
              ABOUT
            </h1>
            
            <div className="space-y-6">
              <p className="text-sm">
                I am a digital artist and designer specializing in creating minimalist visual experiences. 
                My work explores the intersection of technology, art, and design through a variety of mediums.
              </p>
              
              <p className="text-sm">
                With a background in both visual design and programming, I create projects that combine technical 
                precision with artistic vision. My approach focuses on simplicity and clarity, removing excess to 
                highlight what's essential.
              </p>
              
              <p className="text-sm">
                Each project in my portfolio represents an exploration of form, color, and composition, often 
                inspired by architectural principles and natural patterns.
              </p>
            </div>
            
            <div className="border-t border-black/10 pt-8">
              <h2 className="text-sm font-mono mb-4">CONTACT</h2>
              <p className="text-sm">
                For collaborations or inquiries:<br />
                email@example.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
