import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from 'lucide-react';
import 'swiper/css';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Our experience with this company has been outstanding. Their attention to detail, professionalism, and quality of work exceeded our expectations. From start to finish, everything was executed seamlessly, and we're thrilled with the results.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      name: "Varun Jha",
      rating: 5
    },
    {
      text: "We couldn't be happier with the service provided. The team was responsive, timely, and went above and beyond to ensure everything was done to perfection. The project was completed on schedule, and the quality of work was exceptional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      name: " Ananya Makhija",
      rating: 5
    },
    {
      text: "Working with this company was a fantastic experience. They listened to our needs, offered valuable insights, and delivered results beyond our expectations. The entire process was smooth, and the final outcome was exactly what we envisioned.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      name: "Nikhil Karia",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-[10%]">
      <h1 className="text-4xl font-bold mb-12 border-l-8 border-yellow-400 pl-4">Client reviews</h1>

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