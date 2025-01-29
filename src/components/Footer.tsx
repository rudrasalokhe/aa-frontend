import React from 'react';

const Footer: React.FC = () => {
  const links = ['home', 'about', 'services', 'projects', 'pricing', 'contact', 'blogs'];

  return (
    <footer className="py-12 px-[10%] text-center">
      <div className="space-x-4 mb-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="inline-block px-6 py-2 bg-black text-white hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-xl">
        Created by <span className="text-yellow-400">@RKA Technologies</span> | all rights reserved!
      </p>
    </footer>
  );
};

export default Footer;