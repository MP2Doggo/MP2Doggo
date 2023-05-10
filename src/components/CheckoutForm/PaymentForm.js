import React from "react";
import { FormText, Button } from "react-bootstrap";
import {
    Elements,
    CardElement,
    ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
    checkoutToken,
    backStep,
    onCaptureCheckout,
    nextStep,
    shippingData,
}) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });
        if (error) {
            console.log(error);
        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
                },
                shipping: {
                    name: "Primary",
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: "gway_NoygZG9ZQYmnl8",
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            };
            onCaptureCheckout(checkoutToken.id, orderData);
            nextStep();
        }
    };

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <FormText
                variant="h6"
                gutterBottom
                sx={{ margin: "20px 0px", fontFamily: "Crimson Text" }}
            >
                Payment Method
            </FormText>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br />
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: "10px",
                                }}
                            >
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    This app is for testing purposes. Any card information inputed
                                    will not be charged.
                                </FormText>
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    If you do not wish to input a card use the test card below.
                                </FormText>
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    Test Card Info: 4242 4242 4242 4242 4242
                                </FormText>
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    MM/YY: 04/24
                                </FormText>
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    CVV: 242
                                </FormText>
                                <FormText
                                    sx={{
                                        fontFamily: "Crimson Text",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                    }}
                                >
                                    ZIP: 42424
                                </FormText>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button
                                    variant="outlined"
                                    onClick={backStep}
                                    color="secondary"
                                    sx={{ fontFamily: "Crimson Text", fontSize: "16px" }}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={!stripe}
                                    color="primary"
                                    sx={{ fontFamily: "Crimson Text", fontSize: "16px" }}
                                >
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default PaymentForm;