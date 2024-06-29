import { Routes, Route } from "react-router-dom";
import "./App.scss";
// import HomePage from "./pages/client/home-pages/HomePage";
// import LoginPage from "./pages/client/login/LoginPage";
import Header from "@/components/client/Header/Header";
import HomePage from "./pages/client/home-pages/HomePage";
import Footer from "@/components/client/Footer/Footer";
import NotFoundPage from "./pages/client/404-notfound/NotFound";
import ForgotPasswordPage from "./pages/client/forgot-password/ForgotPasswordPage";
import AuthPage from "./pages/client/auth/AuthPage";
import EventPage from "./pages/client/event-pages/EventPage";
import { useEffect, useState } from "react";
import { RxCaretUp } from "react-icons/rx";
import ShowTimePage from "./pages/client/showtime-pages/ShowTimePage";
import TheaterPage from "./pages/client/Theater-pages/TheaterPage";
import UserInfomation from "./pages/client/UserInfomation/UserInfomation";
import ChangePwPage from "./pages/client/change-password/ChangePwPage";
import AboutUsPage from "./pages/client/about-us/AboutUsPage";
import ScrollToTop from "./components/client/ScrollToTop/ScrollToTop";
function App() {
  // Xử lý cuộc trang
  const [isVisible, setIsVisible] =
    useState<boolean>(false);

  // Xử lý hiển thị nút khi cuộn xuống 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
    };
  }, []);

  // Xử lý sự kiện khi click vào nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const routes = [
    { path: "/event", element: <EventPage /> },
    { path: "/theater", element: <TheaterPage /> },
    { path: "/showsTime", element: <ShowTimePage /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/auth/:id", element: <UserInfomation /> },
    {
      path: "/auth/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/auth/change-password/:id",
      element: <ChangePwPage />,
    },
    { path: "*", element: <NotFoundPage /> },
    { path: "/about-us", element: <AboutUsPage /> },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="container- p-0 m-0 relative bg-#1a1d29">
        <Header />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Routes>
        </main>
        <Footer />
        {/* Xử lí cuộn trang */}
        {isVisible && (
          <button
            className="fixed bottom-6 right-2 z-50 text-white px-1 py-1 rounded-full bg-transparent border-[1.5px] border-solid border-#fff hover:bg-#72be43 hover:border-#72be43"
            onClick={scrollToTop}
          >
            <RxCaretUp size={24} className="text-fff" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
