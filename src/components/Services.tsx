import React, { useState, useEffect } from 'react';
import { Building, Home, PenTool, Package, Users, Paintbrush, Wrench, ArrowRight, X, CheckCircle, ChevronRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    { 
      icon: <Building />, 
      title: 'Building Construction', 
      description: 'High-quality construction services with focus on durability and excellence.',
      features: [
        'Custom-designed structures', 
        'Eco-friendly building methods', 
        'On-time project completion', 
        'Quality material sourcing'
      ],
      color: 'bg-blue-600'
    },
    { 
      icon: <Home />, 
      title: 'House Renovation', 
      description: 'Expert home renovations that enhance both beauty and functionality.',
      features: [
        'Complete space transformation', 
        'Structural modifications', 
        'Fixture and fitting upgrades', 
        'Energy efficiency improvements'
      ],
      color: 'bg-green-600'
    },
    { 
      icon: <PenTool />, 
      title: 'Architecture Design', 
      description: 'Innovative designs that blend aesthetics with practical functionality.',
      features: [
        '3D visualization', 
        'Sustainable design principles', 
        'Regulatory compliance', 
        'Site-specific solutions'
      ],
      color: 'bg-purple-600'
    },
    { 
      icon: <Package />, 
      title: 'Material Supply', 
      description: 'High-quality construction materials with reliable sourcing.',
      features: [
        'Wholesale pricing options', 
        'Quality assurance testing', 
        'Just-in-time delivery', 
        'Specialized material consultation'
      ],
      color: 'bg-yellow-600'
    },
    { 
      icon: <Users />, 
      title: 'Construction Consultation', 
      description: 'Expert guidance for streamlining your construction projects.',
      features: [
        'Project feasibility studies', 
        'Budget optimization', 
        'Risk assessment', 
        'Contractor selection assistance'
      ],
      color: 'bg-red-600'
    },
    { 
      icon: <Paintbrush />, 
      title: 'Interior Design', 
      description: 'Stylish and functional interiors that reflect your taste and lifestyle.',
      features: [
        'Space planning', 
        'Custom furniture design', 
        'Material and color consultation', 
        'Lighting design'
      ],
      color: 'bg-orange-600'
    },
    { 
      icon: <Wrench />, 
      title: 'Building Maintenance', 
      description: 'Reliable maintenance services to keep your property in top condition.',
      features: [
        'Scheduled maintenance programs', 
        'Emergency repair services', 
        'System inspections', 
        'Preventative care plans'
      ],
      color: 'bg-cyan-600'
    },
    { 
      icon: <PenTool />, 
      title: 'Building Renovation', 
      description: 'Building upgrades with modern designs and durable solutions.',
      features: [
        'Structural reinforcement', 
        'Facade improvements', 
        'Systems upgrading', 
        'Space reconfiguration'
      ],
      color: 'bg-teal-600'
    }
  ];

  const openPopup = (service, index) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  // Handle hover effects
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Handle click outside to close modal
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedService) {
        closePopup();
      }
    };

    if (selectedService) {
      window.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedService]);

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide quality construction and design solutions focused on durability and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`h-2 ${service.color} rounded-t`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full ${service.color} text-white mr-3`}>
                    {React.cloneElement(service.icon, { size: 20 })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <button
                  onClick={() => openPopup(service, index)}
                  className="text-blue-600 font-medium flex items-center hover:underline"
                >
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative">
            {/* Close button */}
            <button 
              onClick={closePopup} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
            
            {/* Modal Header */}
            <div className={`p-6 ${selectedService.color} rounded-t-lg`}>
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  {React.cloneElement(selectedService.icon, { 
                    size: 24, 
                    className: `text-${selectedService.color.replace('bg-', '')}` 
                  })}
                </div>
                <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-6">{selectedService.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button 
                  onClick={closePopup} 
                  className="py-2 px-4 border border-gray-300 rounded mr-2 text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button 
                  className={`py-2 px-4 ${selectedService.color} text-white rounded flex items-center`}
                >
                  Request Quote
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;