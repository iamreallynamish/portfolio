import { useState, useEffect, RefObject } from 'react';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate, Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ homeRef, aboutRef, workRef }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchMode, setSearchMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (!isHomePage) return;
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      if (workRef.current && scrollPosition >= workRef.current.offsetTop) {
        setActiveSection('work');
      } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutRef, homeRef, workRef, isHomePage]);

  const scrollToSection = (ref: RefObject<HTMLDivElement>, section: string) => {
    if (isHomePage && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Navigate to home page with section information
      navigate('/', { state: { scrollTo: section } });
    }
  };

  const toggleSearchMode = () => {
    setSearchMode(!searchMode);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-base font-mono tracking-tighter hover:opacity-80 transition-opacity text-white"
        >
          NAMISH//:
        </Link>
        
        <div className="flex items-center space-x-6">
          {searchMode ? (
            <div className="flex items-center space-x-2 animate-fade-in">
              <Input 
                type="text" 
                placeholder="Search..." 
                className="w-48 md:w-64 h-8 bg-transparent border-white/20 text-white placeholder:text-white/50 focus:border-white"
                autoFocus
              />
              <button 
                onClick={toggleSearchMode} 
                className="p-1 hover:text-gray-300 transition-colors text-white"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <>
              <nav className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => scrollToSection(homeRef, 'home')} 
                  className={cn(
                    "text-sm font-mono text-white hover:opacity-80 transition-opacity",
                    activeSection === "home" && isHomePage && "font-bold"
                  )}
                >
                  HOME
                </button>
                <button 
                  onClick={() => scrollToSection(aboutRef, 'about')} 
                  className={cn(
                    "text-sm font-mono text-white hover:opacity-80 transition-opacity",
                    activeSection === "about" && isHomePage && "font-bold"
                  )}
                >
                  ABOUT
                </button>
                <Link
                  to="/projects"
                  className={cn(
                    "text-sm font-mono text-white hover:opacity-80 transition-opacity",
                    !scrolled && activeSection === "work" && "font-bold"
                  )}
                >
                  PROJECTS
                </Link>
              </nav>
              
              <button 
                onClick={toggleSearchMode} 
                className="p-1 hover:text-gray-300 transition-colors text-white"
              >
                <Search size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;