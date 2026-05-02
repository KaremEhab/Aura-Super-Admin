import React from 'react';
import { Menu, Search, RefreshCcw, Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './BottomNav.css';

export function BottomNav({ onMenuClick }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        <button className="icon-btn menu-btn-mobile" onClick={onMenuClick}>
          <Menu size={20} />
        </button>

        <div className="search-bar-mobile">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="bottom-nav-actions">
          <button className="icon-btn">
            <RefreshCcw size={16} />
          </button>
          <button className="icon-btn" onClick={toggleTheme}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="icon-btn relative">
            <Bell size={16} />
            <span className="notification-dot">1</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
