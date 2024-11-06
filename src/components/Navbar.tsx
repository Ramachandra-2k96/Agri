import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">AgriTech AI</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`
              }
            >
              Community
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}