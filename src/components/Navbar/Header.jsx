import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
      <header>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>
          </div>
  
          {/* Centering the Navbar */}
          <div className="nav-area">
            {/* for large screens */}
            <Navbar />
  
            {/* for small screens */}
            <MobileNav />
          </div>
        </div>
      </header>
    );
  };

  export default Header;