import React, { useState } from "react";
import Menu from "./Menu";
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import './Order.css';
import Commerce from '@chec/commerce.js';
import ProductsList from "./components/ProductsList";
import handleAddToCart from "./components/ProductsList";
function Order() {

    const [cart, setCart] = useState([]);
    const commerce = new Commerce('pk_51720ae47ded79d12b2ae163d6415b6ad1f2b40b8a004');
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    };
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <ProductsList handleAddToCart={handleAddToCart} />
            <Footer></Footer>
        </>
    );
}


export default Order;