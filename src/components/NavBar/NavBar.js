import React from "react";
import { Container, FormText } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <Container position="fixed" color="inherit">
        <Toolbar>
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
            <IconButton aria-label="Search" color="info" size="large">
            </IconButton>
            Vintager
          </FormText>
          <div style={{ flexGrow: 1 }} />
          {location.pathname === "/" && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
                size="large"
              >
                <div badgeContent={totalItems} color="secondary">
                  
                </div>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </Container>
    </>
  );
};

export default NavBar;