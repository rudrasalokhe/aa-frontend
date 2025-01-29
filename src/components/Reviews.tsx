import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from 'lucide-react';
import 'swiper/css';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      name: "John Doe",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      name: "Jane Smith",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      name: "Mike Johnson",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">clients reviews</h1>

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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-6 relative mb-12">
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
              <div className="absolute -bottom-12 left-8 transform rotate-45 w-8 h-8 bg-gray-100"></div>
            </div>
            <div className="flex items-center gap-4 mt-16">
              <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;