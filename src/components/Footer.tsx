import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">DevStack</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-between items-center">
          <p className="text-gray-500">© 2024 DevStack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}