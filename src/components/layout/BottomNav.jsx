import React from 'react';
import { LayoutDashboard, Dumbbell, User, DollarSign } from 'lucide-react';
import './BottomNav.css';

const bottomNavItems = [
  { icon: LayoutDashboard, label: 'DASHBOARD', active: true },
  { icon: Dumbbell, label: 'GYMS' },
  { icon: User, label: 'TRAINERS' },
  { icon: DollarSign, label: 'FINANCE' },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav-list">
        {bottomNavItems.map((item, index) => (
          <li key={index} className={`bottom-nav-item ${item.active ? 'active' : ''}`}>
            <a href="#">
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
