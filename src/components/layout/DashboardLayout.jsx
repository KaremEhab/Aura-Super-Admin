import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { Plus } from 'lucide-react';
import './DashboardLayout.css';

export function DashboardLayout({ children, currentPage, onNavigate, branding }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="dashboard-layout">
      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentPage={currentPage}
        branding={branding}
        onNavigate={(page) => {
          onNavigate(page);
          setSidebarOpen(false); // Close sidebar on mobile after navigation
        }}
      />
      <div className="main-wrapper">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} branding={branding}/>
        <main className="main-content">
          {children}
        </main>
        <BottomNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <button className="fab-button" title="Add New Gym">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}
