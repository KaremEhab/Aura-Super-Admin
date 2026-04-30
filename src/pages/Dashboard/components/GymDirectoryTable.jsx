import React from 'react';
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

const getActionLabel = (status) => {
  switch (status) {
    case 'ACTIVE': return 'KILL SWITCH';
    case 'SUSPENDED': return 'REACTIVATE';
    case 'PENDING': return 'ACTIVATE';
    default: return 'MANAGE';
  }
};

export function GymDirectoryTable({ directory }) {
  return (
    <div className="card directory-card">
      <div className="directory-header">
        <h3 className="card-title">
          Gym Directory Control 
          <span className="directory-stats"> ( 68 GYMs ) ( 43 PTs )</span>
        </h3>
        <div className="directory-actions">
          <button className="btn-secondary">Export CSV</button>
          <button className="btn-secondary">View Full Registry</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="directory-table">
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
                  <button className={`btn-action btn-${gym.status.toLowerCase()}`}>
                    {getActionLabel(gym.status)}
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
