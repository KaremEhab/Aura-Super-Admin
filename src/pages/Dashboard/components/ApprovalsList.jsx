import React from 'react';
import './ApprovalsList.css';

export function ApprovalsList({ approvals }) {
  return (
    <div className="card approvals-card">
      <div className="approvals-header">
        <h3 className="card-title">Approvals</h3>
        <span className="requests-badge">32 Requests &gt;</span>
      </div>

      <div className="approvals-list">
        {approvals.map(approval => (
          <div key={approval.id} className="approval-item">
            <div className="approval-info">
              <img src={approval.image} alt={approval.name} className="approval-img" />
              <div>
                <h4>{approval.name}</h4>
                <p>{approval.tier}</p>
              </div>
            </div>
            <div className="approval-actions">
              <button className="btn-reject">Reject</button>
              <button className="btn-approve">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
