import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import commerce from "./lib/commerce";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Container, Dropdown, FormText } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CartItem from "./components/Cart/CartItem/CartItem";
import { store, useGlobalState } from 'state-pool';

const NavBar = ({ totalItems }) => {
    const location = useLocation();

    return (
        <>
            <Container position="fixed" color="inherit">
                <Dropdown>
                    <FormText
                        component={Link}
                        to="/"
                        variant="h3"
                        color="#B27701"
                        sx={{
                            flexGrow: 1,
                            alignItems: "center",
                            display: "flex",
                            textDecoration: "none",
                            fontFamily: "Crimson Text",
                            justifyContent: "space-between",
                        }}
                    >
                    </FormText>
                    <div style={{ flexGrow: 1 }} />
                    {location.pathname === "/" && (
                        <div>
                            <Button
                                component={Link}
                                to="/cart"
                                aria-label="Show Cart Items"
                                color="inherit"
                                size="large"
                            >
                                <div badgeContent={totalItems} color="secondary">

                                </div>
                            </Button>
                        </div>
                    )}
                </Dropdown>
            </Container>
        </>
    );
};
const navigation = [
    { name: 'Order', href: '/Order' }
];
function Menu() {
    /* const [count, setCount] = useGlobalState("initialCartCount"); */
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    useEffect(() => {
        fetchCart();
        const interval = setInterval(fetchCart, 5000); // Refresh the cart count every 5 seconds

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
            deleteCart(); // Delete the cart on component unmount
        };
    }, []);

    const fetchCart = async () => {
        try {
            const cart = await commerce.cart.retrieve();
            setCount(cart.total_items);
        } catch (error) {
            console.log("Error fetching cart: ", error);
        }
    };

    const deleteCart = async () => {
        try {
            await commerce.cart.delete();
            setCount(0); // Reset the cart count to 0
        } catch (error) {
            console.log("Error deleting cart: ", error);
        }
    };

    const handleCartIconHover = async () => {
        try {
            const cart = await commerce.cart.retrieve();
            if (cart.line_items.length > 0) {
                const { product_id, quantity } = cart.line_items[0];
                setSelectedProduct(product_id);
                setSelectedQuantity(quantity);
                setModalOpen(true);
            }
        } catch (error) {
            console.log("Error retrieving cart items: ", error);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <nav>
                <section className="flex_content">
                    <a href="/"><img src="https://i.ibb.co/6Ry23nX/DOGGO-2.png" alt="Logo" /></a>
                </section>
                <section className="flex_content">
                    <div className="cart__icon" onMouseEnter={handleCartIconHover} onMouseLeave={closeModal}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="cart__count">{count}</span>
                    </div>
                    <a href="javascript:void(0)" className="ham"> <FontAwesomeIcon icon={faBars} /></a>
                </section>
            </nav>

            {modalOpen && (
                <div className="modal__container">
                    <div className="modal__content">
                        <h2>Selected Product</h2>
                        <p>Product ID: {selectedProduct}</p>
                        <p>Quantity: {selectedQuantity}</p>
                    </div>
                </div>
            )}
        </>
    );
}


<menu id="menu">
    <a href="javascript:void(0)" className="close"> <FontAwesomeIcon icon={faBars} className="white-icon" /></a>
    <section className="flex_content">
        <a href="index.html"><img src="https://i.ibb.co/kmyW81G/DOGGO-3.png" /></a>
    </section>
    <br />
    <ul>
        <li><a href="#" target="_blank"><i className="fa fa-map-o"></i>Moonwalk, Paranaque City</a></li>
        <li><a href="emailto:support@doggo.ph"><i className="fa fa-envelope-o"></i> NixDoggo.ph@gmail.com</a></li>
        <li><a href="tel:1234567890"><i className="fa fa-headphones"></i> 123-456-7890</a></li>
    </ul>
    <br />
    <ul>
        <Button variant="primary">
            <Link to="/">Home</Link>
        </Button>
        <li className="dropdown">
            <DropdownButton className="dropdownButtonStyle" title="Categories">
                <Dropdown.Item><Link to="/brands">Brands</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </li>
        <Button variant="primary">
            <Link to="/order">Order</Link>
        </Button>
        <Button variant="primary">
            <Link to="/order">About Us</Link>
        </Button>
        <Button variant="primary">
            <Link to="/order">Contact Us</Link>
        </Button>
        <li className="fixed_flex"><a href="signup.html" className="btn btn_1 chat_popup">Sign Up</a>
            <a href="" className="btn btn_2 chat_popup">Order now</a> </li>
        <li>
            <Button variant="primary">
                <FontAwesomeIcon className="btn btn_1 chat_popup" icon="fa-solid fa-cart-shopping"></FontAwesomeIcon>
            </Button>
        </li>
    </ul>

</menu>

export default Menu;