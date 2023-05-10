import React from "react";
import { FormText, ListGroup, ListGroupItem} from "react-bootstrap";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <FormText variant="h6" gutterBottom sx={{ fontFamily: "Crimson Text" }}>
        Order Summary
      </FormText>
      <ListGroup disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListGroupItem sx={{ padding: "10px 0px" }} key={product.name}>
            <FormText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
              primaryFormTextProps={{
                fontFamily: "Crimson Text",
                fontSize: "18px",
              }}
              secondaryFormTextProps={{ fontFamily: "Crimson Text" }}
            />
            <FormText variant="body2" sx={{ fontFamily: "Crimson Text" }}>
              {product.line_total.formatted_with_symbol}
            </FormText>
          </ListGroupItem>
        ))}
        <ListGroupItem sx={{ padding: "10px 0px" }}>
          <FormText
            primary="Total"
            primaryFormTextProps={{
              fontFamily: "Crimson Text",
              fontSize: "16px",
            }}
          />
          <FormText
            variant="subtitle1"
            sx={{ fontWeight: 700, fontFamily: "Crimson Text" }}
          >
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </FormText>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default Review;