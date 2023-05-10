import React from "react";
import { Button, Container, Dropdown, FormText } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <Container position="fixed" color="inherit">
        <Dropdown>
          <FormText
            component={Link}
            to="/"
            variant="h3"
            color="#B27701"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              fontFamily: "Crimson Text",
              justifyContent: "space-between",
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            Vintager
          </FormText>
          <div style={{ flexGrow: 1 }} />
          {location.pathname === "/" && (
            <div>
              <Button
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
                size="large"
              >
                <div badgeContent={totalItems} color="secondary">
                  
                </div>
              </Button>
            </div>
          )}
        </Dropdown>
      </Container>
    </>
  );
};

export default NavBar;