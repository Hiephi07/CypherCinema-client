import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "@@/assets/fonts/fonts.scss";
// import HomePage from "./pages/client/home-pages/HomePage";
// import LoginPage from "./pages/client/login/LoginPage";
import Header from "./_components/client/Header/Header";
import HomePage from "./pages/client/home-pages/HomePage";
import LoginPage from "./pages/client/login/LoginPage";
import Footer from "./_components/client/Footer/Footer";
import Event from "./_components/client/Event/Event";


function App() {
  return (
    <>
    <Header />
    <Event />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
