import React, { useState } from 'react';
import { Search, Filter, Play, Clock, HardDrive, Zap, AlertCircle, MoreVertical, LayoutGrid, List, Upload, Plus, Eye, User } from 'lucide-react';
import './Library.css';

export function Library() {
  const [viewType, setViewType] = useState('grid');
  const stats = [
    { label: 'ACTIVE STREAMS', value: '1,242', trend: '99.5%', status: 'success' },
    { label: 'STORAGE USED', value: '4.2 TB', trend: 'of 10 TB', status: 'success' },
    { label: 'BANDWIDTH (24H)', value: '864 GB', trend: '+ 12%', status: 'success' },
    { label: 'NETWORK ERRORS', value: '7', trend: 'Actions Required', status: 'alert' }
  ];

  const videos = [
    {
      id: 'GP-4921',
      title: 'Dumbbell Bench Press',
      duration: '00:45',
      tags: ['CHEST', 'STRENGTH'],
      views: '12.4k',
      uploader: 'Coach Sarah',
      gymViews: '8.2k',
      ptViews: '4.2k',
      status: 'LIVE',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop'
    },
    {
      id: 'GP-1029',
      title: 'Conventional Deadlift',
      duration: '01:20',
      tags: ['POSTERIOR', 'COMPOUND'],
      views: '8.9k',
      uploader: 'Gym Master Hany',
      gymViews: '5.1k',
      ptViews: '3.8k',
      status: 'LIVE',
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop'
    },
    {
      id: 'GP-8821',
      title: 'Overhead Press Form',
      tags: ['SHOULDERS', 'NEEDS ATTENTION'],
      status: 'ERROR',
      errorMsg: 'CONNECTION TIMEOUT',
      uploader: 'Kareem Ehab',
      thumbnail: 'https://images.unsplash.com/photo-1541534741688-6078c6bc35e5?w=400&auto=format&fit=crop'
    },
    {
      id: 'GP-3342',
      title: 'Russian Kettlebell Swing',
      duration: '00:30',
      tags: ['GLUTES', 'METCON'],
      status: 'UPLOADING',
      progress: 85,
      uploader: 'Admin System',
      thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="library-page animate-fade-in">
      <div className="library-header">
        <div className="dashboard-header-text" style={{ marginTop: '24px' }}>
        <h1 className="page-title">Aura Library</h1>
        <p className="page-subtitle">Managing 1,248 high-performance exercise assets across the global network.</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <Upload size={18} />
            <span>Bulk Upload</span>
          </button>
          <button className="btn-primary">
            <Plus size={18} />
            <span>New Video</span>
          </button>
        </div>
      </div>

      <div className="library-stats-row">
        {stats.map((stat, i) => (
          <div key={i} className={`card stat-card ${stat.status === 'alert' ? 'attention' : ''} animate-slide-up delay-${i+1}`}>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-main">
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-badge ${stat.status}`}>
                {stat.status === 'success' && <div className="dot" />}
                <span>{stat.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="library-filter-bar card animate-slide-up delay-4">
        <div className="filters-left">
          <div className="filter-item">
            <span>Filter By:</span>
            <select>
              <option>Muscle Group</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>Difficulty</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>Status</option>
            </select>
          </div>
        </div>
        <div className="view-toggles">
          <button 
            className={`toggle-btn ${viewType === 'grid' ? 'active' : ''}`}
            onClick={() => setViewType('grid')}
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            className={`toggle-btn ${viewType === 'list' ? 'active' : ''}`}
            onClick={() => setViewType('list')}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      <div className={`video-grid ${viewType}`}>
        {videos.map((video, index) => (
          <div key={index} className={`video-card animate-slide-up delay-${index + 1}`}>
            <div className="card-status-header">
              <div className="status-group">
                {video.status === 'LIVE' && <span className="status-indicator live"><div className="dot" /> LIVE</span>}
                {video.status === 'ERROR' && <span className="status-indicator error"><AlertCircle size={12} /> ERROR</span>}
                {video.status === 'UPLOADING' && <span className="status-indicator uploading"><Upload size={12} /> UPLOADING</span>}
              </div>
              <span className="asset-id-top">#{video.id}</span>
            </div>

            <div className="thumbnail-wrapper square-thumb">
              <img src={video.thumbnail} alt={video.title} className="thumbnail" />
              {video.duration && <span className="duration">{video.duration}</span>}
              
              {video.status === 'ERROR' && (
                <div className="error-overlay">
                  <AlertCircle size={24} />
                  <span>{video.errorMsg}</span>
                </div>
              )}
            </div>

            <div className="video-info-compact">
              <div className="info-main">
                <h4 className="video-title-sm">{video.title}</h4>
                <div className="uploader-line">
                   <User size={12} />
                   <span>{video.uploader}</span>
                </div>
              </div>

              {video.status === 'UPLOADING' ? (
                <div className="upload-mini">
                  <div className="progress-bar-tiny">
                    <div className="progress-fill" style={{ width: `${video.progress}%` }}></div>
                  </div>
                  <span className="progress-pct">{video.progress}%</span>
                </div>
              ) : (
                <div className="video-stats-row">
                  <div className="view-pill" title={`Gyms: ${video.gymViews} | PTs: ${video.ptViews}`}>
                    <Eye size={12} />
                    <span>{video.views}</span>
                  </div>
                  <div className="tag-group">
                    {video.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="tag-mini">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Repeat some for the grid feel */}
        {[...Array(4)].map((_, i) => (
           <div key={`extra-${i}`} className={`video-card animate-slide-up delay-${i + 1}`}>
              <div className="thumbnail-placeholder"></div>
              <div className="video-info">
                <div className="skeleton title-skeleton"></div>
                <div className="skeleton tag-skeleton"></div>
                <div className="skeleton footer-skeleton"></div>
              </div>
           </div>
        ))}
      </div>

      <div className="library-pagination animate-fade-in delay-5">
        <span>Showing 1 to 8 of 1,248 videos</span>
        <div className="pagination-controls">
          <button className="page-nav">{"<"}</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span>...</span>
          <button className="page-btn">52</button>
          <button className="page-nav">{">"}</button>
        </div>
      </div>
    </div>
  );
}
