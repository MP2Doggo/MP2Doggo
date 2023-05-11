import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <h6>Order Summary</h6>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {checkoutToken.live.line_items.map((product) => (
          <li key={product.name} style={{ padding: "10px 0px" }}>
            <div>
              <p style={{ fontFamily: "Crimson Text", fontSize: "18px" }}>
                {product.name}
              </p>
              <p style={{ fontFamily: "Crimson Text" }}>
                Quantity: {product.quantity}
              </p>
            </div>
            <p style={{ fontFamily: "Crimson Text" }}>
              {product.line_total.formatted_with_symbol}
            </p>
          </li>
        ))}
        <li style={{ padding: "10px 0px" }}>
          <div>
            <p style={{ fontFamily: "Crimson Text", fontSize: "16px" }}>
              Total
            </p>
          </div>
          <p style={{ fontWeight: 700, fontFamily: "Crimson Text" }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </p>
        </li>
      </ul>
    </>
  );
};

export default Review;
