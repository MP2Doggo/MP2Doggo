import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Container, Dropdown, FormText } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
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
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        Vintager
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
    return (
        <>
            <nav>
                <section className="flex_content">
                    <a href="/"><img src="https://i.ibb.co/6Ry23nX/DOGGO-2.png" alt="Logo" /></a>
                </section>
                <section className="flex_content">
                    <a href="javascript:void(0)" className="ham"> <FontAwesomeIcon icon={faBars} /></a>
                </section>
            </nav>
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

        </>
    )
};

export default Menu;