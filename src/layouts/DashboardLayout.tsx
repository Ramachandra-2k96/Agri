import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '../components/DashboardSidebar';

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}