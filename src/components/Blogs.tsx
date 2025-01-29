import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Blogs: React.FC = () => {
  const blogs = [
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      title: 'blog title goes here',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      title: 'blog title goes here',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!'
    },
    {
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800',
      title: 'blog title goes here',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!'
    }
  ];

  return (
    <section id="blogs" className="bg-gray-100 py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">our blogs</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-12"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.text}</p>
                <a href="#" className="inline-block px-6 py-2 bg-black text-white hover:bg-yellow-400 hover:text-black transition duration-300">
                  read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blogs;