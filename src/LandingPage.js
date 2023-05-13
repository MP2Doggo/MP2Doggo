import React from 'react';
import "./Header.css";

const MainComponent = () => {
  return (
    <main>
      {/*division_1*/}
      <div className="divisions division_1 flex">
        <section className="flex_content">
          <figure className='slide_delivery'>
            <img src="https://i.ibb.co/r4z6xk7/Delivery.png" alt="" loading="lazy" />
          </figure>
        </section>
        <section className="flex_content padding_2x">
          <em className="cursive">How to order?</em>
          <h2 className="title big">Get it easy</h2>
          <span className="bar"></span>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <ul className="flex">
            <li className="fixed_flex">
              <figure>
                <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
              </figure>
              <aside>
                <h5>Pick your Fav!</h5>
                <p>Choose your Pet's favourite meal</p>
              </aside>
            </li>
            <li className="fixed_flex">
              <figure>
                <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
              </figure>
              <aside>
                <h5>Delivery time</h5>
                <p>Choose your pickup time</p>
              </aside>
            </li>
            <li className="fixed_flex">
              <figure>
                <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
              </figure>
              <aside>
                <h5>Pay securely</h5>
                <p>Make a secure payment</p>
              </aside>
            </li>
            <li className="fixed_flex">
              <figure>
                <img src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png" alt="" />
              </figure>
              <aside>
                <h5>Enjoy our meal</h5>
                <p>Have a delicious &amp; fresh meal for your Dog.</p>
              </aside>
            </li>
          </ul>
        </section>
      </div>
      {/*-Placeholder Youtube Video*/}
      <div style={{ textAlign: 'center' }}>
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/SF0-xhaLXNI?autoplay=1&volume=40"
          style={{ border: '2px solid black', margin: '20px auto' }}
        ></iframe>
        <iframe width="420" height="345" src="https://www.youtube.com/embed/VI8eRC4wPpk?autoplay=1&mute=1" style={{ border: '2px solid black', margin: '20px auto' }}></iframe>
      </div>
    </main >
  );
};

export default MainComponent;