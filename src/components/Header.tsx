import React, { useState } from 'react';
import { Menu, Search, User, Info, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 shadow-md bg-white z-50 px-[10%] py-6 flex items-center justify-between">
        <a href="#" className="text-2xl text-black">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=50" alt="logo" className="inline-block pr-2 w-[70px] -mb-4" />
          <span className="text-red-800">A.A.</span>Construction
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          {['Home', 'About', 'Services', 'Projects', 'Pricing', 'Contact', 'Blogs'].map((item) => (
            <a key={item} href={`#${item}`} className="text-xl text-black capitalize mx-4 hover:text-yellow-400">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-12 w-12 bg-gray-100 text-black hover:bg-black hover:text-white flex items-center justify-center"
          >
            <Menu size={20} />
          </button>
          <button 
            onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}
            className="h-12 w-12 bg-gray-100 text-black hover:bg-black hover:text-white flex items-center justify-center"
          >
            <Info size={20} />
          </button>
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="h-12 w-12 bg-gray-100 text-black hover:bg-black hover:text-white flex items-center justify-center"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="h-12 w-12 bg-gray-100 text-black hover:bg-black hover:text-white flex items-center justify-center"
          >
            <User size={20} />
          </button>
        </div>

        {/* Search Form */}
        <form className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[70rem] bg-white shadow-md p-4 ${isSearchOpen ? 'flex' : 'hidden'} items-center gap-4`}>
          <input type="search" placeholder="search here..." className="w-full p-3 bg-gray-100 text-base text-gray-600" />
          <button type="submit">
            <Search size={20} />
          </button>
        </form>

        {/* Login Form */}
        <form className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[40rem] bg-white shadow-md p-8 ${isLoginOpen ? 'block' : 'hidden'}`}>
          <h3 className="text-2xl font-bold text-black uppercase mb-4">login form</h3>
          <input type="email" placeholder="enter your email" className="w-full p-3 bg-gray-100 text-base text-gray-600 mb-3" />
          <input type="password" placeholder="enter your password" className="w-full p-3 bg-gray-100 text-base text-gray-600 mb-3" />
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="text-sm text-gray-600">remember me</label>
            <a href="#" className="text-sm text-gray-600 ml-auto hover:text-yellow-400">forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-black text-white p-3 hover:bg-yellow-400 hover:text-black">login now</button>
          <p className="text-sm text-gray-600 mt-4">
            don't have an account <a href="#" className="text-yellow-400 hover:underline">create one!</a>
          </p>
        </form>
      </header>

      {/* Contact Info Panel */}
      <div className={`fixed top-0 right-0 w-[35rem] h-full bg-white z-[1100] p-8 pt-20 text-center transform transition-transform duration-300 ${isContactInfoOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setIsContactInfoOpen(false)}
          className="absolute top-4 right-6 text-4xl hover:rotate-90 transition-transform duration-300"
        >
          <X size={32} />
        </button>

        <div className="mb-8">
          <div className="h-20 w-20 bg-gray-100 mx-auto mb-2 flex items-center justify-center">
            <Phone size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-2">phone number</h3>
          <p className="text-gray-600">+91810432323</p>
          <p className="text-gray-600">+911-222-3333</p>
        </div>

        <div className="mb-8">
          <div className="h-20 w-20 bg-gray-100 mx-auto mb-2 flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Email address</h3>
          <p className='text-gray-600'>rudrasalokhe100@gmail.com</p>
          <p className="text-gray-600">ketansonawane32@gmail.com</p>
          <p className="text-gray-600">Aryanbawkar36@gmail.com</p>
        </div>

        <div className="mb-8">
          <div className="h-20 w-20 bg-gray-100 mx-auto mb-2 flex items-center justify-center">
            <MapPin size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-2">office address</h3>
          <p className="text-gray-600">mumbai, india - 400104</p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-center gap-2">
            <a href="#" className="h-20 w-20 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="h-20 w-20 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="h-20 w-20 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="h-20 w-20 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when contact info is open */}
      {isContactInfoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-[1050]"
          onClick={() => setIsContactInfoOpen(false)}
        />
      )}
    </>
  );
};

export default Header;