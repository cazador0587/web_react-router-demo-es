import "./Header.css";
import Logo from "../Logo/Logo";
import NavBar from '../NavBar/NavBar'; // Nueva importación

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar /> {/* Nuevo */}
    </div>
  );
}

export default Header;
