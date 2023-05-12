import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import "./Header.css"
import Header from './Header';

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <Menu />
      <Header />
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUsPage;
