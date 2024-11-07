import React from 'react';
import { Mail, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">AgriNext</h3>
            <p className="text-gray-400">Empowering farmers with cutting-edge AI technology for sustainable agriculture.</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="transition-colors hover:text-white">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Features</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Pricing</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 transition-colors cursor-pointer hover:text-green-400" />
              <Facebook className="w-6 h-6 transition-colors cursor-pointer hover:text-green-400" />
              <Instagram className="w-6 h-6 transition-colors cursor-pointer hover:text-green-400" />
              <Mail className="w-6 h-6 transition-colors cursor-pointer hover:text-green-400" />
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-4 py-2 transition-colors bg-green-600 rounded-r-lg hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2024 AgriTech AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}