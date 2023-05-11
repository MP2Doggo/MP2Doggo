import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import commerce from "./lib/commerce";
import Modal from 'react-modal'; // Import the React Modal component
import CheckoutForm from "./components/CheckoutForm";
import "./CartModal.css";

Modal.setAppElement('#root'); // Set the app element for accessibility

function CartView() {
    const [cart, setCart] = useState(null);
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    useEffect(() => {
        fetchCart();
        const interval = setInterval(fetchCart, 5000);

        return () => {
            clearInterval(interval);
            deleteCart();
        };
    }, []);

    const fetchCart = async () => {
        try {
            const cart = await commerce.cart.retrieve();
            const formattedCartItems = cart.line_items.map((item) => {
                return {
                    ...item,
                    price: item.price.raw,
                };
            });
            setCount(cart.total_items);
            setSelectedProducts(formattedCartItems);
        } catch (error) {
            console.log("Error fetching cart: ", error);
        }
    };

    const deleteCart = async () => {
        try {
            await commerce.cart.delete();
            setCount(0);
            setSelectedProducts([]);
        } catch (error) {
            console.log("Error deleting cart: ", error);
        }
    };

    const handleCartIconClick = async () => {
        try {
            const cart = await commerce.cart.retrieve();
            if (cart.line_items.length > 0) {
                const formattedCartItems = cart.line_items.map((item) => {
                    return {
                        ...item,
                        price: item.price.raw,
                    };
                });
                setSelectedProducts(formattedCartItems);
                setModalOpen(true);
            }
        } catch (error) {
            console.log("Error retrieving cart items: ", error);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const calculateTotal = () => {
        let total = 0;
        selectedProducts.forEach((product) => {
            total += product.price * product.quantity;
        });
        return formatPrice(total);
    };

    const formatPrice = (price) => {
        return price.toFixed(2);
    };

    const handleAddToCart = async (formData) => {
        if (!isFormSubmitted) {
            setIsFormSubmitted(true);
        } else {
            try {
                // Generate a checkout token
                const { id } = await commerce.checkout.generateTokenFrom("cart", commerce.cart.id());

                // Redirect the user to the checkout page
                const checkoutUrl = order.hosted_checkout_url;
                window.location.href = checkoutUrl;
                // Create an order using Commerce.js API
                const order = await commerce.checkout.capture(cart.id, formData);
                // Capture the payment for the order
                const { id: paymentId } = await commerce.checkout.capturePayment(
                    order.id,
                    formData
                );
                console.log("Order created:", order);
                console.log("Payment captured:", paymentId);
            } catch (error) {
                console.log("Error capturing order or redirecting to checkout:", error);
            }
        }
    };

    const handleRemoveFromCart = async (product) => {
        try {
            await commerce.cart.remove(product.product_id);
            setCount(count - product.quantity);
            console.log("Item removed from cart:", product);
        } catch (error) {
            console.log("Error removing item from cart:", error);
        }
    };

    const handleIncreaseQuantity = (product) => {
        const updatedProducts = selectedProducts.map((p) => {
            if (p.product_id === product.product_id) {
                return {
                    ...p,
                    quantity: p.quantity + 1,
                };
            }
            return p;
        });
        setSelectedProducts(updatedProducts);
    };

    const handleDecreaseQuantity = (product) => {
        const updatedProducts = selectedProducts.map((p) => {
            if (p.product_id === product.product_id && p.quantity > 1) {
                return {
                    ...p,
                    quantity: p.quantity - 1,
                };
            }
            return p;
        });
        setSelectedProducts(updatedProducts);
    };
    
    return (
        <>
            <div className="cart__container">
                <div className="cart__icon" onClick={handleCartIconClick}>
                    <FontAwesomeIcon icon={faShoppingCart} className="big-white-icon" />
                    <span className="cart__count">{count}</span>
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className={`modal__content ${modalOpen ? 'open' : ''}`}
                overlayClassName="modal__overlay"
            >
                <button className="modal__close-button" onClick={closeModal}>
                    Close
                </button>
                <h2>Selected Products</h2>
                <ul>
                    {selectedProducts.map((product) => (
                        <li key={product.id}>
                            <div className="product__info">
                                <div className="product__image">
                                    {product.image && product.image.url ? (
                                        <img src={product.image.url} alt={product.name} />
                                    ) : (
                                        <p>Image not available</p>
                                    )}
                                </div>
                                <div className="product__details">
                                    <h3>{product.name}</h3>
                                    <p>Price: {formatPrice(product.price)}</p>
                                    <div className="product__quantity">
                                        <button
                                            onClick={() => handleDecreaseQuantity(product)}
                                            disabled={product.quantity === 1}
                                        >
                                            -
                                        </button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => handleIncreaseQuantity(product)}>+</button>
                                    </div>
                                </div>
                                <div className="product__actions">
                                    <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="cart__total">Total: {calculateTotal()}</div>
                <div className="cart__buttons">
                    <button onClick={handleRemoveFromCart}>Clear Cart</button>
                </div>
                <div>
                    {isFormSubmitted ? (
                        <CheckoutForm handleFormSubmit={handleAddToCart} />
                    ) : (
                        <button onClick={handleAddToCart}>Checkout</button>
                    )}
                </div>
            </Modal>
        </>
    );
}

export default CartView;
