import React from 'react';
import './RestaurantCard.css';
import { Neuo } from '@/app/font';

const RestaurantCard = ({ restaurant, onSelect, rank, revenue }) => {
  return (
    <div className="restaurant-card">
      {typeof rank === 'number' && (
        <div>#{rank + 1}</div>
      )}
      <div className="card-content">
        <div className="card-header">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.location}</p>
          {typeof revenue === 'number' && (
            <div>Total Revenue of 7 days: ₹{revenue}</div>
          )}
        </div>
        <div className="card-details">
          <button className="view-insights-btn" onClick={onSelect}>View Insights</button>
          <div className="cuisine-info">
            <p>Cuisine:</p>
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
      </div>
      <div 
        className="card-image-placeholder"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')` }}
      >
      </div>
    </div>
  );
};

export default RestaurantCard; 