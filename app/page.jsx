"use client"
import React, { useEffect, useState } from 'react'
import "./page.css"
import Toggle from './components/Toggle/Toggle'
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import InsightsView from './components/InsightsView/InsightsView';
import { Neuo } from './font';
const Page = () => {
  const [toggle, setToggle] = useState('top3');
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  

  useEffect(() => {
    Promise.all([
      fetch('/api/restaurants' ).then(res => res.json()),
      fetch('/api/orders').then(res => res.json())
    ]).then(([restaurantData, orderData]) => {
      setRestaurants(restaurantData);
      setOrders(orderData);
      setLoading(false);
    });
  }, []);

  const getTopRestaurants = () => {
    const revenueByRestaurant = orders.reduce((acc, order) => {
      acc[order.restaurant_id] = (acc[order.restaurant_id] || 0) + order.order_amount;
      return acc;
    }, {});
    const sorted = Object.entries(revenueByRestaurant)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([id, revenue], idx) => {
        const rest = restaurants.find(r => r.id === parseInt(id));
        return rest ? { ...rest, rank: idx, revenue } : null;
      })
      .filter(Boolean);
    return sorted;
  }

  const displayedRestaurants = toggle === 'top3' ? getTopRestaurants() : restaurants;

  if (selectedRestaurant) {
    const restaurantOrders = orders.filter(o => o.restaurant_id === selectedRestaurant.id);
    return <InsightsView restaurant={selectedRestaurant} orders={restaurantOrders} onBack={() => setSelectedRestaurant(null)} />;
  }

  return (
    <div className= {`dashboard-container ${Neuo.className}`}>
      <header className="dashboard-header">
        <h1>Restaurant insights</h1>
        <p>Track daily orders, revenue, and customer trends to help restaurants make smarter decisions.</p>
      </header>
      <div className="dashboard-toggle-row">
        <Toggle value={toggle} onChange={setToggle} />
      </div>
      <div className="dashboard-card-grid">
        {loading ? (
          <div>Loading...</div> 
        ) : (
          displayedRestaurants.map((r, i) =>
            r && (
              <RestaurantCard
                restaurant={r}
                key={r.id}
                onSelect={() => setSelectedRestaurant(r)}
                rank={toggle === 'top3' ? (typeof r.rank === 'number' ? r.rank : i) : undefined}
                revenue={toggle === 'top3' ? r.revenue : undefined}
              />
            )
          )
        )}
      </div>
    </div>
  )
}

export default Page