// src/Header.jsx
import React from 'react';
import './Header.css';
import { IoIosNotifications } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://tse2.mm.bing.net/th?id=OIP.CEJZdk7LfdT0LWq3KwIjAwHaE7&pid=Api&P=0&h=180" alt="Logo" />
      </div>
      <input type="text" placeholder="Ctrl + K" className="search-box" />
      <div className="header-icons">
        <i className="icon-github"><FaGithubSquare/></i>
        <i className="icon-bell">
          <span className="badge"> <IoIosNotifications/></span>
        </i>
        <div className="profile">
          <img src="https://tse2.mm.bing.net/th?id=OIP.CEJZdk7LfdT0LWq3KwIjAwHaE7&pid=Api&P=0&h=180" alt="John Doe" />
          <span className='h2'>Raushan kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
