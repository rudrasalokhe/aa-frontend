import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Review {
    id: number;
    text: string;
    image: string;
    name: string;
    role: string;
}

const Reviews: React.FC = () => {
    const reviews: Review[] = [
        {
            id: 1,
            text: "Exceptional service that exceeded all our expectations. Their innovative approach truly transformed our business.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Michael Chen",
            role: "CTO, TechNova Solutions"
        },
        {
            id: 2,
            text: "Incredible team with outstanding results. They delivered beyond our wildest dreams and made our vision a reality.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Elena Rodriguez",
            role: "Marketing Director, Global Brands"
        },
        {
            id: 3,
            text: "A game-changing partnership that brought unprecedented growth to our company. Simply outstanding!",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            name: "David Kumar",
            role: "Founder, Innovative Startups"
        }
    ];

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    What Our Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <motion.div 
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                        >
                            <Quote className="text-blue-500 mb-4" size={32} />
                            <p className="text-gray-600 italic mb-6 h-24 overflow-hidden">
                                "{review.text}"
                            </p>
                            
                            <div className="flex items-center">
                                <img 
                                    src={review.image} 
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                    <div className="flex text-yellow-500 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;