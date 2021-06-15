import "./Navbar.scss";
import { ReactComponent as Logo } from "./Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <Logo className="logo" />
    </div>
  );
}

export default Navbar;
