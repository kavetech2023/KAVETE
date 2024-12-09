import React from 'react';

export function Hero() {
  return (
    <div id="home" className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80"
          alt="Mental Health Support"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Mental Health Matters
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Join us in breaking the silence around mental health in Kenya. 
          Together, we can create a supportive community and prevent youth suicide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-700 transition-colors">
            Get Help Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}