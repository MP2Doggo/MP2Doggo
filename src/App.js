import logo from './logo.svg';
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import { handleScroll } from './App';
import Menu from './Menu';
import { BrowserRouter, Route, Routes, Router} from 'react-router-dom';
import Order from './Order'
import { Dropdown, Navbar } from 'reactstrap';
import Commerce from '@chec/commerce.js';
import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import ProductsList from './components/ProductsList';
import Brand from './Categories';
import MainComponent from './LandingPage';

/*store.setState("initialCartCount", 0);      Get Cart Contents */
const App1 = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
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
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
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
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ProductsList products={products} onAddToCart={handleAddToCart} />
                </>
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
      <MainComponent />
      <Footer />

    </>
  );
};

export default Doggo;
