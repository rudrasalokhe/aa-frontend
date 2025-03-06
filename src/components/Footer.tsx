import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter />, href: "#", color: "text-blue-400" },
    { icon: <Linkedin />, href: "#", color: "text-blue-600" },
    { icon: <Instagram />, href: "#", color: "text-pink-500" },
    { icon: <Facebook />, href: "#", color: "text-blue-700" }
  ];

  const contactInfo = [
    { 
      icon: <MapPin className="text-indigo-500" />, 
      text: "Mumbai, Maharashtra, India" 
    },
    { 
      icon: <Mail className="text-green-500" />, 
      text: "contact@aaconstructions.com" 
    },
    { 
      icon: <Phone className="text-blue-500" />, 
      text: "+91 123 456 7890" 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-black text-white py-16 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 0 L50 50 L100 0 L50 100 Z" fill="rgba(99, 102, 241, 0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-indigo-500 pb-2">
            About Us
          </h3>
          <p className="text-gray-300 leading-relaxed">
            AA Constructions is dedicated to delivering innovative architectural solutions and exceptional construction services. We transform visions into remarkable structures.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} hover:bg-white/10 p-3 rounded-full transition-all`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-indigo-500 pb-2">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Blogs", href: "#blogs" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ translateX: 5 }}
                className="text-gray-300 hover:text-white transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-indigo-500 pb-2">
            Contact Us
          </h3>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4">
                {contact.icon}
                <span className="text-gray-300">{contact.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 pt-6 border-t border-gray-700 text-center"
      >
        <p className="text-gray-400">
          Created by <span className="text-indigo-400 font-semibold">AA Constructions</span> | 
          All rights reserved © {new Date().getFullYear()}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer