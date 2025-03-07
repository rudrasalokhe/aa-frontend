// // import React, { useState } from 'react';
// // import { Menu, Search, Info, X } from 'lucide-react';

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);
// //   const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

// //   const navItems = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About', path: '/about' },
// //     { name: 'Services', path: '/services' },
// //     { name: 'Projects', path: '/projects' },
// //     { name: 'Appointment', path: '/appointment' },
// //     { name: 'Contact', path: '/contact' },
// //     { name: 'Blogs', path: '/blogs' }
// //   ];

// //   return (
// //     <header className="bg-white/90 backdrop-blur-md shadow-md py-4 sticky top-0 z-50 border-b border-gray-100">
// //       <div className="container mx-auto px-4 flex items-center justify-between">
// //         {/* Logo with Enhanced Branding */}
// //         <a 
// //           href="/" 
// //           className="flex items-center space-x-3 group"
// //         >
// //           <img 
// //             src="/api/placeholder/50/50" 
// //             alt="Logo" 
// //             className="h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-600 transition" 
// //           />
// //           <div>
// //             <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
// //               A.A. <span className="text-blue-600">Construction</span>
// //             </span>
// //           </div>
// //         </a>

// //         {/* Navigation with Modern Hover */}
// //         <nav className="hidden md:flex items-center space-x-6">
// //           {navItems.map(item => (
// //             <a 
// //               key={item.name} 
// //               href={item.path} 
// //               className="
// //                 relative 
// //                 text-gray-600 
// //                 font-medium 
// //                 px-2 
// //                 py-1 
// //                 group
// //                 hover:text-blue-600
// //                 transition 
// //               "
// //             >
// //               {item.name}
// //               <span 
// //                 className="
// //                   absolute 
// //                   bottom-0 
// //                   left-0 
// //                   w-full 
// //                   h-0.5 
// //                   bg-blue-600 
// //                   scale-x-0 
// //                   group-hover:scale-x-100 
// //                   transition 
// //                   origin-left
// //                 "
// //               />
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Action Buttons */}
// //         <div className="flex items-center space-x-4">
// //           {/* Mobile Menu Toggle */}
// //           <button 
// //             onClick={() => setIsMenuOpen(!isMenuOpen)} 
// //             className="
// //               md:hidden 
// //               text-gray-600 
// //               hover:text-blue-600 
// //               p-2 
// //               rounded-full 
// //               hover:bg-blue-50 
// //               transition
// //             "
// //           >
// //             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>

// //           {/* Action Icons */}
// //           <div className="flex items-center space-x-2">
// //             {/* Contact Info Button */}
// //             <button
// //               onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}
// //               className="
// //                 p-2 
// //                 rounded-full 
// //                 text-gray-600 
// //                 hover:bg-blue-50 
// //                 hover:text-blue-600 
// //                 transition 
// //               "
// //               aria-label="Open contact information"
// //             >
// //               <Info size={20} />
// //             </button>

// //             {/* Search Button */}
// //             <button
// //               onClick={() => setIsSearchOpen(!isSearchOpen)}
// //               className="
// //                 p-2 
// //                 rounded-full 
// //                 text-gray-600 
// //                 hover:bg-blue-50 
// //                 hover:text-blue-600 
// //                 transition 
// //               "
// //               aria-label="Open search"
// //             >
// //               <Search size={20} />
// //             </button>
// //           </div>

// //           {/* Authentication */}
// //           <div>
// //             <button 
// //               className="
// //                 px-4 
// //                 py-2 
// //                 bg-blue-600 
// //                 text-white 
// //                 rounded-full 
// //                 hover:bg-blue-700 
// //                 transition 
// //                 shadow-md 
// //                 hover:shadow-lg
// //               "
// //             >
// //               Sign In
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div 
// //           className="
// //             md:hidden 
// //             absolute 
// //             top-full 
// //             left-0 
// //             w-full 
// //             bg-white 
// //             shadow-lg 
// //             border-t 
// //             border-gray-100
// //           "
// //         >
// //           {navItems.map(item => (
// //             <a 
// //               key={item.name} 
// //               href={item.path} 
// //               className="
// //                 block 
// //                 px-4 
// //                 py-3 
// //                 text-gray-700 
// //                 hover:bg-blue-50 
// //                 hover:text-blue-600 
// //                 transition 
// //               "
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               {item.name}
// //             </a>
// //           ))}
// //         </div>
// //       )}

// //       {/* Search Overlay */}
// //       {isSearchOpen && (
// //         <div 
// //           className="
// //             fixed 
// //             inset-0 
// //             bg-black/50 
// //             backdrop-blur-sm 
// //             z-50 
// //             flex 
// //             items-center 
// //             justify-center 
// //             p-4
// //           "
// //           onClick={() => setIsSearchOpen(false)}
// //         >
// //           <div 
// //             className="
// //               w-full 
// //               max-w-xl 
// //               bg-white 
// //               rounded-xl 
// //               shadow-2xl 
// //               overflow-hidden
// //             "
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="flex items-center border-b">
// //               <input 
// //                 type="search" 
// //                 placeholder="Search projects, services..." 
// //                 className="
// //                   w-full 
// //                   p-4 
// //                   text-gray-700 
// //                   focus:outline-none
// //                 " 
// //               />
// //               <button 
// //                 className="
// //                   p-4 
// //                   text-blue-600 
// //                   hover:bg-blue-50 
// //                   transition
// //                 "
// //               >
// //                 <Search size={24} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState } from 'react';
// import { Menu, Search, Info, X } from 'lucide-react';
// import { UserButton } from "@clerk/clerk-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Appointment', path: '/appointment' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'Blogs', path: '/blogs' }
//   ];

//   return (
//     <header className="bg-white/90 backdrop-blur-md shadow-md py-4 sticky top-0 z-50 border-b border-gray-100">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo with Enhanced Branding */}
//         <a 
//           href="/" 
//           className="flex items-center space-x-3 group"
//         >
//           <img 
//             src="/api/placeholder/50/50" 
//             alt="Logo" 
//             className="h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-600 transition" 
//           />
//           <div>
//             <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
//               A.A. <span className="text-blue-600">Construction</span>
//             </span>
//           </div>
//         </a>

//         {/* Navigation with Modern Hover */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map(item => (
//             <a 
//               key={item.name} 
//               href={item.path} 
//               className="
//                 relative 
//                 text-gray-600 
//                 font-medium 
//                 px-2 
//                 py-1 
//                 group
//                 hover:text-blue-600
//                 transition 
//               "
//             >
//               {item.name}
//               <span 
//                 className="
//                   absolute 
//                   bottom-0 
//                   left-0 
//                   w-full 
//                   h-0.5 
//                   bg-blue-600 
//                   scale-x-0 
//                   group-hover:scale-x-100 
//                   transition 
//                   origin-left
//                 "
//               />
//             </a>
//           ))}
//         </nav>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile Menu Toggle */}
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)} 
//             className="
//               md:hidden 
//               text-gray-600 
//               hover:text-blue-600 
//               p-2 
//               rounded-full 
//               hover:bg-blue-50 
//               transition
//             "
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Action Icons */}
//           <div className="flex items-center space-x-2">
//             {/* Contact Info Button */}
//             <button
//               onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}
//               className="
//                 p-2 
//                 rounded-full 
//                 text-gray-600 
//                 hover:bg-blue-50 
//                 hover:text-blue-600 
//                 transition 
//               "
//               aria-label="Open contact information"
//             >
//               <Info size={20} />
//             </button>

//             {/* Search Button */}
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="
//                 p-2 
//                 rounded-full 
//                 text-gray-600 
//                 hover:bg-blue-50 
//                 hover:text-blue-600 
//                 transition 
//               "
//               aria-label="Open search"
//             >
//               <Search size={20} />
//             </button>
//           </div>

//           {/* Clerk User Button */}
//           <div className="flex items-center">
//             <UserButton 
//               afterSignOutUrl="/"
//               appearance={{
//                 elements: {
//                   userButtonAvatarBox: "h-10 w-10 rounded-full ring-2 ring-blue-500/50 hover:ring-blue-600 transition"
//                 }
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div 
//           className="
//             md:hidden 
//             absolute 
//             top-full 
//             left-0 
//             w-full 
//             bg-white 
//             shadow-lg 
//             border-t 
//             border-gray-100
//           "
//         >
//           {navItems.map(item => (
//             <a 
//               key={item.name} 
//               href={item.path} 
//               className="
//                 block 
//                 px-4 
//                 py-3 
//                 text-gray-700 
//                 hover:bg-blue-50 
//                 hover:text-blue-600 
//                 transition 
//               "
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}

//       {/* Search Overlay */}
//       {isSearchOpen && (
//         <div 
//           className="
//             fixed 
//             inset-0 
//             bg-black/50 
//             backdrop-blur-sm 
//             z-50 
//             flex 
//             items-center 
//             justify-center 
//             p-4
//           "
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div 
//             className="
//               w-full 
//               max-w-xl 
//               bg-white 
//               rounded-xl 
//               shadow-2xl 
//               overflow-hidden
//             "
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center border-b">
//               <input 
//                 type="search" 
//                 placeholder="Search projects, services..." 
//                 className="
//                   w-full 
//                   p-4 
//                   text-gray-700 
//                   focus:outline-none
//                 " 
//               />
//               <button 
//                 className="
//                   p-4 
//                   text-blue-600 
//                   hover:bg-blue-50 
//                   transition
//                 "
//               >
//                 <Search size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Menu, Search, Info, X } from 'lucide-react';
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blogs' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with Enhanced Branding */}
        <a 
          href="/" 
          className="flex items-center space-x-3 group"
        >
          <img 
            src="/api/placeholder/50/50" 
            alt="Logo" 
            className="h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-600 transition" 
          />
          <div>
            <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
              A.A. <span className="text-blue-600">Construction</span>
            </span>
          </div>
        </a>

        {/* Navigation with Modern Hover */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.path} 
              className="
                relative 
                text-gray-600 
                font-medium 
                px-2 
                py-1 
                group
                hover:text-blue-600
                transition 
              "
            >
              {item.name}
              <span 
                className="
                  absolute 
                  bottom-0 
                  left-0 
                  w-full 
                  h-0.5 
                  bg-blue-600 
                  scale-x-0 
                  group-hover:scale-x-100 
                  transition 
                  origin-left
                "
              />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="
              md:hidden 
              text-gray-600 
              hover:text-blue-600 
              p-2 
              rounded-full 
              hover:bg-blue-50 
              transition
            "
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            {/* Contact Info Button */}
            <button
              onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}
              className="
                p-2 
                rounded-full 
                text-gray-600 
                hover:bg-blue-50 
                hover:text-blue-600 
                transition 
              "
              aria-label="Open contact information"
            >
              <Info size={20} />
            </button>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="
                p-2 
                rounded-full 
                text-gray-600 
                hover:bg-blue-50 
                hover:text-blue-600 
                transition 
              "
              aria-label="Open search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Clerk Authentication Buttons */}
          <div className="flex items-center">
            <SignedOut>
              <SignInButton>
                <button 
                  className="
                    px-4 
                    py-2 
                    bg-blue-600 
                    text-white 
                    rounded-full 
                    hover:bg-blue-700 
                    transition 
                    shadow-md 
                    hover:shadow-lg
                  "
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-10 w-10 rounded-full ring-2 ring-blue-500/50 hover:ring-blue-600 transition"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="
            md:hidden 
            absolute 
            top-full 
            left-0 
            w-full 
            bg-white 
            shadow-lg 
            border-t 
            border-gray-100
          "
        >
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.path} 
              className="
                block 
                px-4 
                py-3 
                text-gray-700 
                hover:bg-blue-50 
                hover:text-blue-600 
                transition 
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="
            fixed 
            inset-0 
            bg-black/50 
            backdrop-blur-sm 
            z-50 
            flex 
            items-center 
            justify-center 
            p-4
          "
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="
              w-full 
              max-w-xl 
              bg-white 
              rounded-xl 
              shadow-2xl 
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b">
              <input 
                type="search" 
                placeholder="Search projects, services..." 
                className="
                  w-full 
                  p-4 
                  text-gray-700 
                  focus:outline-none
                " 
              />
              <button 
                className="
                  p-4 
                  text-blue-600 
                  hover:bg-blue-50 
                  transition
                "
              >
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;