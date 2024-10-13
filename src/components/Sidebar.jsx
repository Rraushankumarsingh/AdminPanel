import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaTruck,
  FaTags,
  FaUsers,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [hotOfferDropdown, setOfferDropdown] = useState(false);
  const [customerDropdown, setCustomerDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
  };

  const toggleOrderDropdown = () => {
    setOrderDropdown(!orderDropdown);
  };

  const toggleHotOfferDropdown = () => {
    setOfferDropdown(!hotOfferDropdown);
  };

  const toggleCustomerDropdown = () => {
    setCustomerDropdown(!customerDropdown);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
        >
          <FaHome className="icon" />
          Dashboard
        </NavLink>
        <div className="menu-item" onClick={toggleProductsDropdown}>
          <FaBoxOpen className="icon" />
          Products
          {productsDropdown ? (
            <FaChevronDown className="expand-icon" />
          ) : (
            <FaChevronRight className="expand-icon" />
          )}
        </div>
        {productsDropdown && (
          <div className="submenu">
            <NavLink
              to="/AddProduct"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              Add Product
            </NavLink>
            <NavLink
              to="/ProductList"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              Product List
            </NavLink>
            <div className="menu-item" onClick={toggleCategoryDropdown}>
              Category
              {categoryDropdown ? (
                <FaChevronDown className="expand-icon" />
              ) : (
                <FaChevronRight className="expand-icon" />
              )}
            </div>
            {categoryDropdown && (
              <div className="submenu">
                <NavLink
                  to="/AddCategory"
                  className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
                >
                  Add Category
                </NavLink>
                <NavLink
                  to="/CategoryList"
                  className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
                >
                  Category List
                </NavLink>
              </div>
            )}
          </div>
        )}
        <div className="menu-item" onClick={toggleOrderDropdown}>
          <FaTruck className="icon" />
          Order
          {orderDropdown ? (
            <FaChevronDown className="expand-icon" />
          ) : (
            <FaChevronRight className="expand-icon" />
          )}
        </div>
        {orderDropdown && (
          <div className="submenu">
            <NavLink
              to="/NewOrder"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              New Order
            </NavLink>
            <NavLink
              to="/OrderHistory"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              Order History
            </NavLink>
            <NavLink
              to="/TrackOrder"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              Track Order
            </NavLink>
          </div>
        )}
        <div className="menu-item" onClick={toggleHotOfferDropdown}>
          <FaTags className="icon" />
          Hot Offer
          {hotOfferDropdown ? (
            <FaChevronDown className="expand-icon" />
          ) : (
            <FaChevronRight className="expand-icon" />
          )}
        </div>
        {hotOfferDropdown && (
          <div className="submenu">
            <NavLink
              to="/InsertOffer"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              Insert Offer
            </NavLink>
            <NavLink
              to="/ViewOffer"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              View Offer
            </NavLink>
          </div>
        )}
        <div className="menu-item" onClick={toggleCustomerDropdown}>
          <FaUsers className="icon" />
          Customer
          {customerDropdown ? (
            <FaChevronDown className="expand-icon" />
          ) : (
            <FaChevronRight className="expand-icon" />
          )}
        </div>
        {customerDropdown && (
          <div className="submenu">
            <NavLink
              to="/User"
              className={({ isActive }) => (isActive ? "menu-subitem active" : "menu-subitem")}
            >
              User
            </NavLink>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Sidebar;
