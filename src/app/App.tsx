import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ListStarships from "../pages/Main/ListStarships";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StarshipDetails } from "../pages/Main/StarshipDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<ListStarships />} />
        <Route path="/starships" element={<ListStarships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
