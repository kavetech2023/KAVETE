import React from 'react';
import { Phone, MessageSquare, Users, BookOpen } from 'lucide-react';

export function Resources() {
  return (
    <div id="resources" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mental Health Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive range of mental health resources and support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Phone className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Crisis Hotline</h3>
            <p className="text-gray-600">24/7 emergency support for those in crisis</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <MessageSquare className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Online Counseling</h3>
            <p className="text-gray-600">Professional counseling services via chat or video</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support Groups</h3>
            <p className="text-gray-600">Join our peer support community</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <BookOpen className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Resources</h3>
            <p className="text-gray-600">Learn about mental health and coping strategies</p>
          </div>
        </div>
      </div>
    </div>
  );
}