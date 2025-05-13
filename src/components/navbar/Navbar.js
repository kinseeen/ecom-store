import {
  Routes,
  Route,
  Link as RouterLink,
  BrowserRouter,
} from "react-router-dom";
import Contact from "../contactForm/contactForm.js";
import Link from "@mui/material/Link";
import "../navbar/Navbar.styles.css";
import Cart from "../cart/cart";
import HomePage from "../pages/homePage/homePage";
import ItemNavigation from "../../apiComponents/fetchData.js";
import ItemSpecificPage from "../pages/itemSpecificPage/ItemSpecificPage.js";
import CartPage from "../pages/cartPage/cartPage.js";
import CheckoutSuccessPage from "../pages/checkOutSuccessPage/checkOutSuccessPage.js";
import logo from "../../images/freepik__background__55751.png";

function Home() {
  return <HomePage />;
}
function ContactUs() {
  return <Contact />;
}

function ProductPage() {
  return <ItemSpecificPage />;
}

function ShoppingCart() {
  return (
    <div>
      <CartPage />
    </div>
  );
}

function CheckOutSuccess() {
  return <CheckoutSuccessPage />;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function LogoImage() {
  return (
    <RouterLink to="/homepage">
      <img src={logo} alt="Logoimage" className="logo" />
    </RouterLink>
  );
}

function Nav() {
  return (
    <nav className="navigation">
      <ul className="leftSideNav">
        <LogoImage />
      </ul>
      <ul className="MiddleNav"></ul>
      <ul className="rightSideNav">
        <li>
          <Link
            component={RouterLink}
            to="/homepage"
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
            <Cart />
          </Link>
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
        <Route path="homepage" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="checkOutSuccess" element={<CheckoutSuccessPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
