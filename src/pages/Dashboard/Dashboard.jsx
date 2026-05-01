import React from 'react';
import { GMVChart } from './components/GMVChart';
import { SystemAlerts } from './components/SystemAlerts';
import { StatCards } from './components/StatCards';
import { ApprovalsList } from './components/ApprovalsList';
import { GymDirectoryTable } from './components/GymDirectoryTable';
import { dashboardData } from './mockData';
import './Dashboard.css';

export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header-text" style={{ marginTop: '24px' }}>
        <h1 className="page-title">Aura Dashboard</h1>
        <p className="page-subtitle">Real-time health and revenue monitoring for AURA.FIT. global infrastructure.</p>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GMVChart data={dashboardData.gmv} />
          </div>
          <div className="lg:col-span-1">
            <SystemAlerts alerts={dashboardData.alerts} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full">
          <StatCards stats={dashboardData.stats} />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="lg:col-span-1">
            <ApprovalsList approvals={dashboardData.approvals} />
          </div>
          <div className="lg:col-span-3">
            <GymDirectoryTable directory={dashboardData.directory} />
          </div>
        </div>
      </div>
    </div>
  );
}
