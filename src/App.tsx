import { Routes, Route } from "react-router-dom";
import "./App.scss";
// import HomePage from "./pages/client/home-pages/HomePage";
// import LoginPage from "./pages/client/login/LoginPage";
import Header from "@/components/client/Header/Header";
import HomePage from "./pages/client/home-pages/HomePage";
import LoginPage from "./pages/client/login/LoginPage";
import Footer from "@/components/client/Footer/Footer";
import NotFoundPage from "./pages/client/404-notfound/NotFound";
import ForgotPasswordPage from "./pages/client/forgot-password/ForgotPasswordPage";

function App() {
  return (
    <>
      <div className="container- p-0 m-0 relative bg-#1a1d29">
        <Header />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route
                path="/auth/login"
                element={<LoginPage />}
              />
              <Route path="/auth/register" element />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPasswordPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
