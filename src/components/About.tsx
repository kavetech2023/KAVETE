import React from 'react';

export function About() {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Kavete.org</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to promoting mental health awareness and preventing suicide
            among Kenyan youth through education, support, and community engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Support Group"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To create a supportive environment where young people feel safe to discuss
              their mental health challenges and seek help without fear of stigma or judgment.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <ul className="space-y-4 text-gray-600">
              <li>✓ 24/7 Crisis Support Hotline</li>
              <li>✓ School Mental Health Programs</li>
              <li>✓ Community Awareness Workshops</li>
              <li>✓ Professional Counseling Services</li>
              <li>✓ Youth Support Groups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}