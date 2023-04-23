import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" style={{height: "20px", }} />
      <div className="sites">
        <a href="#">Collections</a>
        <a href="#">Man</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="profile">
        <img src={Cart} alt="Cart" id="cart" />
        <img src={Avatar} alt="Avatar" style={{height: "40px"}} />
      </div>
    </div>
  );
}

export default Navbar;
