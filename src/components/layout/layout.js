import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/footer.js";
import styles from "../layout/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
