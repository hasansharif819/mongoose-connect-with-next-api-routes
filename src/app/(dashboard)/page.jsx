import React from 'react';
import Slider from "@/components/Slider/Slider";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Slider />

      {/* Welcome Section */}
      <div className="container mx-auto text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to YourStore</h1>
        <p className="text-lg text-gray-600 mb-8">Discover the best products available at unbeatable prices</p>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      {/* Featured Products Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt={`Product ${idx + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product Name {idx + 1}</h3>
              <p className="text-gray-600 mb-4">$100.00</p>
              <button className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Shop With Us?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer the highest quality products at affordable prices, backed by exceptional customer service.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
