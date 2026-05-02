import React from 'react';
import { Dumbbell, UserCheck, Users, Contact, TrendingUp } from 'lucide-react';
import './BusinessStats.css';

export function BusinessStats({ stats }) {
  const items = [
    { label: 'Total Gyms', value: stats.totalGyms.value, growth: stats.totalGyms.growth, icon: Dumbbell, color: 'var(--primary)' },
    { label: 'Personal Trainers', value: stats.activePTs.value, growth: stats.activePTs.growth, icon: UserCheck, color: 'var(--secondary)' },
    { label: 'Receptionists', value: stats.receptionists.value, growth: stats.receptionists.growth, icon: Contact, color: '#6366F1' },
    { label: 'Total Trainees', value: stats.totalTrainees.value, growth: stats.totalTrainees.growth, icon: Users, color: '#EC4899' },
  ];

  return (
    <div className="business-stats-grid">
      {items.map((item, idx) => (
        <div key={idx} className="card business-stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
            <item.icon size={20} />
          </div>
          <div className="stat-content">
            <p className="stat-label">{item.label}</p>
            <h3 className="stat-value">{item.value}</h3>
            <div className="stat-growth">
              <TrendingUp size={12} className="text-primary" />
              <span className="text-primary">+{item.growth}%</span>
              <span className="text-subtitle">vs last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
