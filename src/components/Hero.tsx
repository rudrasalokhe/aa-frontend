import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'Expert Construction',
      subtitle: 'QUALITY & PRECISION',
      text: 'Building excellence with innovation and superior craftsmanship',
      cta: 'Our Projects',
      color: 'from-blue-600 to-blue-400'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'Modern Solutions',
      subtitle: 'INNOVATIVE DESIGN',
      text: 'Creating functional spaces that inspire and stand the test of time',
      cta: 'Services',
      color: 'from-blue-600 to-blue-400'
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'Trusted Results',
      subtitle: 'CLIENT SATISFACTION',
      text: 'Delivering exceptional construction with attention to every detail',
      cta: 'About Us',
      color: 'from-blue-600 to-blue-400'
    }
  ];

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Slide counter - bold and colorful */}
      <div className="absolute top-8 left-8 z-20 text-white flex items-center">
        <span className="text-5xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
        <div className="mx-3 h-1 w-16 bg-white/20 relative">
          <div 
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${slides[activeIndex].color} transition-all duration-500`}
            style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        <span className="text-xl text-white/60">{String(slides.length).padStart(2, '0')}</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !w-3 !h-3 !rounded-full !bg-white/50 !opacity-100 hover:!bg-white"></span>`;
          },
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Bold overlay with more saturation */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40"></div>
              
              {/* Accent color overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${slide.color} opacity-10`}></div>
              
              {/* Content container - centered for impact */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8 md:px-12">
                  <div className="max-w-3xl">
                    {/* Bold colorful subtitle */}
                    <div className="flex items-center mb-6">
                      <div className={`w-20 h-2 bg-gradient-to-r ${slide.color} mr-4 rounded-full`}></div>
                      <span className="text-blue-400 font-bold tracking-wider text-lg">{slide.subtitle}</span>
                    </div>
                    
                    {/* Large heading with gradient text */}
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className="block">
                          {i === 0 ? (
                            <span className={`bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                              {word}
                            </span>
                          ) : word}
                        </span>
                      ))}
                    </h1>
                    
                    {/* Description - bigger and bolder */}
                    <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
                      {slide.text}
                    </p>
                    
                    {/* Bold colorful CTA buttons */}
                    <div className="flex flex-wrap gap-5">
                      <a
                        href="#projects"
                        className={`py-4 px-8 bg-gradient-to-r ${slide.color} text-white text-lg font-bold rounded-lg shadow-md inline-flex items-center hover:shadow-lg transition-all`}
                      >
                        <span>{slide.cta}</span>
                        <svg 
                          className="w-5 h-5 ml-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      
                      <a
                        href="#contact"
                        className="py-4 px-8 bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Bold colorful navigation controls */}
      <div className="absolute right-8 bottom-8 z-10 flex space-x-4">
        <div className="custom-prev w-14 h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition-all">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="custom-next w-14 h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition-all">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;