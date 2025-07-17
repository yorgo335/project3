import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkLightToggle from "./components/DarkLightToggle";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Productinfo from "./pages/Productinfo";

function App() {
  return (
    <>
      {/* this is just routing setup, where i match paths with the desired component i wish to load */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id" element={<Productinfo />} />
        </Routes>
      </BrowserRouter>
      <DarkLightToggle />
      <footer>
        <p>&copy; 2025 NotAmazon. We're totally not Amazon&trade;</p>
      </footer>
    </>
  );
}

export default App;
