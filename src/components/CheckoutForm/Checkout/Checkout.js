import React, { useState, useEffect } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";
import { Link, useNavigate } from "react-router-dom";
import { FormText } from "react-bootstrap";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep + 1);
  const backStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        next={next}
        setShippingData={setShippingData}
      />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
      />
    );

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <FormText variant="h5" sx={{ fontFamily: "Crimson Text" }}>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!{" "}
          </FormText>
          <div sx={{ margin: "20px 0px" }} />
          <FormText sx={{ fontFamily: "Crimson Text" }}>
            Order ref: {order.customer_reference}
          </FormText>
        </div>
        <br />
        <Button
          component={Link}
          to="/"
          variant="outlined"
          type="button"
          sx={{ fontFamily: "Crimson Text" }}
          color="secondary"
        >
          Back To Home
        </Button>
      </>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <FormText variant="h5" sx={{ fontFamily: "Crimson Text" }}>
          Error: {error}
        </FormText>
        <br />
        <Button
          component={Link}
          variant="outlined"
          type="button"
          to="/"
          sx={{ fontFamily: "Crimson Text" }}
        >
          Back to home
        </Button>
      </>
    );
  }

  return (
    <>
      <div style={{ paddingTop: "100px" }} />
      {/* Need to figure out */}
      <main
        style={{
          marginTop: "5%",
          width: "auto",
          marginLeft: "16px",
          marginRight: "16px",
          "@media minWidth: 600": {
            width: "50px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper
          sx={{
            marginTop: "24px",
            marginBottom: "24px",
            padding: "16px",
            "@media maxWidth: -0.05px": {
              width: "100%",
              marginTop: 60,
            },
            "@media minWidth: NaNpx": {
              marginTop: "48px",
              marginBottom: "48px",
              padding: "24px",
            },
          }}
        >
          <FormText
            variant="h4"
            align="center"
            sx={{ fontFamily: "Crimson Text" }}
          >
            Checkout
          </FormText>
          <Stepper sx={{ padding: "24px 0px 40px" }} activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;