import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Construction, 
  CheckCircle, 
  CreditCard 
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      icon: <Home />,
      name: 'Residential Basic',
      price: 2500,
      features: [
        'Initial Consultation',
        'Basic Design Planning',
        'Standard Material Selection',
        'Up to 200 sq ft Renovation',
        'Basic Structural Assessment'
      ]
    },
    {
      icon: <Building />,
      name: 'Commercial Standard',
      price: 7500,
      features: [
        'Comprehensive Consultation',
        'Advanced Design Planning',
        'Premium Material Selection',
        'Up to 1000 sq ft Renovation',
        'Detailed Structural Analysis',
        'Project Management Support'
      ]
    },
    {
      icon: <Construction />,
      name: 'Full-Scale Industrial',
      price: 15000,
      features: [
        'Comprehensive Project Consultation',
        'Custom Design & Engineering',
        'Exclusive Material Procurement',
        'Unlimited Renovation Area',
        'Advanced Structural Engineering',
        'Full Project Management',
        '24/7 On-Site Support'
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-indigo-900 to-black py-20 px-4 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-black/50 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-white 
          border-l-8 border-blue-500 pl-6"
        >
          Pricing Plans
        </motion.h1>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                bg-white/10 backdrop-blur-lg rounded-2xl p-8 
                border border-white/20 shadow-2xl
                transform transition-all duration-300
                ${selectedPlan === plan.name 
                  ? 'scale-105 ring-4 ring-blue-500' 
                  : 'hover:scale-105'}
              `}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <div className="flex items-center mb-6">
                {React.cloneElement(plan.icon, { 
                  size: 48, 
                  className: "text-blue-500 mr-4" 
                })}
                <h2 className="text-2xl font-bold text-white">
                  {plan.name}
                </h2>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ₹{plan.price.toLocaleString()}
                </span>
                <span className="text-gray-300 ml-2">per project</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle 
                      size={20} 
                      className="mr-3 text-blue-500" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 rounded-lg 
                  bg-blue-500 text-white
                  hover:bg-blue-600 transition-colors
                  flex items-center justify-center
                `}
              >
                <CreditCard className="mr-2" size={20} />
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;