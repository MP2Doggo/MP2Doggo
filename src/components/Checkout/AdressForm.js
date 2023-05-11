import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";

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
        const response = await commerce.services.localeListShippingCountries(
            checkoutToken
        );
        setShippingCountries(response.countries);
        setShippingCountry(Object.keys(response.countries)[0]);
    };

    const fetchSubdivisions = async (countryCode) => {
        const response = await commerce.services.localeListSubdivisions(
            countryCode
        );
        setShippingSubdivisions(response.subdivisions);
        setShippingSubdivision(Object.keys(response.subdivisions)[0]);
    };

    const fetchShippingOptions = async (
        checkoutTokenId,
        country,
        region = null
    ) => {
        const response = await commerce.checkout.getShippingOptions(
            checkoutTokenId,
            { country, region }
        );
        setShippingOptions(response);
        setShippingOption(response[0].id);
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
            <h6>Shipping Address</h6>
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

                    <div>
                        <label>First Name</label>
                        <input {...methods.register("firstName", { required: true })} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input {...methods.register("lastName", { required: true })} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input {...methods.register("address1", { required: true })} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input {...methods.register("email", { required: true })} />
                    </div>
                    <div>
                        <label>City</label>
                        <input {...methods.register("city", { required: true })} />
                    </div>
                    <div>
                        <div>
                            <label>ZIP / Postal Code</label>
                            <input {...methods.register("zip", { required: true })} />
                        </div>
                        <div>
                            <label>Shipping Country</label>
                            <select
                                value={shippingCountry}
                                onChange={(e) => setShippingCountry(e.target.value)}
                            >
                                {countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Shipping Subdivision</label>
                            <select
                                value={shippingSubdivision}
                                onChange={(e) => setShippingSubdivision(e.target.value)}
                            >
                                {subdivisions.map((subdivision) => (
                                    <option key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Shipping Options</label>
                            <select
                                value={shippingOption}
                                onChange={(e) => setShippingOption(e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            component={Link}
                            to="/cart"
                            variant="outlined"
                            color="secondary"
                        >
                            Back To Cart
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Next
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;

