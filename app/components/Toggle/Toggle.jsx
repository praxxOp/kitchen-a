import React from 'react';
import './Toggle.css';

const Toggle = ({ value, onChange }) => {
  return (
    <div className={`toggle-pill ${value === 'list' ? 'show-list' : ''}`}>
      <div className="toggle-glider"></div>
      <button
        className={value === 'top3' ? 'toggle-btn active' : 'toggle-btn'}
        onClick={() => onChange('top3')}
      >
        Top 3 restaurants
      </button>
      <button
        className={value === 'list' ? 'toggle-btn active' : 'toggle-btn'}
        onClick={() => onChange('list')}
      >
        List of restaurants
      </button>
    </div>
  );
};

export default Toggle;