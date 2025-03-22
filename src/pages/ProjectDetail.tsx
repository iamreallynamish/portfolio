import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Navbar from '@/components/Navbar';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);
  const project = projects.find(p => p.id === id);
  const navigate = useNavigate();
  
  // Get more projects (excluding current one)
  const moreProjects = projects.filter(p => p.id !== id).slice(0, 3);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | NAMISH//`;
    }
    setLoaded(true);
    window.scrollTo(0, 0);
  }, [id, project]);

  const nextImage = () => {
    if (project && !isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previousImage = () => {
    if (project && !isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8 text-center">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm border border-white px-4 py-2"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <BackgroundAnimation />
      
      {/* Navigation Bar */}
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Project Information */}
          <div className="px-6 md:px-10 pt-10 flex flex-col">
            <div className={`space-y-12 max-w-xl ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Project Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-mono uppercase mt-1">
                  {project.title} <span className="text-white/50">#{project.id}</span>
                </h1>
              </div>
              
              {/* Project Description */}
              <p className="text-sm text-white/90">
                {project.details}
              </p>
              
              {/* Project Details Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">i</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">PROJECT DETAILS</h2>
                </div>
                
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm mb-6">
                  <span className="text-white/70">Software</span>
                  <span>{project.software}</span>
                </div>
              </div>
              
              {/* About The Project Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">i</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">ABOUT THE PROJECT</h2>
                </div>
                <p className="text-sm text-white/90">
                  {project.description}
                </p>
              </div>
              
              {/* Tags Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">#</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">TAGS</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs bg-white/10 rounded-none uppercase"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Date Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">📅</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">DATE</h2>
                </div>
                <p className="text-sm">{project.date}</p>
              </div>
              
              {/* Browse Section */}
              <div className="border-t border-white/20 pt-8">
                <h2 className="text-sm font-mono uppercase mb-4">BROWSE</h2>
                
                <div className="grid grid-cols-3 gap-3">
                  {moreProjects.map((project) => (
                    <Link 
                      to={`/project/${project.id}`} 
                      key={project.id} 
                      className="aspect-square overflow-hidden"
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Main Image with Navigation */}
          <div className={`bg-white/5 flex items-center justify-center relative group ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-full flex items-center justify-center p-6 md:p-10 relative overflow-hidden">
              <img 
                key={currentImageIndex}
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                style={{
                  animation: isAnimating 
                    ? `${direction > 0 ? 'slideFromRight' : 'slideFromLeft'} 0.5s ease-in-out`
                    : ''
                }}
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={previousImage}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="Previous image"
                  disabled={isAnimating}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="Next image"
                  disabled={isAnimating}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;