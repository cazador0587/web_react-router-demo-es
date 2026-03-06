import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__link">
        Inicio
      </NavLink>
      <NavLink to="/reviews" className="menu__link">
        Reseñas de emojis
      </NavLink>
      <NavLink to="/about-me" className="menu__link">
        Sobre mí
      </NavLink>
    </nav>
  );
}

export default NavBar;
