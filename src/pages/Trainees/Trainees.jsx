import React, { useState } from 'react';
import { Search, ChevronDown, ExternalLink, ChevronLeft, ChevronRight, PowerOff, RefreshCcw, CheckCircle, Settings, Users, TrendingUp, Clock, Dumbbell, CalendarDays, CreditCard, Activity } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import './Trainees.css';

const getStatusVariant = (status) => {
  switch (status.toUpperCase()) {
    case 'ACTIVE': return 'success';
    case 'SUSPENDED': return 'danger';
    case 'EXPIRED': return 'danger';
    case 'PENDING': return 'warning';
    default: return 'neutral';
  }
};

const getActionIcon = (status) => {
  switch (status.toUpperCase()) {
    case 'ACTIVE': return <PowerOff size={16} />;
    case 'SUSPENDED': return <RefreshCcw size={16} />;
    case 'EXPIRED': return <RefreshCcw size={16} />;
    case 'PENDING': return <CheckCircle size={16} />;
    default: return <Settings size={16} />;
  }
};

const getActionTitle = (status) => {
  switch (status.toUpperCase()) {
    case 'ACTIVE': return 'Suspend';
    case 'SUSPENDED': return 'Reactivate';
    case 'EXPIRED': return 'Renew';
    case 'PENDING': return 'Approve';
    default: return 'Manage';
  }
};

export function Trainees() {
  const [activeTab, setActiveTab] = useState('all');

  const traineeData = [
    { id: 'TR-4401', name: 'Ahmed Khalil', plan: 'Elite 12-Month', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop', status: 'ACTIVE', gym: 'Apex Performance Hub', coach: 'Marcus Sterling', joinDate: 'Jan 15, 2024', spent: 2400.00 },
    { id: 'TR-4402', name: 'Lina Morales', plan: 'Standard Monthly', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop', status: 'ACTIVE', gym: 'Iron Sanctuary NYC', coach: 'Elena Rodriguez', joinDate: 'Mar 02, 2024', spent: 780.00 },
    { id: 'TR-4403', name: 'Omar Hassan', plan: 'Elite 6-Month', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop', status: 'EXPIRED', gym: 'Velocity Lab', coach: 'Sarah Jenkins', joinDate: 'Aug 20, 2023', spent: 1200.00 },
    { id: 'TR-4404', name: 'Sofia Nguyen', plan: 'Trial — 14 Days', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop', status: 'PENDING', gym: 'Apex Performance Hub', coach: 'Unassigned', joinDate: 'Apr 28, 2024', spent: 0 },
    { id: 'TR-4405', name: 'James O\'Brien', plan: 'Standard Monthly', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop', status: 'SUSPENDED', gym: 'Titanium Fitness', coach: 'David Chen', joinDate: 'Nov 10, 2023', spent: 560.00 },
  ];

  return (
    <div className="trainees-page animate-fade-in">
      <div className="trainees-header">
        <h1 className="page-title">Trainees</h1>
        <p className="page-subtitle">Track memberships, monitor engagement, and manage the Aura subscriber base.</p>
      </div>

      {/* Stats Grid */}
      <div className="trainees-stats-grid">
        <div className="trainee-stat-card card animate-slide-up delay-1">
          <div className="stat-icon-wrap blue">
            <Users size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Members</span>
            <span className="stat-value">24,812</span>
          </div>
          <div className="stat-trend positive">+186 this week</div>
        </div>

        <div className="trainee-stat-card card animate-slide-up delay-2">
          <div className="stat-icon-wrap green">
            <CreditCard size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Active Subs</span>
            <span className="stat-value">21,340</span>
          </div>
          <div className="stat-trend positive">85.9% retention</div>
        </div>

        <div className="trainee-stat-card card animate-slide-up delay-3">
          <div className="stat-icon-wrap yellow">
            <Activity size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Avg. Sessions</span>
            <span className="stat-value">4.2/wk</span>
          </div>
          <div className="stat-trend neutral">Steady</div>
        </div>

        <div className="trainee-stat-card card animate-slide-up delay-4">
          <div className="stat-icon-wrap purple">
            <Clock size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Expiring Soon</span>
            <span className="stat-value">312</span>
          </div>
          <div className="stat-trend warning">Within 7 days</div>
        </div>
      </div>

      {/* Filter Hub */}

      <div className="trainees-filter-hub card animate-slide-up delay-5">
        <div className="filter-controls">
          <div className="search-mini">
            <Search size={16} />
            <input type="text" placeholder="Search members by name, ID, or gym..." />
          </div>
          <div className="vertical-divider" />
          <div className="filter-selects">
            <button className="filter-select-mini">Plan <ChevronDown size={14} /></button>
            <button className="filter-select-mini">Status <ChevronDown size={14} /></button>
            <button className="filter-select-mini">Gym <ChevronDown size={14} /></button>
          </div>
          <button className="btn-primary-sm">
            <Users size={16} />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      {/* Directory Table */}
      <div className="trainees-table-container animate-slide-up delay-6">
        <div className="table-responsive">
          <table className="directory-table">
            <thead>
              <tr>
                <th>MEMBER</th>
                <th>PLAN</th>
                <th>GYM</th>
                <th>COACH</th>
                <th>JOINED</th>
                <th>TOTAL SPENT</th>
                <th>STATUS</th>
                <th className="text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {traineeData.map(trainee => (
                <tr key={trainee.id}>
                  <td>
                    <div className="trainee-identity">
                      <img src={trainee.image} alt={trainee.name} className="trainee-img" />
                      <div className="trainee-info-meta">
                        <h4>{trainee.name}</h4>
                        <span className="t-id">#{trainee.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`plan-tag ${trainee.plan.includes('Elite') ? 'elite' : trainee.plan.includes('Trial') ? 'trial' : 'standard'}`}>
                      {trainee.plan}
                    </span>
                  </td>
                  <td className="gym-cell">{trainee.gym}</td>
                  <td className={`coach-cell ${trainee.coach === 'Unassigned' ? 'unassigned' : ''}`}>
                    {trainee.coach}
                  </td>
                  <td className="date-cell">{trainee.joinDate}</td>
                  <td>
                    <span className="trainee-spent">
                      ${trainee.spent.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td>
                    <Badge variant={getStatusVariant(trainee.status)}>{trainee.status}</Badge>
                  </td>
                  <td className="text-right">
                    <div className="action-group">
                      <button className="btn-action-ghost" title="View Profile">
                        <ExternalLink size={16} />
                      </button>
                      <button 
                        className={`btn-action btn-${trainee.status.toLowerCase()}`} 
                        title={getActionTitle(trainee.status)}
                      >
                        {getActionIcon(trainee.status)}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer-pagination">
          <span className="results-count">Showing 1 to 5 of 24,812 members</span>
          <div className="pagination-controls">
            <button className="page-nav"><ChevronLeft size={18} /></button>
            <button className="page-num-btn active">1</button>
            <button className="page-num-btn">2</button>
            <button className="page-num-btn">3</button>
            <span className="page-dots">...</span>
            <button className="page-num-btn">4,963</button>
            <button className="page-nav"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
