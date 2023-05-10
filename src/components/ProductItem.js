import React, { useState } from "react";
import PropTypes from 'prop-types';
import { stripHtml } from 'string-strip-html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import commerce from '../lib/commerce';

const ProductItem = ({ product }) => {
  const [count, setCount] = useState(0);
  const { result } = stripHtml(product.description);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const response = await commerce.cart.add(productId, quantity);
      setCount(response.cart.total_items);
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  return (
    <div className="product__card">
      <img className="product__image" src={product.image.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">{result}</p>
        <div className="product__details">
          <p className="product__price">{product.price.formatted_with_symbol}</p>
        </div>
        <div className="cart__container">
          <button className="buy-now" onClick={() => handleAddToCart(product.id, 1)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
