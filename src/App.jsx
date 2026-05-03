import React, { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AccountSettings } from './pages/Settings/AccountSettings';

import { Support } from './pages/Support/Support';
import { Library } from './pages/Library/Library';
import { Gyms } from './pages/Gyms/Gyms';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [branding, setBranding] = useState({
    name: 'AURA.FIT.',
    color: '#22C55E',
    logo: null,
  });

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  };

  const updateBranding = (newBranding) => {
    setBranding(prev => {
      const updated = { ...prev, ...newBranding };
      if (newBranding.color) {
        document.documentElement.style.setProperty('--primary', newBranding.color);
        const rgb = hexToRgb(newBranding.color);
        if (rgb) {
          document.documentElement.style.setProperty('--primary-rgb', rgb);
        }
        // Update derivatives for lite and border with opacity
        document.documentElement.style.setProperty('--primary-lite', `${newBranding.color}15`);
        document.documentElement.style.setProperty('--primary-border', `${newBranding.color}30`);
      }
      return updated;
    });
  };

  const renderPage = () => {
    return (
      <div key={currentPage} className="page-transition-wrapper">
        {(() => {
          switch (currentPage) {
            case 'dashboard':
              return <Dashboard />;
            case 'settings':
              return (
                <AccountSettings 
                  branding={branding}
                  onBrandingChange={updateBranding}
                />
              );
            case 'support':
              return <Support />;
            case 'library':
              return <Library />;
            case 'gyms':
              return <Gyms />;
            default:
              return <Dashboard />;
          }
        })()}
      </div>
    );
  };

  return (
    <DashboardLayout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      branding={branding}
    >
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;