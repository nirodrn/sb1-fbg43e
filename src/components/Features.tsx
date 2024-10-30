import React from 'react';
import { Zap, Rocket, Github } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: 'Lightning Fast',
    description: 'Built for speed and optimized for performance right out of the box.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-indigo-600" />,
    title: 'Scale with Ease',
    description: 'Designed to grow with your project, from prototype to production.'
  },
  {
    icon: <Github className="h-6 w-6 text-indigo-600" />,
    title: 'Open Source',
    description: 'Backed by a strong community and modern development practices.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Built for Modern Development
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build amazing products, faster than ever.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}