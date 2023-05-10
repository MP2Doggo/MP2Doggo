import React from "react";
import { Container, Button, FormText, Card, CardImg, Body } from "react-bootstrap";
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    return (
        <Card sx={{ backgroundColor: "#DFE0DF" }}>
            <CardImg image={item.image.url} alt={item.name} sx={{ height: 260 }} />
            <Card.Body sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormText variant="h4" sx={{ fontFamily: "Crimson Text" }}>
                    {item.name}
                </FormText>
                <FormText variant="h5" sx={{ fontFamily: "Crimson Text" }}>
                    {item.line_total.formatted_with_symbol}
                </FormText>
            </Card.Body>
            <Card.Body sx={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                        type="button"
                        size="small"
                        onClick={() => {
                            onUpdateCartQty(item.id, item.quantity - 1);
                        }}
                    >
                        -
                    </Button>
                    <FormText sx={{ fontFamily: "Crimson Text" }}>
                        {item.quantity}
                    </FormText>
                    <Button
                        type="button"
                        size="small"
                        onClick={() => {
                            onUpdateCartQty(item.id, item.quantity + 1);
                        }}
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant="outlined"
                    type="button"
                    color="secondary"
                    sx={{ fontFamily: "Crimson Text" }}
                    onClick={() => onRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CartItem;