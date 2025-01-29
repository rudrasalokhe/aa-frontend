import React from 'react';
import { Home, Building, Building2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      icon: <Home size={40} />,
      name: 'basic plan',
      price: 250,
      features: ['interior design', 'refurbishment', 'material supply', 'maintenance', '24/7 support']
    },
    {
      icon: <Building size={40} />,
      name: 'premium plan',
      price: 650,
      features: ['interior design', 'refurbishment', 'material supply', 'maintenance', '24/7 support']
    },
    {
      icon: <Building2 size={40} />,
      name: 'ultimate plan',
      price: 1250,
      features: ['interior design', 'refurbishment', 'material supply', 'maintenance', '24/7 support']
    }
  ];

  return (
    <section id="pricing" className="bg-gray-100 py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">Our Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-8 text-center shadow-md border border-gray-200">
            <div className="text-yellow-400 mb-4 flex justify-center">
              {plan.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 capitalize">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">
              <span className="text-2xl">₹</span>
              {plan.price}
              <span className="text-xl text-gray-600">/mo</span>
            </div>
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <p key={i} className="text-gray-600 capitalize">{feature}</p>
              ))}
            </div>
            <a href="#" className="inline-block px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition duration-300">
              Choose plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;