import React from 'react';
import { Building, Home, PenTool, Package, Users, Paintbrush, PenTool as Tool, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Building size={40} />, title: 'building construction', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Home size={40} />, title: 'house renovation', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <PenTool size={40} />, title: 'architecture design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Package size={40} />, title: 'material supply', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Users size={40} />, title: 'construction consultant', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Paintbrush size={40} />, title: 'interior design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Tool size={40} />, title: 'building maintenance', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' },
    { icon: <Wrench size={40} />, title: 'building renovation', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.' }
  ];

  return (
    <section id="services" className="bg-gray-100 py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">our services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 text-center shadow-md border border-gray-200 hover:shadow-xl transition duration-300">
            <div className="text-yellow-400 mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 capitalize">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;