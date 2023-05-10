import React from "react";
import Menu from "./Menu";
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import './Order.css';
import { Commerce } from '@chec/commerce.js';
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar/NavBar";
function Order() {
    return (
        <>
            <NavBar />
            <Menu></Menu>
            <Header></Header>
            <ProductsList />
            <Footer></Footer>
        </>
    )
}
export default Order;