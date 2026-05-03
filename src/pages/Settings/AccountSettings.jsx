import React from 'react';
import { Save, Shield, ShieldCheck, CreditCard, Database, Copy, Cloud, Settings, Trash2, History } from 'lucide-react';
import auraLogo from '../../assets/Aura.svg';
import './AccountSettings.css';

export function AccountSettings({ branding, onBrandingChange }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onBrandingChange({ logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-header-text">
        <h1 className="page-title">Account Settings</h1>
        <p className="page-subtitle">Manage your super-admin profile, security credentials, and platform integrations.</p>
      </div>

      <div className="settings-grid">
        {/* Account Information & Security Row */}
        <div className="settings-row top-row animate-slide-up">
          <div className="card account-info-card">
            {/* ... */}
            <div className="card-header-with-action">
              <h3 className="section-title">Account Information</h3>
              <button className="btn-save">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue="Kareem Ehab" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="karemehab24@gmail.com" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <div className="role-badge">AURA OWNER</div>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" defaultValue="+20 111 219 0563" />
              </div>
            </div>
          </div>

          <div className="card security-card">
            <div className="card-header-simple">
              <Shield className="text-primary" size={20} />
              <h3 className="section-title">Security</h3>
            </div>
            <p className="section-desc">Two-Factor Authentication (2FA) adds an extra layer of security to your admin account.</p>
            
            <div className="status-box success">
              <div className="status-label">
                <span>2FA Status</span>
                <span className="status-tag active">ACTIVE</span>
              </div>
              <ShieldCheck size={20} className="text-primary" />
            </div>

            <button className="btn-outline w-full">Configure 2FA</button>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="integration-grid animate-slide-up delay-1">
          <div className="card integration-card">
            <div className="integration-header">
              <div className="integration-icon-label">
                <CreditCard size={18} className="text-primary" />
                <span>Fawry Payment</span>
              </div>
            </div>
            <div className="integration-body">
              <div className="api-key-box">
                <code>FAW_90210_PRD</code>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('FAW_90210_PRD')}
                  title="Copy Key"
                >
                  <Copy size={14} />
                </button>
              </div>
              <div className="connection-status">
                <span className="status-dot online"></span>
                <span>Live Connection</span>
              </div>
            </div>
          </div>

          <div className="card integration-card">
            <div className="integration-header">
              <div className="integration-icon-label">
                <Database size={18} className="text-primary" />
                <span>Supabase</span>
              </div>
            </div>
            <div className="integration-body">
              <div className="api-key-box">
                <code>SUPA_EYJ93021_PRD</code>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('SUPA_EYJ93021_PRD')}
                  title="Copy Key"
                >
                  <Copy size={14} />
                </button>
              </div>
              <div className="connection-status">
                <span className="status-dot online"></span>
                <span>Live Connection</span>
              </div>
            </div>
          </div>

          <div className="card integration-card">
            <div className="integration-header">
              <div className="integration-icon-label">
                <Database size={18} className="text-primary" />
                <span>Firebase</span>
              </div>
            </div>
            <div className="integration-body">
              <div className="api-key-box">
                <code>FIREBASE_KJ45N32_PRD</code>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('FIREBASE_KJ45N32_PRD')}
                  title="Copy Key"
                >
                  <Copy size={14} />
                </button>
              </div>
              <div className="connection-status">
                <span className="status-dot online"></span>
                <span>Syncing</span>
              </div>
            </div>
          </div>

          <div className="card integration-card">
            <div className="integration-header">
              <div className="integration-icon-label">
                <Cloud size={18} className="text-primary" />
                <span>Cloudflare R2</span>
              </div>
            </div>
            <div className="integration-body">
              <div className="api-key-box">
                <code>CF_ZONE_ADMIN_HQ</code>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard('CF_ZONE_ADMIN_HQ')}
                  title="Copy Key"
                >
                  <Copy size={14} />
                </button>
              </div>
              <div className="connection-status">
                <span className="status-dot online"></span>
                <span>Enterprise Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* SaaS Management Row */}
        <div className="settings-row top-row animate-slide-up delay-2">
          <div className="card billing-config-card">
            <h3 className="section-title">Subscription & Billing</h3>
            <p className="section-desc">Manage global pricing tiers and commission rates for Gyms and Personal Trainers.</p>
            <div className="form-grid">
               <div className="form-group">
                 <label>Platform Commission (%)</label>
                 <input type="number" defaultValue="15" />
               </div>
               <div className="form-group">
                 <label>Free Trial Period (Days)</label>
                 <input type="number" defaultValue="14" />
               </div>
            </div>

            <div className="plans-management mt-6">
              <h4 className="sub-section-title">GYM PLANS</h4>
              <div className="plan-edit-list">
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Regular" placeholder="Plan Name" />
                    <input type="text" defaultValue="Up to 400 clients" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="49" />
                    <span>/mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Unlimited" placeholder="Plan Name" />
                    <input type="text" defaultValue="No trainee limit" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="199" />
                    <span>/mo</span>
                  </div>
                </div>
              </div>

              <h4 className="sub-section-title mt-6">PT PLANS</h4>
              <div className="plan-edit-list">
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Free" placeholder="Plan Name" />
                    <input type="text" defaultValue="Up to 3 clients" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="0" />
                    <span>/mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Regular" placeholder="Plan Name" />
                    <input type="text" defaultValue="Full standard features" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="29" />
                    <span>/mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Premium" placeholder="Plan Name" />
                    <input type="text" defaultValue="Priority support & analytics" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="59" />
                    <span>/mo</span>
                  </div>
                </div>
              </div>

              <h4 className="sub-section-title mt-6">TRAINEE PLANS — AURA DIRECT</h4>
              <div className="plan-edit-list">
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Trial" placeholder="Plan Name" />
                    <input type="text" defaultValue="14-day free trial, limited features" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="0" />
                    <span>/14d</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Monthly" placeholder="Plan Name" />
                    <input type="text" defaultValue="Full app access, workout plans & tracking" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="9.99" />
                    <span>/mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="6-Month" placeholder="Plan Name" />
                    <input type="text" defaultValue="All features + gym discovery & PT matching" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="49.99" />
                    <span>/6mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Annual Elite" placeholder="Plan Name" />
                    <input type="text" defaultValue="Priority support, analytics & exclusive content" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="89.99" />
                    <span>/yr</span>
                  </div>
                </div>
              </div>

              <h4 className="sub-section-title mt-6">TRAINEE PLANS — VIA GYM</h4>
              <div className="plan-edit-list">
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Standard Monthly" placeholder="Plan Name" />
                    <input type="text" defaultValue="Gym access, class bookings & basic tracking" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="29.99" />
                    <span>/mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Elite 6-Month" placeholder="Plan Name" />
                    <input type="text" defaultValue="Full gym + PT sessions + nutrition plans" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="149.99" />
                    <span>/6mo</span>
                  </div>
                </div>
                <div className="plan-edit-row">
                  <div className="plan-main-fields">
                    <input type="text" defaultValue="Elite 12-Month" placeholder="Plan Name" />
                    <input type="text" defaultValue="All-inclusive, priority booking & 1-on-1 coaching" placeholder="Description" />
                  </div>
                  <div className="plan-price-field">
                    <span>$</span>
                    <input type="number" defaultValue="249.99" />
                    <span>/yr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card branding-card">
             <h3 className="section-title">Platform Branding</h3>
             <p className="section-desc">Customize the white-label appearance for your clients and their trainees.</p>
             <div className="branding-form">
                <div className="form-group mb-6">
                  <label>Brand Logo</label>
                  <div className="logo-upload-container">
                    <img src={branding.logo || auraLogo} alt="Logo Preview" className="logo-preview-box" />
                    <div className="upload-actions">
                      <input 
                        type="file" 
                        id="logo-upload" 
                        accept="image/*" 
                        onChange={handleLogoChange}
                        hidden 
                      />
                      <label htmlFor="logo-upload" className="btn-upload-label">Change Logo</label>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-6">
                  <label>Primary Brand Color</label>
                  <div className="color-picker-input">
                    <div className="color-preview" style={{ backgroundColor: branding.color }}></div>
                    <input 
                      type="text" 
                      value={branding.color} 
                      onChange={(e) => onBrandingChange({ color: e.target.value })}
                      placeholder="#000000"
                    />
                    <input 
                      type="color" 
                      value={branding.color} 
                      onChange={(e) => onBrandingChange({ color: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Portal System Title</label>
                  <input 
                    type="text" 
                    value={branding.name} 
                    onChange={(e) => onBrandingChange({ name: e.target.value })}
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="settings-row bottom-row animate-slide-up delay-3">
          <div className="card danger-card">
            <h3 className="section-title text-alert">Danger Zone</h3>
            
            <div className="danger-item">
              <div className="danger-info">
                <h4>Flush Audit Logs</h4>
                <p>Permanently delete activity logs older than 1 year. This action cannot be undone.</p>
              </div>
              <button className="btn-danger-outline">Clear Audit Logs</button>
            </div>

            <div className="danger-item">
              <div className="danger-info">
                <h4>Delete Admin Account</h4>
                <p>Request account deletion. Requires confirmation from secondary super-admin.</p>
              </div>
              <button className="btn-danger-text">Initiate Account Deletion</button>
            </div>
          </div>

          <div className="card prefs-card">
            <div className="card-header-simple">
              <h3 className="section-title">Platform Preferences</h3>
            </div>
            
            <div className="prefs-list">
              <div className="pref-item">
                <div className="pref-info">
                  <h4>Maintenance Mode</h4>
                  <p>Set the entire platform to read-only for updates.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>User Access Control</h4>
                  <p>Manage permissions and roles for gym staff and administrators.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>Email Notifications</h4>
                  <p>Receive daily status reports for all gyms.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>Automatic Backups</h4>
                  <p>Back up infrastructure data every 6 hours.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>Audit Logging</h4>
                  <p>Track all administrative actions across the platform.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>2FA Enforcement</h4>
                  <p>Require all super-admins and gym owners to enable 2FA.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>Beta Features</h4>
                  <p>Get early access to experimental dashboard modules.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <h4>IP Security</h4>
                  <p>Restrict logins to whitelisted administrative IPs.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
