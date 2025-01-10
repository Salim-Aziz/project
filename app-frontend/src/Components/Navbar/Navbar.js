import "./Navbar.css";
// import { TfiShoppingCart } from "react-icons/tfi";
// import logo from "../../Images/logo.jpg";
import cart from "../../Images/cart.png";
import { Link } from "react-router-dom";
import logo from "../../Images/logo3.png";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              // fontFamily: "Bowlby One SC",
              fontFamily: "Rubik Vinyl",
            }}
            to="/"
          >
            {" "}
            <img src={logo} alt="" />
          </Link>{" "}
        </div>
        <div className="cart-signup">
          <Link to="/SignUp"> {/* <button>SignUp</button> */}</Link>
          <Link to="/Cart">
            {" "}
            <img src={cart} alt="" />
          </Link>

          {/* <TfiShoppingCart style={{ fontSize: "42px" }} /> */}
          <div className="cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
