import React from "react";
import Menu from "./Menu";
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import './Order.css';
import { Commerce } from '@chec/commerce.js';
import $ from "jquery";
import { Spaces } from 'spaces/spaces';
import ProductsList from "./components/ProductsList";
function Order() {
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <ProductsList/>
            <Footer></Footer>
        </>
    )
}
export default Order;