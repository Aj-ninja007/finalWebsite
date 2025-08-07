


import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyStore</h1>
          <p>Trendy T-Shirts, Wallets, Shoes, Watches, and Belts</p>
         <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Free Shipping</h3>
          <p>On orders over ₹499</p>
        </div>
        <div className="feature-box">
          <h3>Easy Returns</h3>
          <p>Within 7 days of delivery</p>
        </div>
        <div className="feature-box">
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
