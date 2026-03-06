import { Routes, Route } from "react-router-dom"; // Nueva importación
import Dashboard from "./Dashboard/Dashboard"; // Nueva importación
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Envuelve un componente Route dentro de un componente Routes  
          y especifica la ruta y los atributos del elemento tal como se muestra. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
