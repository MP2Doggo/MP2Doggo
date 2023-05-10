import React, { useState } from "react";
import PropTypes from 'prop-types';
import { stripHtml } from 'string-strip-html';
import './Modal.css'
const ProductItem = ({ product, onAddToCart }) => {


  const { result } = stripHtml(product.description);

  return (
    <div className="product__card">
      <img className="product__image" src={product.image.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">{result}</p>
        <div className="product__details">
          <p className="product__price">{product.price.formatted_with_symbol}</p>
        </div>
        <div>
          <button className="buy-now" onClick={() => onAddToCart(product.id, 1)}>
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