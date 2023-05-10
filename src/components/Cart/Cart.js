import React from "react";
import { Container, Button, FormText } from "react-bootstrap";
import CardItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = ({
    cart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
}) => {
    const EmptyCart = () => (
        <FormText variant="subtitle1" sx={{ fontFamily: "Crimson Text" }}>
            You have no items in your shopping cart,
            <Link style={{ textDecoration: "none", color: "#B27701" }} to="/">
                {" "}
                start adding some
            </Link>
            !
        </FormText>
    );

    const FilledCart = () => (
        <>
            <div container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <div item xs={12} sm={4} key={lineItem.id}>
                        <CardItem
                            item={lineItem}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                        />
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: "10%",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <FormText
                    sx={{
                        fontFamily: "Crimson Text",
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </FormText>
                <div>
                    <Button
                        size="large"
                        type="button"
                        variant="outlined"
                        color="secondary"
                        sx={{ minWidth: "150px", fontFamily: "Crimson Text" }}
                        onClick={() => {
                            handleEmptyCart();
                        }}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        component={Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                        sx={{
                            minWidth: "150px",
                            marginLeft: "10px",
                            fontFamily: "Crimson Text",
                        }}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return "Loading...";

    return (
        <Container>
            <FormText
                sx={{ marginTop: "5%", fontFamily: "Crimson Text" }}
                variant="h3"
                gutterBottom
            >
                Your Shopping Cart
            </FormText>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;