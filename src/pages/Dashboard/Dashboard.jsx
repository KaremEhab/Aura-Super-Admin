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

      <div className="dashboard-grid">
        {/* Row 1 */}
        <div className="grid-row row-1">
          <div className="col-gmv">
            <GMVChart data={dashboardData.gmv} />
          </div>
          <div className="col-alerts">
            <SystemAlerts alerts={dashboardData.alerts} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid-row" style={{ marginTop: '40px' }}>
          <StatCards stats={dashboardData.stats} />
        </div>

        {/* Row 3 */}
        <div className="grid-row row-3">
          <div className="col-approvals">
            <ApprovalsList approvals={dashboardData.approvals} />
          </div>
          <div className="col-directory">
            <GymDirectoryTable directory={dashboardData.directory} />
          </div>
        </div>
      </div>
    </div>
  );
}
