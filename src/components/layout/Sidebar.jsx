import React from 'react';
import { Home, Dumbbell, User, Users, DollarSign, Server, BookOpen, HelpCircle, LogOut, X, ChevronRight } from 'lucide-react';
import './Sidebar.css';
import auraLogo from '../../assets/Aura.svg';



export function Sidebar({ isOpen, onClose, currentPage, onNavigate }) {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'DASHBOARD' },
    { id: 'gyms', icon: Dumbbell, label: 'GYMS' },
    { id: 'pt', icon: User, label: 'PERSONAL TRAINER' },
    { id: 'trainees', icon: Users, label: 'TRAINEES' },
    { id: 'financials', icon: DollarSign, label: 'FINANCIALS' },
    { id: 'infra', icon: Server, label: 'INFRASTRUCTURE' },
    { id: 'library', icon: BookOpen, label: 'LIBRARY' },
    { id: 'support', icon: HelpCircle, label: 'SUPPORT' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-brand">
          <img src={auraLogo} alt="Aura Fit Logo" />
          <span className="logo-text" style={{ color: 'var(--primary)' }}>AURA.FIT.</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className={currentPage === item.id ? 'active' : ''}>
              <button 
                className="nav-btn"
                onClick={() => onNavigate(item.id)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <div className="command-palette">
          <p className="palette-title">COMMAND PALETTE</p>
          <p className="palette-desc">Press <kbd>⌘ K</kbd> for new gym check-in or gym creation.</p>
        </div>

        <div 
          className={`user-profile ${currentPage === 'settings' ? 'active-profile' : ''}`}
          onClick={() => onNavigate('settings')}
        >
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop" alt="User" />
          <div className="user-info">
            <h4>KAREEM EHAB</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>Manage profile</a>
          </div>
          <ChevronRight size={16} className="arrow" />
        </div>

        <button className="sign-out">
          <LogOut size={16} />
          <span>SIGN OUT</span>
        </button>
      </div>
    </aside>
  );
}
