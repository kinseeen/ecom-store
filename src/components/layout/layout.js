import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/footer.js";
import "../layout/layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
