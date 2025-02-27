import React from "react";
import "./App.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>OUR JOURNEY, YOUR EXPERIENCE</h1>
          <p>
            Every creation at Shri Gajanan Arts LLP tells a story. Dive into our
            history to see how we transformed from a humble start to a revered
            name in divine artistry.
          </p>
          <button className="cta-button">Discover Our Journey</button>
        </div>
      </header>

      <section className="spirituality-section">
        <h2>CELEBRATE SPIRITUALITY</h2>
        <p>Where Craftsmanship Meets Devotion</p>
        <input
          type="text"
          className="search-bar"
          placeholder="Looking for a specific idol? Type here..."
        />
        <div className="idols-list">
          <div className="idol">Shree Ganesh</div>
          <div className="idol">Radha Krishna</div>
          <div className="idol">Shiva and Parvati with Ganesh</div>
          <div className="idol">Radha Krishna</div>
          <div className="idol">Ram Laxman and Sita with Hanuman</div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>BLESSED WORDS FROM OUR CUSTOMERS</h2>
        <div className="reviews">
          <div className="review">
            <p>
              "Ordered a Shiv-Parvati idol for our family pooja. The delivery was
              prompt, and the packaging was excellent. Would appreciate more
              filtering options on the website."
            </p>
            <p>- Rajesh Iyer</p>
          </div>
          <div className="review">
            <p>
              "Amazing quality and craftsmanship. Truly divine experience!"
            </p>
            <p>- Meera Desai</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>NEVER MISS A DIVINE UPDATE</h2>
        <p>
          Subscribe for updates on our handcrafted idols, special collections,
          and more.
        </p>
        <div className="newsletter-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Shree Gajanan Arts LLP, India. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
