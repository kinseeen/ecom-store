import React, { useState } from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Contact from "../pages/ContactPage";
import Link from "@mui/material/Link";
import styles from "../navbar/Navbar.styles.css";
import { SlBasket } from "react-icons/sl";

function Home() {
  return <div></div>;
}
function ContactUs() {
  return <Contact />;
}
function ShoppingCart() {
  return <div></div>;
}
function RouteNotFound() {
  return <div>Page not found</div>;
}

function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            className="link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            to="/contact"
            color="inherit"
            underline="none"
            className="link"
          >
            {"Contact Us"}
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            to="/shoppingCart"
            color="inherit"
            underline="none"
            className="link"
          >
            {" "}
            Cart{" "}
          </Link>
        </li>
        <li className="Icon">
          <SlBasket />
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
