import React from 'react';
import './InsightsView.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Neuo } from '@/app/font';

const InsightsView = ({ restaurant, orders, onBack }) => {
  const processData = () => {
    const dailyData = {};
    orders.forEach(order => {
      const date = new Date(order.order_time).toLocaleDateString();
      if (!dailyData[date]) {
        dailyData[date] = { date, orders: 0, revenue: 0 };
      }
      dailyData[date].orders += 1;
      dailyData[date].revenue += order.order_amount;
    });
    return Object.values(dailyData);
  };

  const getAverageOrderValue = () => {
    if (orders.length === 0) return 0;
    const totalRevenue = orders.reduce((sum, order) => sum + order.order_amount, 0);
    return (totalRevenue / orders.length).toFixed(2);
  };

  const getPeakOrderHour = () => {
    if (orders.length === 0) return "N/A";
    const hours = orders.map(order => new Date(order.order_time).getHours());
    const hourCounts = hours.reduce((acc, hour) => {
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});
    const peakHour = Object.keys(hourCounts).reduce((a, b) => hourCounts[a] > hourCounts[b] ? a : b);
    return `${peakHour}:00 - ${parseInt(peakHour) + 1}:00`;
  };

  const chartData = processData();
  const averageOrderValue = getAverageOrderValue();
  const peakOrderHour = getPeakOrderHour();

  return (
    <div style={{position: 'fixed', inset: 0, zIndex: 998}} onClick={onBack}>
      <div className={`insights-modal ${Neuo.className}`} onClick={e => e.stopPropagation()}>
        <button className="back-btn" onClick={onBack}>✕</button>
        <header className="insights-header">
          <h1>{restaurant.name}</h1>
          <p>7-Day Performance Summary</p>
        </header>
        <div className="insights-grid">
          <div className="stat-card aov">
            <h2>Average Order Value</h2>
            <p className="stat-value">₹{averageOrderValue}</p>
          </div>
          <div className="stat-card peak">
            <h2>Peak Order Hour</h2>
            <p className="stat-value">{peakOrderHour}</p>
          </div>
          <div className="chart-card orders">
            <h2>Daily Orders</h2>
            <ResponsiveContainer width="90%" height={150}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="1E1E1E" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card revenue">
            <h2>Daily Revenue</h2>
            <ResponsiveContainer width="90%" height={150}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="1E1E1E" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsView; 