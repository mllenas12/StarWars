import ListStarships from "../pages/Main/ListStarships";
import { StarshipDetails } from "../pages/Main/StarshipDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { Layout } from "../pages/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/starships"
            element={
              <ProtectedRoute>
                <ListStarships />
              </ProtectedRoute>
            }
          />
          <Route
            path="/starships/:id"
            element={
              <ProtectedRoute>
                <StarshipDetails />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
