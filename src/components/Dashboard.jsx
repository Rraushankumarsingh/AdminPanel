// src/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import Chart from "./Charts";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h3 className="h4">Good Morning </h3>
        <p>here the today update </p>
        <div className="stats">
          <div className="stat">
            <div className="stat-header">
              Total Page Views
              <span className="stat-trend up">59.3%</span>
            </div>
            <div className="stat-value">4,42,236</div>
            <div className="stat-footer">
              You made an extra 35,000 this year
            </div>
          </div>
          <div className="stat">
            <div className="stat-header">
              Total Users
              <span className="stat-trend up">70.5%</span>
            </div>
            <div className="stat-value">78,250</div>
            <div className="stat-footer">You made an extra 8,900 this year</div>
          </div>
          <div className="stat">
            <div className="stat-header">
              Total Order
              <span className="stat-trend down">27.4%</span>
            </div>
            <div className="stat-value">18,800</div>
            <div className="stat-footer">You made an extra 1,943 this year</div>
          </div>
          <div className="stat">
            <div className="stat-header">
              Total Sales
              <span className="stat-trend down">27.4%</span>
            </div>
            <div className="stat-value">$35,078</div>
            <div className="stat-footer">
              You made an extra $20,395 this year
            </div>
          </div>
        </div>
      </div>
      <div>
        <Chart />
      </div>
      <div >
        <div >
          <RecentOrders />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
