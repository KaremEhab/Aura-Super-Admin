import React from 'react';
import { TrendingUp, CreditCard } from 'lucide-react';
import './GMVChart.css';

export function GMVChart({ data }) {
  const maxVal = Math.max(...data.history.map(d => d.value));

  return (
    <div className="card gmv-card">
      <div className="gmv-header">
        <div>
          <p className="card-subtitle">TOTAL GMV (AGGREGATE)</p>
          <h2 className="gmv-total">${data.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
          <p className="gmv-growth">
            <TrendingUp size={16} />
            <span>+{data.growth}% from last month</span>
          </p>
        </div>
        <div className="payment-node">
          <div className="node-icon">
            <CreditCard size={16} />
            <span>PAYMENT NODE</span>
          </div>
          <h4>Fawry Integration</h4>
          <span className="status-operational">STATUS: OPERATIONAL</span>
        </div>
      </div>

      <div className="gmv-bars">
        {data.history.map((item, index) => {
          const heightPercent = (item.value / maxVal) * 100;
          return (
            <div key={index} className="bar-wrapper">
              <div 
                className="bar" 
                style={{ height: `${heightPercent}%` }}
                title={`${item.month}: $${item.value.toLocaleString()}`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
