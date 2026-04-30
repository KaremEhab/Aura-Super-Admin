import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import './DashboardLayout.css';

export function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-wrapper">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="main-content">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
