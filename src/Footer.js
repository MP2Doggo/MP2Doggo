import React from 'react';
import './Header.css';
import Header from './App';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="divisions division_3">
        <article className="flex">
          <section className="flex_content padding_2x">
            <figure><img src="https://i.ibb.co/Fkv8JNW/footer-img.png" alt="" loading="lazy" /></figure>
          </section>
          <section className="flex_content padding_2x">
            <h3 className="title medium">Order <b>Now!</b></h3>
            <p>Available on Desktop and Mobile devices</p>
            <aside className="fixed_flex">
              <a href="#" className="fixed_flex">
                <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" width="50" height="50" />
                <strong>
                  <h5>Order Now</h5>
                  <h3>Click to Order</h3>
                </strong>
              </a>
            </aside>
          </section>
        </article>
      </div>

      <footer className="padding_3x">
        <section className="flex padding_1x">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </section>
        <section className="flex">
          <Link to="/">Home</Link>
          <Link to="/aboutuspage">About Us</Link>
          <Link to="/order">Order Now</Link>
          <Link to="/contactuspage">Contact Us</Link>
          <Link to="/termsandconditionpage">Terms &amp; conditions</Link>
        </section>
        <section className="flex">
          <p>© {new Date().getFullYear()} || All rights reserved || Nicole Magallanes</p>
        </section>
      </footer>

      <div className="overlay"></div>

      <section className="social_icons">
        <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
        <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
        <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
      </section>

      <a href="#" className="msg fixed_flex" title="msg use">
        <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" width="40" height="40" />
        <strong>
          <h6>Contact Us</h6>
          <h3>Need Assistance?</h3>
        </strong>
      </a>

      <script type="text/javascript" src="assets/js/main.js"></script>
    </>
  );
}

export default Footer;