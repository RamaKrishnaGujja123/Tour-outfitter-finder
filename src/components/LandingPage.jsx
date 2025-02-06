import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Import your CSS for landing page styles

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Tour Outfitter Finder</h1>
        <h2>Explore Your Next Adventure with Trusted Outfitters</h2>
        <p>Find, Register, and Join Outdoor Adventures Effortlessly!</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/find-outfitter')}>Find an Outfitter</button>
          <button onClick={() => navigate('/register-outfitter')}>Register as an Outfitter</button>
          <button onClick={() => navigate('/booking')}>Book a Tour</button>
        </div>
      </header>

      {/* Additional Navigation Links */}
      <nav className="additional-navigation">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
        <button onClick={() => navigate('/outfitter-dashboard')}>Outfitter Dashboard</button>
      </nav>

      {/* About Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>We connect outdoor enthusiasts with reliable outfitters for activities like hiking, camping, gear rentals, and more!</p>
        <p>Search, explore, and book your next adventure with ease.</p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Wide Range of Outfitters</h3>
          <p>Choose from a variety of outfitters offering gear rentals, guided tours, and outdoor experiences.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Registration</h3>
          <p>Register your outfitter business to get listed and grow your customer base effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>Customer Support</h3>
          <p>Our support team is here to assist you every step of the way, ensuring a seamless experience.</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-card">
          <h3>Mountain Hiking Expedition</h3>
          <p>Join us for an exciting mountain hiking expedition on June 15th...</p>
          <a href="/events/mountain-hiking">Learn more</a>
        </div>
        <div className="event-card">
          <h3>Kayaking Adventure</h3>
          <p>Experience the thrill of kayaking on July 22nd...</p>
          <a href="/events/kayaking-adventure">Learn more</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I register as an outfitter?</h3>
          <p>You can register as an outfitter by clicking the "Register as an Outfitter" button and filling out the registration form.</p>
        </div>
        <div className="faq-item">
          <h3>How do I find an outfitter near me?</h3>
          <p>Use the "Find an Outfitter" feature and enter your location to see outfitters near you.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section">
        <h2>Popular Outdoor Spots</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345080687!2d144.95373631531684!3d-37.81627974264064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fd5dc5230e0d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633671108913!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Popular Outdoor Spots"
        ></iframe>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Recent Blog Posts</h2>
        <div className="blog-card">
          <h3>Top 10 Hiking Trails in the US</h3>
          <p>Discover the most scenic hiking trails across the United States...</p>
          <a href="https://mountainhouse.com/blogs/backpacking-hiking/10-best-hiking-trails-u-s">Read more</a>
        </div>
        <div className="blog-card">
          <h3>Essential Camping Gear Checklist</h3>
          <p>Don't forget these essential items on your next camping trip...</p>
          <a href="https://outdooralways.com/camping-gear-checklist-2024/">Read more</a>
        </div>
        <div className="blog-card">
          <h3>How to Prepare for a Kayaking Adventure</h3>
          <p>Get ready for an unforgettable kayaking experience with our tips...</p>
          <a href="https://whitewatermag.com/how-to-prepare-for-your-next-kayaking-adventure/">Read more</a>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter for the latest updates and offers:</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>Connect with us on social media:</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;