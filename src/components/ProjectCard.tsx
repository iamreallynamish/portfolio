
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { Camera, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    
    if (image && image.complete) {
      setIsLoaded(true);
    } else if (image) {
      image.onload = () => {
        setIsLoaded(true);
      };
    }
    
    return () => {
      if (image) {
        image.onload = null;
      }
    };
  }, []);

  const animationDelay = `${index * 0.1}s`;

  return (
    <Link 
      to={`/project/${project.id}`}
      className={cn(
        "group flex flex-col overflow-hidden relative opacity-0",
        isLoaded && "animate-zoom-in"
      )}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <div className={cn(
          "absolute inset-0 bg-gray-800/30 backdrop-blur-sm",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-500 z-10"
        )} />
        
        <img
          ref={imageRef}
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-105 brightness-50" : "scale-100 brightness-75"
          )}
        />
        
        {/* Project Title Overlay - Always visible */}
        <div className="absolute top-0 left-0 p-6 z-20">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {project.title.toUpperCase()} #{project.id}
          </h3>
        </div>
        
        {/* Metadata Section - Always visible */}
        <div className="absolute bottom-0 right-0 p-6 z-20 text-right">
          <div className="flex flex-col gap-2 items-end text-xs">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">{project.categories[0].toUpperCase()}</span>
            </div>
            
            <div className="flex flex-col gap-1 mt-2 text-gray-300">
              <div className="text-xs">f/1.5</div>
              <div className="text-xs">1/200s</div>
              <div className="text-xs">ISO 100</div>
            </div>
            
            <div className="mt-2 text-xs text-gray-300 flex items-center gap-2">
              <Clock size={12} />
              <span>{project.date}</span>
            </div>
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center",
          isHovered ? "opacity-100" : "opacity-0",
          "z-10"
        )}>
          <div className="px-6 text-center">
            <p className="text-gray-200 text-sm">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
