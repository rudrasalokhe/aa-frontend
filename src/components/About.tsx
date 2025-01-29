import React from 'react';
import { Building, Users, CheckCircle, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">about us</h1>

      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[41rem]">
          <video 
            src="https://player.vimeo.com/external/446766811.sd.mp4?s=f2535e485b9572fdb7a6bf40809d31d2754f1798&profile_id=164&oauth2_token_id=57447761" 
            loop 
            muted 
            autoPlay 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 min-w-[41rem]">
          <h3 className="text-3xl font-bold mb-4">We will provide you the best work which you dreamt for!</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.
          </p>
          <a href="#services" className="inline-block px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition duration-300">
            read more
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <div className="bg-gray-100 p-8 text-center">
          <h3 className="text-4xl font-bold mb-2">10+</h3>
          <p className="text-gray-600">years of experience</p>
        </div>
        <div className="bg-gray-100 p-8 text-center">
          <h3 className="text-4xl font-bold mb-2">1500+</h3>
          <p className="text-gray-600">project completed</p>
        </div>
        <div className="bg-gray-100 p-8 text-center">
          <h3 className="text-4xl font-bold mb-2">790+</h3>
          <p className="text-gray-600">satisfied clients</p>
        </div>
        <div className="bg-gray-100 p-8 text-center">
          <h3 className="text-4xl font-bold mb-2">450+</h3>
          <p className="text-gray-600">active workers</p>
        </div>
      </div>
    </section>
  );
};

export default About;