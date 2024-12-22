import "./Navbar.css";
import { TfiShoppingCart } from "react-icons/tfi";
// import logo from "../../Images/logo.jpg";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">STUDENTSPHERE</div>
        <div className="cart">
          <TfiShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
