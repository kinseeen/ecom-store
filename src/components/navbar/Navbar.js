import {
  Routes,
  Route,
  Link as RouterLink,
  BrowserRouter,
} from "react-router-dom";
import Contact from "../pages/ContactPage/ContactPage";
import Link from "@mui/material/Link";
import styles from "../navbar/Navbar.styles.css";
import Cart from "../cart/cart";
import HomePage from "../pages/homePage/homePage";
import ItemNavigation from "../../apiComponents/fetchData.js";
import ItemSpecificPage from "../pages/itemSpecificPage/ItemSpecificPage.js";

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
            {" "}
            Cart{" "}
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
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
