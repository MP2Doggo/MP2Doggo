import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import CartView from './CartModal';
import './CartModal.css';
import commerce from './lib/commerce';

const navigation = [{ name: 'Order', href: '/Order' }];

function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isMobileSearch, setIsMobileSearch] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchBarRef = useRef(null);

    const handleSearchInputChange = async (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        if (searchTerm.trim() !== '') {
            const { data } = await commerce.products.list({ query: searchTerm });
            setSearchResults(data);
        } else {
            setSearchResults([]);
        }
    };

    const handleAddToCart = async (productId) => {
        const item = await commerce.cart.add(productId, 1);
        // Handle the cart update or redirect as needed
    };

    const toggleMobileSearch = () => {
        setIsMobileSearch(!isMobileSearch);
        setIsSearchOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav>
                <section className="flex_content">
                    <a href="/">
                        <img src="https://i.ibb.co/6Ry23nX/DOGGO-2.png" alt="Logo" />
                    </a>
                </section>
                <section className="flexx_content">
                    <div className="cart__container">
                        <CartView />
                    </div>
                    <a href="javascript:void(0)" className="ham">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </section>
            </nav>
            <menu id="menu">
                <a href="javascript:void(0)" className="close">
                    <FontAwesomeIcon icon={faBars} className="white-icon" />
                </a>
                <section className="flex_content">
                    <a href="index.html">
                        <img src="https://i.ibb.co/kmyW81G/DOGGO-3.png" />
                    </a>
                </section>
                <br />
                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa fa-map-o"></i>Moonwalk, Paranaque City
                        </a>
                    </li>
                    <li>
                        <a href="emailto:support@doggo.ph">
                            <i className="fa fa-envelope-o"></i> NixDoggo.ph@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:1234567890">
                            <i className="fa fa-headphones"></i> 123-456-7890
                        </a>
                    </li>
                </ul>
                <br />
                <div className={`search-bar${isMobileSearch ? ' mobile-search' : ''}` } ref={searchBarRef}>
                    <input
                        type="text"
                        className={`search-input${isMobileSearch ? ' hide' : ''}`}
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleMobileSearch} />
                    {searchResults.length > 0 && isSearchOpen && (
                        <ul className="search-results">
                            {searchResults.map((product) => (
                                <li key={product.id}>
                                    <span>{product.name}</span>
                                    <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <ul>
                    <Button variant="primary">
                        <Link to="/">Home</Link>
                    </Button>
                    <li className="dropdown">
                        <DropdownButton className="dropdownButtonStyle" title="Categories">
                            <Dropdown.Item>
                                <Link to="/brands">Brands</Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <Button variant="primary">
                        <Link to="/order">Order</Link>
                    </Button>
                    <Button variant="primary">
                        <Link to="/aboutuspage">About Us</Link>
                    </Button>
                    <Button variant="primary">
                        <Link to="/contactuspage">Contact Us</Link>
                    </Button>
                    <Button variant="primary">
                        <Link to="/termsandconditionpage">Terms &amp; conditions</Link>
                    </Button>
                    <li className="fixed_flex">
                        <a href="signup.html" className="btn btn_1 chat_popup">
                            Sign Up
                        </a>{' '}
                        <a href="" className="btn btn_2 chat_popup">
                            Order now
                        </a>{' '}
                    </li>
                </ul>
            </menu>
        </>
    );
}

export default Menu;
