import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './DashboardLayout.css';

export function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
