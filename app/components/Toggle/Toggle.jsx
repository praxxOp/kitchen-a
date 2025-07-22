import React from 'react';
import './Toggle.css';
import { Neuo } from '@/app/font';

const Toggle = ({ value, onChange }) => {
  return (
    <div className={`toggle-pill ${value === 'list' ? 'show-list' : ''}`}>
      <div className="toggle-glider"></div>
      <button
        className={value === 'top3' ? 'toggle-btn active' : 'toggle-btn'}
        onClick={() => onChange('top3')}
      >
        <span className={Neuo.className}>Top 3 Restaurants</span>
      </button>
      <button
        className={value === 'list' ? 'toggle-btn active' : 'toggle-btn'}
        onClick={() => onChange('list')}
      >
        <span className={Neuo.className}>List of Restaurants</span>
      </button>
    </div>
  );
};

export default Toggle;