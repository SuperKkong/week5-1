import React from 'react';
import { NavLink } from 'react-router';
import { useCart } from '../CartContext';

const Header = () => {
    const { cartItems } = useCart();
  
    return (
      <header className="p-3 shadow-sm bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <NavLink to="/" className="fs-4 fw-bold text-primary text-decoration-none">
            ShopEase
          </NavLink>
  
          {/* Search Bar */}
          <form className="flex-grow-1 mx-3" role="search">
            <input 
              type="search" 
              className="form-control" 
              placeholder="Search for products..." 
              aria-label="Search" 
            />
          </form>
  
          {/* Navigation */}
          <nav className="d-flex gap-3">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`} to="/women">Women</NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`} to="/men">Men</NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`} to="/kids">Kids</NavLink>
          </nav>
  
    
          <NavLink 
            className={({ isActive }) => 
              `nav-link px-2 link-body-emphasis position-relative ${isActive ? 'active' : ''}`
            } 
            to='/cart'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>
        </div>
    </header>
  );
}

export default Header;      