import React from 'react';
import { Building, Home, PenTool, Package, Users, Paintbrush, PenTool as Tool, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Building size={40} />, title: 'building construction', description: 'We specialize in high-quality construction services, ensuring durability, innovation, and excellence in every project. From foundation to finishing, we bring your vision to life with precision and expertise.' },
    { icon: <Home size={40} />, title: 'house renovation', description: 'Revamp your home with expert renovations that enhance beauty and functionality. We deliver high-quality craftsmanship to bring your vision to life.' },
    { icon: <PenTool size={40} />, title: 'architecture design', description: 'We create innovative and functional designs that blend aesthetics with practicality. Our expert team ensures timeless and sustainable architectural solutions.' },
    { icon: <Package size={40} />, title: 'material supply', description: 'We provide high-quality construction materials to ensure durability and strength. Our reliable sourcing guarantees the best products for your projects.' },
    { icon: <Users size={40} />, title: 'construction consultant', description: 'We offer expert guidance to streamline your construction projects. From planning to execution, we ensure efficiency, quality, and cost-effectiveness' },
    { icon: <Paintbrush size={40} />, title: 'interior design', description: 'We craft stylish and functional interiors that reflect your taste and lifestyle. Our designs blend creativity with comfort to transform your spaces.' },
    { icon: <Tool size={40} />, title: 'building maintenance', description: 'We provide reliable maintenance services to keep your property in top condition. From repairs to upkeep, we ensure safety and longevity.' },
    { icon: <Wrench size={40} />, title: 'building renovation', description: 'We restore and upgrade buildings with modern designs and durable solutions. Our expertise ensures a seamless transformation that enhances value and functionality.' }
  ];

  return (
    <section id="services" className="bg-gray-100 py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">Our Services</h1>

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