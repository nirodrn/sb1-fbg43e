import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Build Faster, Scale Better
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Transform your development workflow with our cutting-edge tools and frameworks.
            Ship products faster and focus on what matters most - your code.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="group bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-300 hover:border-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-20">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Developer workspace"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}