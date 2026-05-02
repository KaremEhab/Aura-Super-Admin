import React from 'react';
import { Search, Filter, ArrowUpDown, MessageSquare, Megaphone, Shield, Clock, Activity, ExternalLink, Send } from 'lucide-react';
import './Support.css';

export function Support() {
  const tickets = [
    {
      id: 'TK-8942',
      title: 'Hardware Malfunction',
      desc: 'The biometric turnstiles at the Eastside Downtown location are failing to authenticate members...',
      priority: 'HIGH PRIORITY',
      time: '2 mins ago',
      gym: 'Eastside Fitness',
      category: 'Infrastructure',
      status: 'Pending',
      statusColor: 'text-alert'
    },
    {
      id: 'TK-8939',
      title: 'Billing Adjustment',
      desc: 'Need to refund a member who was overcharged during the seasonal promotion period...',
      priority: 'NORMAL',
      time: '45 mins ago',
      gym: 'PowerHouse Gym',
      category: 'Financials',
      status: 'Open',
      statusColor: 'text-primary'
    },
    {
      id: 'TK-8935',
      title: 'New Trainer Inquiry',
      desc: 'How do I add a new specialized trainer to the \'Pro\' level directory listing for our region?',
      priority: 'INFORMATION',
      time: '2 hours ago',
      gym: 'Zenith Yoga',
      category: 'Library',
      status: 'Resolved',
      statusColor: 'text-success'
    }
  ];

  return (
    <div className="support-page animate-fade-in">
      <div className="support-header-text">
        <h1 className="page-title">Aura Support</h1>
        <p className="page-subtitle">Manage incoming inquiries and system-wide communications.</p>
      </div>

      <div className="support-grid">
        <div className="support-main">
          {/* Stats Row */}
          <div className="support-stats-row">
            <div className="card stat-card animate-slide-up delay-1">
              <div className="stat-label">ACTIVE TICKETS</div>
              <div className="stat-value">142</div>
              <div className="stat-trend success">
                <Activity size={14} />
                <span>12% from yesterday</span>
              </div>
            </div>
            <div className="card stat-card animate-slide-up delay-2">
              <div className="stat-label">AVG. RESPONSE</div>
              <div className="stat-value">17m 31s</div>
              <div className="stat-trend success">
                <Clock size={14} />
                <span>Within SLA</span>
              </div>
            </div>
            <div className="card stat-card attention animate-slide-up delay-3">
              <div className="stat-label">PENDING REVIEW</div>
              <div className="stat-value">28</div>
              <div className="stat-trend alert">
                <Shield size={14} />
                <span>Needs Attention</span>
              </div>
            </div>
            <div className="card stat-card animate-slide-up delay-4">
              <div className="stat-label">SYSTEM HEALTH</div>
              <div className="stat-value">99.9%</div>
              <div className="stat-trend success">
                <Activity size={14} />
                <span>All Systems Nominal</span>
              </div>
            </div>
          </div>

          {/* Tickets Section */}
          <div className="card tickets-card animate-slide-up delay-3">
            <div className="tickets-header">
              <h3 className="section-title">Incoming Support Tickets</h3>
              <div className="tickets-actions">
                <button className="btn-action-outline">
                  <Filter size={14} />
                  <span>Filter</span>
                </button>
                <button className="btn-action-outline">
                  <ArrowUpDown size={14} />
                  <span>Sort</span>
                </button>
              </div>
            </div>

            <div className="tickets-list">
              {tickets.map((ticket, index) => (
                <div key={ticket.id} className="ticket-item">
                  <div className="ticket-top">
                    <div className="ticket-meta-header">
                      <span className={`priority-badge ${ticket.priority.toLowerCase().replace(' ', '-')}`}>
                        {ticket.priority}
                      </span>
                      <span className="ticket-id">#{ticket.id} - {ticket.title}</span>
                    </div>
                    <span className="ticket-time">{ticket.time}</span>
                  </div>
                  <p className="ticket-desc">"{ticket.desc}"</p>
                  <div className="ticket-footer">
                    <div className="footer-meta">
                      <div className="meta-item">
                        <Dumbbell size={14} />
                        <span>{ticket.gym}</span>
                      </div>
                      <div className="meta-item">
                        <MessageSquare size={14} />
                        <span>{ticket.category}</span>
                      </div>
                      <div className="meta-item">
                        <span className={`status-dot ${ticket.statusColor}`}></span>
                        <span>{ticket.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-load-more">Load More Tickets</button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="support-sidebar">
          {/* System Broadcast Card */}
          <div className="card broadcast-card animate-slide-up delay-4">
            <div className="card-header-simple">
              <Megaphone className="text-primary" size={20} />
              <h3 className="section-title">System Broadcast</h3>
            </div>
            <p className="section-desc">Send critical push notifications and dashboard alerts to all gym owners instantly.</p>
            
            <div className="broadcast-form">
              <div className="form-group">
                <label>BROADCAST TITLE</label>
                <input type="text" placeholder="e.g., Scheduled Maintenance" />
              </div>
              <div className="form-grid-mini">
                <div className="form-group">
                  <label>SEND TO</label>
                  <select className="form-select">
                    <option>Gym Owners, Trainees</option>
                    <option>All Users</option>
                    <option>Gym Owners Only</option>
                    <option>Personal Trainers Only</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>PRIORITY</label>
                  <select className="form-select">
                    <option>Normal</option>
                    <option>Urgent (Red Glow)</option>
                    <option>Low Priority</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>SCHEDULE (OPTIONAL)</label>
                <div className="input-with-icon">
                  <Clock size={16} />
                  <input type="datetime-local" />
                </div>
              </div>
              <div className="form-group">
                <label>NOTIFICATION CONTENT</label>
                <textarea 
                  placeholder="Type your message here..." 
                  rows={4}
                  className="full-width-textarea"
                ></textarea>
              </div>
              
              <div className="form-actions-mini">
                <button className="btn-secondary-sm">
                  <ExternalLink size={14} />
                  <span>Attach Link</span>
                </button>
              </div>

              <div className="broadcast-options">
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Push Mobile</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span>Web Alert</span>
                </label>
              </div>

              <button className="btn-dispatch">
                <Send size={16} />
                <span>Dispatch Broadcast</span>
              </button>
            </div>
          </div>

          {/* Quick Resources Card */}
          <div className="card resources-card animate-slide-up delay-5">
            <div className="card-header-simple">
              <h3 className="section-title">Quick Resources</h3>
            </div>
            <div className="resources-list">
              <a href="#" className="resource-item">
                <span>Hardware Sync Protocol</span>
                <ExternalLink size={14} />
              </a>
              <a href="#" className="resource-item">
                <span>Financial Dispute API</span>
                <ExternalLink size={14} />
              </a>
              <a href="#" className="resource-item">
                <span>User Privacy Compliance</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Minimal helper component for the icon
function Dumbbell({ size }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6.5 6.5h11" />
      <path d="M6.5 17.5h11" />
      <path d="m3 21 18-18" />
      <path d="m3 3 18 18" />
    </svg>
  );
}
