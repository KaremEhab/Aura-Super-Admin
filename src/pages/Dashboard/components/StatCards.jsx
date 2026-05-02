import React from 'react';
import { Database, Zap, Cloud, Users } from 'lucide-react';
import './StatCards.css';

export function StatCards({ stats }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {/* Supabase DB */}
      <div className="card stat-card">
        <div className="stat-header">
          <Database size={16} className="stat-icon" />
          <span>SUPABASE DB</span>
        </div>
        <div className="stat-main">
          <span className="stat-label">Total Size</span>
          <span className="stat-value">{stats.supabase.size}</span>
        </div>
        <div className="stat-progress-container">
          <div className="stat-progress-bar">
            <div className="stat-progress-fill" style={{ width: `${stats.supabase.usage}%` }}></div>
          </div>
          <div className="stat-progress-labels">
            <span>Provisioned: {stats.supabase.provisioned}</span>
            <span className="text-primary">{stats.supabase.usage}% Usage</span>
          </div>
        </div>
      </div>

      {/* Edge Functions */}
      <div className="card stat-card">
        <div className="stat-header">
          <Zap size={16} className="stat-icon text-primary" />
          <span>EDGE FUNCTIONS</span>
        </div>
        <div className="stat-main">
          <span className="stat-label">Total Invocations</span>
          <span className="stat-value">{stats.edgeFunctions.invocations}</span>
        </div>
        <div className="stat-footer">
          <TrendingIcon />
          <span className="text-primary">Avg Latency: {stats.edgeFunctions.avgLatency}</span>
        </div>
      </div>

      {/* Cloudflare R2 */}
      <div className="card stat-card">
        <div className="stat-header">
          <Cloud size={16} className="stat-icon text-primary" />
          <span>CLOUDFLARE R2</span>
        </div>
        <div className="stat-main">
          <span className="stat-label">Media Egress</span>
          <span className="stat-value">{stats.cloudflare.egress}</span>
        </div>
        <div className="stat-footer-flex">
          <span className="stat-label">Cache Efficiency</span>
          <span className="text-primary">{stats.cloudflare.cacheEfficiency}% (Hack On)</span>
        </div>
      </div>

      {/* System Health */}
      <div className="card stat-card">
        <div className="stat-header">
          <Zap size={16} className="stat-icon text-primary" />
          <span>SYSTEM HEALTH</span>
        </div>
        <div className="stat-main">
          <span className="stat-label">Platform Uptime</span>
          <span className="stat-value">{stats.systemHealth.uptime}</span>
        </div>
        <div className="stat-footer">
          <span className="status-dot"></span>
          <span>Current Error Rate: {stats.systemHealth.errorRate}</span>
        </div>
      </div>
    </div>
  );
}

function TrendingIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  );
}
