import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "../public/assets/fonts/fonts.scss";
import HomePage from "./pages/client/home-pages/HomePage";
import LoginPage from "./pages/client/login/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element />
        </Route>
      </Routes>
    </>
  );
}

export default App;
