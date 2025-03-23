
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Extract unique categories from all projects
  const categories = ['All', ...Array.from(
    new Set(projects.flatMap(project => project.categories))
  )];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

    
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className={`inline-block text-sm text-gray-400 font-medium tracking-wider mb-4 opacity-0 ${loaded ? 'animate-slide-down' : ''}`}>
              PROJECTS
            </span>
            
            <h1 className={`text-4xl md:text-5xl font-medium opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.1s' }}>
              Graphic Design Portfolio
            </h1>
            
            <p className={`mt-4 text-lg text-gray-400 max-w-2xl opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.2s' }}>
              A collection of selected projects showcasing my approach to design challenges across various mediums and contexts.
            </p>
          </div>
          
          {/* Category Filter */}
          
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
