import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Sprout,
  Cloud,
  Users,
  BookOpen,
  Settings,
  LogOut
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Sprout, label: 'Soil Analysis', path: '/dashboard/soil' },
  { icon: Cloud, label: 'Weather', path: '/dashboard/weather' },
  { icon: Users, label: 'Community', path: '/dashboard/community' },
  { icon: BookOpen, label: 'market', path: '/dashboard/market' },
];

export function DashboardSidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-6">
        <NavLink to="/dashboard" className="flex items-center space-x-2">
          <Sprout className="w-8 h-8 text-green-600" />
          <span className="text-xl font-bold text-gray-900">AgriTech AI</span>
        </NavLink>
      </div>

      <nav className="mt-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-gray-50 ${
                isActive ? 'bg-green-50 text-green-600' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-6">
        <button className="flex items-center w-full space-x-3 text-gray-700 transition-colors hover:text-red-600">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}