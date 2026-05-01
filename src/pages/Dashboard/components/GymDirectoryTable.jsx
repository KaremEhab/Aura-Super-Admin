import React from 'react';
import { PowerOff, RefreshCcw, CheckCircle, Settings } from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';
import './GymDirectoryTable.css';

const getStatusVariant = (status) => {
  switch (status) {
    case 'ACTIVE': return 'success';
    case 'SUSPENDED': return 'danger';
    case 'PENDING': return 'warning';
    default: return 'neutral';
  }
};

const getActionIcon = (status) => {
  switch (status) {
    case 'ACTIVE': return <PowerOff size={16} />;
    case 'SUSPENDED': return <RefreshCcw size={16} />;
    case 'PENDING': return <CheckCircle size={16} />;
    default: return <Settings size={16} />;
  }
};

const getActionTitle = (status) => {
  switch (status) {
    case 'ACTIVE': return 'Kill Switch';
    case 'SUSPENDED': return 'Reactivate';
    case 'PENDING': return 'Activate';
    default: return 'Manage';
  }
};

export function GymDirectoryTable({ directory }) {
  return (
    <div className="bg-sidebar border border-stroke rounded-xl overflow-hidden h-full">
      <div className="p-4 border-b border-stroke flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="font-bold text-[var(--title)]">
          Gym Directory Control 
          <span className="text-[var(--subtitle)] text-sm ml-2"> ( 68 GYMs ) ( 43 PTs )</span>
        </h3>
        <div className="flex gap-2">
          <button className="btn-secondary">Export CSV</button>
          <button className="btn-secondary">View Full Registry</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-left directory-table">
          <thead>
            <tr>
              <th>GYM IDENTITY</th>
              <th>GYM/PT ID</th>
              <th>REVENUE (30D)</th>
              <th>STATUS</th>
              <th className="text-right">SYSTEM ACTION</th>
            </tr>
          </thead>
          <tbody>
            {directory.map(gym => (
              <tr key={gym.id}>
                <td>
                  <div className="gym-identity">
                    <img src={gym.image} alt={gym.name} className="gym-img" />
                    <div>
                      <h4>{gym.name}</h4>
                      <p>{gym.tier}</p>
                    </div>
                  </div>
                </td>
                <td className="gym-id">#{gym.id}</td>
                <td className="gym-revenue">
                  ${gym.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td>
                  <Badge variant={getStatusVariant(gym.status)}>{gym.status}</Badge>
                </td>
                <td className="text-right">
                  <button 
                    className={`btn-action btn-${gym.status.toLowerCase()}`} 
                    title={getActionTitle(gym.status)}
                  >
                    {getActionIcon(gym.status)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
