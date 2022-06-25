import logo from "../assets/logo.svg";
import "../css/navigation-bar.css";
import Cart from "./cart";
import Avatar from "./avatar";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <img src={logo} alt="logo" />
      <ul className="navigation-bar-items">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Cart />
      <Avatar />
    </div>
  );
};

export default NavigationBar;
