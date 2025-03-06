import React, { useState } from 'react';
import { Plus, X, Calendar, MapPin, Users, Briefcase, ChevronRight } from 'lucide-react';

interface Project {
  image: string;
  title: string;
  category: string;
  description?: string;
  client?: string;
  location?: string;
  year?: string;
  team?: string[];
  gallery?: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'Modern Residence',
      category: 'Construction, Design',
      description: 'A stunning modern residence that combines contemporary design with functional living spaces. This project showcases our ability to create elegant, sustainable homes that meet the unique needs of our clients.',
      client: 'Johnson Family',
      location: 'Beverly Hills, CA',
      year: '2023',
      team: ['John Architect', 'Sarah Designer', 'Michael Engineer'],
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'Commercial Building',
      category: 'Construction, Architecture',
      description: 'A forward-thinking commercial building designed for maximum efficiency and aesthetic appeal. This project demonstrates our expertise in creating functional workspaces that inspire creativity and productivity.',
      client: 'TechNova Corp',
      location: 'Seattle, WA',
      year: '2022',
      team: ['Lisa Architect', 'David Planner', 'Emma Engineer'],
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'Luxury Villa',
      category: 'Design, Interior',
      description: 'An exquisite luxury villa that combines classical elements with modern amenities. This project highlights our dedication to craftsmanship and attention to detail in creating extraordinary living environments.',
      client: 'Garcia Estate',
      location: 'Miami, FL',
      year: '2023',
      team: ['Robert Designer', 'Patricia Interior', 'Thomas Landscape'],
      gallery: [
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200',
        'https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?w=1200'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'Urban Apartment',
      category: 'Construction, Interior Design',
      description: 'A sophisticated urban apartment that maximizes space and functionality while maintaining a stylish aesthetic. This project showcases our innovative approach to urban living solutions.',
      client: 'Martinez-Rodriguez',
      location: 'Chicago, IL',
      year: '2022',
      team: ['James Designer', 'Laura Architect', 'Kevin Engineer'],
      gallery: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200',
        'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1200'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'Office Space',
      category: 'Architecture, Design',
      description: 'A modern office space designed to foster collaboration and innovation. This project demonstrates our understanding of contemporary workplace needs and our ability to create inspiring environments.',
      client: 'Innovations Inc',
      location: 'San Francisco, CA',
      year: '2023',
      team: ['Elizabeth Architect', 'Andrew Designer', 'Christine Planner'],
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
        'https://images.unsplash.com/photo-1497366457304-0065906bad7c?w=1200',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'Renovated House',
      category: 'Refurbishment, Design',
      description: 'A complete renovation that transformed a dated house into a contemporary home while preserving its historical character. This project highlights our expertise in breathing new life into existing structures.',
      client: 'Thompson Family',
      location: 'Portland, OR',
      year: '2022',
      team: ['Matthew Renovation', 'Jessica Designer', 'Daniel Engineer'],
      gallery: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200',
        'https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?w=1200'
      ]
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-12 border-l-4 border-yellow-500 pl-4">
          Our Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{project.category}</p>
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <button 
                    className="text-yellow-600 font-medium flex items-center hover:text-yellow-700 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              <button 
                className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 rounded-full w-12 h-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform hover:scale-110"
                onClick={() => setSelectedProject(project)}
                aria-label="View project details"
              >
                <Plus size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image gallery */}
              <div className="md:w-1/2 bg-gray-100">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white max-w-xs">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Details</h3>
                  <p className="text-gray-600">
                    {selectedProject.description || 'No description available.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedProject.client && (
                    <div className="flex items-start">
                      <Briefcase size={20} className="text-yellow-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">Client</h4>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedProject.location && (
                    <div className="flex items-start">
                      <MapPin size={20} className="text-yellow-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">Location</h4>
                        <p className="text-gray-600">{selectedProject.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedProject.year && (
                    <div className="flex items-start">
                      <Calendar size={20} className="text-yellow-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">Completed</h4>
                        <p className="text-gray-600">{selectedProject.year}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedProject.team && selectedProject.team.length > 0 && (
                    <div className="flex items-start">
                      <Users size={20} className="text-yellow-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">Team</h4>
                        <p className="text-gray-600">{selectedProject.team.join(', ')}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.gallery.map((image, index) => (
                        <div key={index} className="aspect-video overflow-hidden rounded-md">
                          <img 
                            src={image} 
                            alt={`${selectedProject.title} - Gallery image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;