import React from 'react';
import { AlertTriangle, Server, CreditCard, Database, ChevronRight } from 'lucide-react';
import './SystemAlerts.css';

const getIcon = (type) => {
  switch (type) {
    case 'error': return <Server size={16} />;
    case 'success': return <CreditCard size={16} />;
    case 'info': return <Database size={16} />;
    default: return <Server size={16} />;
  }
};

export function SystemAlerts({ alerts }) {
  return (
    <div className="card alerts-card">
      <div className="alerts-header">
        <h3 className="card-title">
          <AlertTriangle size={18} className="text-alert" />
          System Alerts
        </h3>
        <span className="critical-badge">
          4 CRITICAL
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="alerts-list">
        {alerts.map(alert => (
          <div key={alert.id} className={`alert-item alert-${alert.type}`}>
            <div className="alert-icon-wrapper">
              {getIcon(alert.type)}
            </div>
            <div className="alert-content">
              <h4>{alert.title}</h4>
              <p>{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
