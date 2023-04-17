import Logo from "../images/logo.svg";
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
    </div>
  );
}

export default Navbar;
