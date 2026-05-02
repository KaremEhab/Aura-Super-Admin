import React, { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AccountSettings } from './pages/Settings/AccountSettings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'settings':
        return <AccountSettings key="settings" />;
      default:
        return <Dashboard key="dashboard" />;
    }
  };

  return (
    <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;