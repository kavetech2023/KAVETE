import React from 'react';
import { Users, Phone, Heart } from 'lucide-react';

export function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-rose-600" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-bold text-gray-900">5000+</h3>
              <p className="mt-2 text-lg text-gray-600">People Helped</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Phone className="h-12 w-12 text-rose-600" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
              <p className="mt-2 text-lg text-gray-600">Support Available</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-rose-600" />
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-bold text-gray-900">100+</h3>
              <p className="mt-2 text-lg text-gray-600">Volunteer Counselors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}