import "./App.css";
import { useEffect, useState } from "react"; // Nueva importación
import { Routes, Route } from "react-router-dom"; // Nueva importación

import Dashboard from "./Dashboard/Dashboard"; // Nueva importación
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";

import AboutMe from "./AboutMe/AboutMe";
import Contact from "./AboutMe/Contact";
import Hobbies from "./AboutMe/Hobbies";
import MyStory from "./AboutMe/MyStory";
import AboutUs from "./AboutUs/AboutUs";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";

function App() {
  // Agrega las rutas hijo a la ruta /about-me.
  const [reviews, setReviews] = useState([]); // Nueva variable useState

  useEffect(() => {
    // Obtiene los datos de reseñas del servidor.
    fetch("https://emoji-critic.es.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pasa el cuerpo de la respuesta analizada a la función setter.
        setReviews(data);
      })
      .catch(console.error);
    // Un array de dependencia vacío significa que el hook sólo se ejecuta cuando
    // se carga el componente.
  }, []);
  
  return (
    <div className="App">
      <Header />
      {/* Envuelve un componente Route dentro de un componente Routes  
          y especifica la ruta y los atributos del elemento tal como se muestra. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="sitehistory" element={<SiteHistory />} />
          <Route path="sitemission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
