import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import './Header.css';

function AboutUsPage() {
  return (
    <div>
      <Menu />
      <Header title="About Us" />
      <div className="about-us-content">
        <h2>Welcome to Doggo</h2>
        <p>
          At our Dog Food Store, we are passionate about providing high-quality and nutritious food for your beloved furry friends. We understand that your dog's health and well-being are important to you, which is why we strive to offer the best dog food options on the market.
        </p>
        <p>
          Our team of experts carefully selects each product we carry, ensuring that they meet our strict standards for quality, ingredients, and nutritional value. We believe that every dog deserves a wholesome and balanced diet, which is why we offer a wide range of dog food options to cater to different breeds, sizes, and dietary needs.
        </p>
        <p>
          We work closely with trusted suppliers and brands who share our commitment to providing premium dog food. Whether you're looking for dry kibble, wet food, raw food, or specialized diets, you can find it all at our store. We also offer a variety of treats and supplements to complement your dog's diet and promote their overall health.
        </p>
        <p>
          Customer satisfaction is our top priority, and we strive to provide exceptional service at every step. Our knowledgeable staff is always ready to assist you in finding the perfect dog food for your furry companion. We value your trust and loyalty, and we continuously seek to improve and expand our product offerings to meet the evolving needs of dog owners.
        </p>
        <p>
          Thank you for choosing our Dog Food Store as your trusted source for premium dog food. We look forward to serving you and your furry friend with the highest level of care and dedication.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
