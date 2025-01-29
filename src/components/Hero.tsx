import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero: React.FC = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      title: 'we provide best service',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      title: 'making dream come to life',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!'
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200',
      title: 'from concept to creation',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur beatae iusto pariatur laborum magnam eos!'
    }
  ];

  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="h-[60rem]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="min-h-[60rem] flex items-center relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
              <div className="relative w-[50rem] px-[10%]">
                <h3 className="text-6xl text-black uppercase mb-4">{slide.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">{slide.text}</p>
                <a href="#about" className="inline-block px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black">
                  get started
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;