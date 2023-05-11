import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { commerce } from "../../../lib/commerce";
import AddressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";

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

  const AddressForm = () => (
    <div>
      <AddressForm />
    </div>
  );

  const PaymentForm = () => (
    <div>
      <PaymentForm />
    </div>
  );

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <h5>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h5>
          <p>Order ref: {order.customer_reference}</p>
        </div>
        <br />
        <Button
          as={Link}
          to="/"
          variant="outlined"
          type="button"
        >
          Back To Home
        </Button>
      </>
    ) : (
      <div>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <h5>Error: {error}</h5>
        <br />
        <Button
          as={Link}
          variant="outlined"
          type="button"
          to="/"
        >
          Back to home
        </Button>
      </>
    );
  }

  return (
    <>
      <div style={{ paddingTop: "100px" }} />
      <main>
        <div>
          <h4>Checkout</h4>
          <div>
            {steps.map((step, index) => (
              <div key={step}>
                {activeStep === index && <h3>{step}</h3>}
              </div>
            ))}
          </div>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            <div>
              {checkoutToken && (
                <div>
                  {activeStep === 0 ? (
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
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Checkout;