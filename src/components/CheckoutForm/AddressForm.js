import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormText } from "react-bootstrap";
import commerce from "../../lib/commerce";
import { Input } from "reactstrap";
import { Button } from "bootstrap";
import { Menu } from "semantic-ui-react";
const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(
    ([code, countryName]) => ({ id: code, label: countryName })
  );
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, subdivisionName]) => ({ id: code, label: subdivisionName })
  );
  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutToken) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutToken
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <>
      <FormText variant="h6" gutterBottom sx={{ fontFamily: "Crimson Text" }}>
        Shipping Address
      </FormText>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <div container spacing={3}>
            <Input required name="firstName" label="First Name" />
            <Input required name="lastName" label="Last Name" />
            <Input required name="address1" label="Address" />
            <Input required name="email" label="Email" />
            <Input required name="city" label="City" />
            <Input required name="zip" label="ZIP / Postal Code" />
            <div item xs={12} sm={6}>
              <FormText sx={{ fontFamily: "Crimson Text" }}>
                Shipping Country
              </FormText>
              <div
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <Menu key={country.id} value={country.id}>
                    {country.label}
                  </Menu>
                ))}
              </div>
            </div>
            <div item xs={12} sm={6}>
              <FormText sx={{ fontFamily: "Crimson Text" }}>
                Shipping Subdivision
              </FormText>
              <div
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <Menu key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </Menu>
                ))}
              </div>
            </div>
            <div item xs={12} sm={6}>
              <FormText sx={{ fontFamily: "Crimson Text" }}>
                Shipping Options
              </FormText>
              <div
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map((option) => (
                  <Menu key={option.id} value={option.id}>
                    {option.label}
                  </Menu>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/cart"
              variant="outlined"
              color="secondary"
              sx={{ fontFamily: "Crimson Text" }}
            >
              Back To Cart
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Crimson Text" }}
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;