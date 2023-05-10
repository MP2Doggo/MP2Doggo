import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Commerce from '@chec/commerce.js';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart, onAddToCart ] = useState(null);

  useEffect(() => {
    const commerce = new Commerce('pk_51720ae47ded79d12b2ae163d6415b6ad1f2b40b8a004');

    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    };

    const fetchCart = async () => {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    };

    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await Commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  return (
    <>
      <h2>Products</h2>
      <div className="products" id="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
