'use client';

import React, { useState, useEffect } from 'react';
import top1 from "@/assets/images/top1.png";
import top2 from "@/assets/images/top2.jpg";
import top3 from "@/assets/images/top3.png";

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: top1, // No curly braces around `top1`
            title: 'Welcome to Test Store',
            description: 'Discover the best products at unbeatable prices',
            button1Text: 'Shop Now',
            button2Text: 'Learn More',
        },
        {
            id: 2,
            image: top2, // No curly braces around `top2`
            title: 'Quality Products',
            description: 'High-quality items from trusted brands',
            button1Text: 'Explore Products',
            button2Text: 'Our Story',
        },
        {
            id: 3,
            image: top3, // No curly braces around `top3`
            title: 'Unbeatable Prices',
            description: 'Find the best deals on top products',
            button1Text: 'Check Deals',
            button2Text: 'Get Started',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image.src} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.description}</p>
                        <div className="space-x-4">
                            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                {slide.button1Text}
                            </button>
                            <button className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition">
                                {slide.button2Text}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 transform -translate-y-1/2 left-4 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 transform -translate-y-1/2 right-4 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
