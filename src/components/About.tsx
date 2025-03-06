import React from 'react';
import { Building, Users, CheckCircle, Trophy, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-12 h-1 bg-yellow-500 mr-4"></div>
              <span className="text-yellow-500 font-bold tracking-widest">ABOUT US</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            BUILDING <br />
            <span className="text-yellow-500">THE FUTURE</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Company Info Box */}
          <div className="bg-gray-900 p-10 border-l-4 border-yellow-500">
            <div className="flex items-center mb-6">
              <Building size={36} className="text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold">COMPANY PROFILE</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-yellow-500 font-semibold mb-2">ESTABLISHED</h4>
                <p className="text-gray-300">2013</p>
              </div>
              
              <div>
                <h4 className="text-yellow-500 font-semibold mb-2">SPECIALIZATION</h4>
                <p className="text-gray-300">Commercial & Industrial Construction</p>
              </div>
              
              <div>
                <h4 className="text-yellow-500 font-semibold mb-2">EXPERTISE</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>Infrastructure Development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>Commercial Buildings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>Industrial Facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>Architectural Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">
              EXCELLENCE IN <span className="text-yellow-500">CONSTRUCTION</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We are more than just contractors. We are visionaries who transform blueprints into landmarks, challenges into achievements, and spaces into experiences that stand the test of time.
            </p>
            <p className="text-gray-300 text-lg">
              Our elite team delivers unparalleled craftsmanship, precision engineering, and innovative solutions for the most demanding projects across commercial, industrial, and residential sectors.
            </p>
            
            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Safety First', 'Expert Team', 'Quality Materials', 'On-Time Delivery'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 mr-2"></div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-4 px-8 py-4 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all flex items-center gap-2 group">
              OUR PROJECTS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <Building size={40} className="text-yellow-500" />, 
              value: '250+', 
              label: 'Projects Completed' 
            },
            { 
              icon: <CheckCircle size={40} className="text-yellow-500" />, 
              value: '120+', 
              label: 'Ongoing Projects' 
            },
            { 
              icon: <Users size={40} className="text-yellow-500" />, 
              value: '1500+', 
              label: 'Skilled Workers' 
            },
            { 
              icon: <Trophy size={40} className="text-yellow-500" />, 
              value: '25+', 
              label: 'Industry Awards' 
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 text-center border-b-2 border-yellow-500 hover:bg-gray-800 transition-all"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">
                {item.value}
              </h3>
              <p className="text-gray-400 uppercase tracking-wider text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;