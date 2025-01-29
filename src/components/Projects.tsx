import React from 'react';
import { Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'dream home',
      category: 'construction, design'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'dream home',
      category: 'construction, design'
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'dream home',
      category: 'construction, design'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'dream home',
      category: 'construction, design'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'dream home',
      category: 'construction, design'
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'dream home',
      category: 'construction, design'
    }
  ];

  return (
    <section id="projects" className="bg-black py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 text-white border-l-8 border-yellow-400 pl-4">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden cursor-pointer">
            <div className="h-[40rem] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="flex justify-between items-center bg-white">
              <div className="p-4">
                <h3 className="text-xl font-semibold capitalize">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
              <div className="bg-yellow-400 w-[7.5rem] h-[7.5rem] flex items-center justify-center">
                <Plus size={30} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;