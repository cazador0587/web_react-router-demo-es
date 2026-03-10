import { Outlet, Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="mystory">Mi historia</Link>
        </li>
        <li>
          <Link to="mission">Nuestra misión</Link>
        </li>
      </ul>
      <p>Soy una persona sencilla. Veo Emojis, escribo reseñas.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
