import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ListStarships from "../pages/Main/ListStarships";
import { StarshipDetails } from "../pages/Main/StarshipDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<ListStarships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
