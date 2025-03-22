
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mediaItems } from '@/data/MediaData';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 9;

const Work = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const totalPages = Math.ceil(mediaItems.length / ITEMS_PER_PAGE);
  const currentItems = mediaItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FF0031] text-black font-mono">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex justify-between items-center">
              <h1 className="text-lg md:text-xl font-mono tracking-tight">
                WORK
              </h1>
              <Button 
                onClick={toggleViewMode} 
                variant="outline" 
                className="text-black border-black hover:bg-black/10"
              >
                {viewMode === 'grid' ? 'LIST VIEW' : 'GRID VIEW'}
              </Button>
            </div>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item) => (
                  <Link 
                    to={`/project/${item.id}`} 
                    key={item.id} 
                    className="group cursor-pointer hover-lift"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-mono">{item.title}</h3>
                        <span className="text-xs text-black/70">{item.date}</span>
                      </div>
                      <p className="text-xs mt-1 text-black/70">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {currentItems.map((item) => (
                  <Link 
                    to={`/project/${item.id}`} 
                    key={item.id} 
                    className="flex gap-4 items-center p-3 hover:bg-black/5 transition-colors rounded-md"
                  >
                    <div className="aspect-square w-16 h-16 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-mono">{item.title}</h3>
                        <span className="text-xs text-black/70">{item.date}</span>
                      </div>
                      <p className="text-xs mt-1 text-black/70">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {mediaItems.length > ITEMS_PER_PAGE && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)} 
                          className="cursor-pointer border-black text-black hover:bg-black/10"
                        />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          onClick={() => handlePageChange(page)}
                          isActive={page === currentPage}
                          className="cursor-pointer border-black text-black hover:bg-black/10"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)} 
                          className="cursor-pointer border-black text-black hover:bg-black/10"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
