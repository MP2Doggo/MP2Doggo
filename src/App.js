import logo from './logo.svg';
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import { handleScroll } from './App';
import Menu from './Menu';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Order from './Order'
import { Dropdown, Navbar } from 'reactstrap';
import Commerce from '@chec/commerce.js';
import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import ProductsList from './components/ProductsList';
import Brand from './Brands';
import Cart from './components/Cart/Cart';
const App1 = () => {
  const [products, setProducts] = useState([]);

  // Because React rendering can be triggered for many different reasons, 
  // it is best practice to wrap our commerce object method calls into a 
  // useEffect() hook. This hook acts as the replacment to componentWillMount() 
  // function when using class components. By leaving the second argument array 
  // empty, this method will run once before the initial render.
  useEffect(() => {
    fetchProducts();
    fetchCart();

  }, []);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    commerce.products.list().then(result => {
      setProduct(result.data.map(product => product));
    });
  }, []);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {
      quantity: quantity,
    });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  /*const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    console.log(newOrder);
    try {
      setErrorMessage("");
      setOrder({});
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  */
  console.log('Commerce Product: ', ProductsList);
  const [cart, setCart] = useState()
  useEffect(() => {
    commerce.cart.retrieve()
      .then(res => {
        setCart(res)
      })
  }, [])
  return (
    <div className="productlist">
      <ProductsList
        products={products}
        onAddToCart={handleAddToCart}
      />
      
      <Router>
        <div className="App">
          <NavBar totalItems={cart.total_items} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeaturedBrands />{" "}
                  <Products products={products} onAddToCart={handleAddToCart} />
                </>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                />
              }
            />
          </Routes>
        </div>
    </Router>
    </div>

  );
};

function App() {
  return (
    < Navbar >
      <Routes>
        <Route path='../order' element={<Order />} />
        <Route path='../brands' element={<Brand />} />
      </Routes>
    </Navbar>
  );
}

const Doggo = () => {
  return (
    <>

      <Menu />
      <Header />
      <main>
        {/*division_1*/}
        <div className="divisions division_1 flex">
          <section className="flex_content">
            <figure>
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
          <iframe width="420" height="345" src="https://www.youtube.com/embed/SF0-xhaLXNI?autoplay=1&mute=1" style={{ border: '2px solid black', margin: '20px auto' }}></iframe>
          <iframe width="420" height="345" src="https://www.youtube.com/embed/VI8eRC4wPpk?autoplay=1&mute=1" style={{ border: '2px solid black', margin: '20px auto' }}></iframe>
        </div>
      </main>
      <Footer />

    </>
  );
};

export default Doggo;
