import React from 'react';
import { Home, Dumbbell, User, Users, DollarSign, Server, BookOpen, HelpCircle, LogOut, X, ChevronRight } from 'lucide-react';
import './Sidebar.css';
import auraLogo from '../../assets/Aura.svg';

const navItems = [
  { icon: Home, label: 'DASHBOARD', active: true },
  { icon: Dumbbell, label: 'GYMS' },
  { icon: User, label: 'PERSONAL TRAINER' },
  { icon: Users, label: 'TRAINEES' },
  { icon: DollarSign, label: 'FINANCIALS' },
  { icon: Server, label: 'INFRASTRUCTURE' },
  { icon: BookOpen, label: 'LIBRARY' },
  { icon: HelpCircle, label: 'SUPPORT' },
];

export function Sidebar({ isOpen, onClose }) {
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
          {navItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <a href="#">
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <div className="command-palette">
          <p className="palette-title">COMMAND PALETTE</p>
          <p className="palette-desc">Press <kbd>⌘ K</kbd> for new gym check-in or gym creation.</p>
        </div>

        <div className="user-profile">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop" alt="User" />
          <div className="user-info">
            <h4>KAREEM EHAB</h4>
            <a href="#">Manage profile</a>
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
