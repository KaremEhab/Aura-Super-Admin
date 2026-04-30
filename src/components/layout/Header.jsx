import React, { useState, useEffect } from 'react';
import { Search, RefreshCcw, Moon, Sun, Bell, Plus } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search systems..." />
      </div>

      <div className="header-actions">
        <button className="icon-btn" title="Refresh">
          <RefreshCcw size={18} />
        </button>
        <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn relative" title="Notifications">
          <Bell size={18} />
          <span className="notification-dot">1</span>
        </button>
        
        <button className="btn-primary">
          <Plus size={18} />
          <span>Add New Gym</span>
        </button>
      </div>
    </header>
  );
}
