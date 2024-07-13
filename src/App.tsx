import { useEffect, useState } from "react";
import { RxCaretUp } from "react-icons/rx";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LinkResetSent from "./components/client/LinkResetSent/LinkResetSent";
import ScrollToTop from "./components/client/ScrollToTop/ScrollToTop";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";
import ActorAdminPage from "./pages/admin/ActorAdminPage/ActorAdminPage";
import DirectorAdminPage from "./pages/admin/DirectorAdminPage/DirectorAdminPage";
import EventAdminPage from "./pages/admin/EventAdminPage/EventAdminPage";
import MovieAdminPage from "./pages/admin/MovieAdminPage/MovieAdminPage";
import MovieGenreAdminPage from "./pages/admin/MovieGenreAdminPage/MovieGenreAdminPage";
import TheaterAdminPage from "./pages/admin/TheaterAdminPage/TheaterAdminPage";
import NotFoundPage from "./pages/client/404-notfound/NotFound";
import AboutUsPage from "./pages/client/about-us/AboutUsPage";
import AuthPage from "./pages/client/auth/AuthPage";
import StepOne from "./pages/client/BookTicket/StepOne/StepOne";
import StepThree from "./pages/client/BookTicket/StepThree/StepThree";
import StepTwo from "./pages/client/BookTicket/StepTwo/StepTwo";
import ChangePwPage from "./pages/client/change-password/ChangePwPage";
import EventPage from './pages/client/event-pages/EventPage';
import ForgotPasswordPage from "./pages/client/forgot-password/ForgotPasswordPage";
import HomePage from "./pages/client/home-pages/HomePage";
import ShowTimePage from "./pages/client/showtime-pages/ShowTimePage";
import TheaterPage from "./pages/client/theater-pages/TheaterPage";
import UserInfomation from "./pages/client/UserInfomation/UserInfomation";
import ShowTimesAdminPage from "./pages/admin/ShowTimesAdminPage/ShowTimesAdminPage";
import DetailEventPage from "./pages/admin/EventAdminPage/DetailEventPage/DetailEventPage";


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
  const routesClient = [
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
    {
      path: "/auth/reset-link-sent",
      element: <LinkResetSent />,
    },
    { path: "/about-us", element: <AboutUsPage /> },
    { path: "/book-ticket1", element: <StepOne /> },
    { path: "/book-ticket2", element: <StepTwo /> },
    { path: "/book-ticket3", element: <StepThree /> },
    { path: "*", element: <NotFoundPage /> },
  ];

  const RoutesAdmin = [
    {path: '/admin/TheaterManagement', element: <TheaterAdminPage />},
    {path: '/admin/movieManagement', element: <MovieAdminPage />},
    {path: '/admin/movieGenre', element: <MovieGenreAdminPage />},
    {path: '/admin/director', element: <DirectorAdminPage />},
    {path: '/admin/actor', element: <ActorAdminPage />},
    {path: '/admin/event', element: <EventAdminPage />},
    {path: '/admin/event/:id', element: <DetailEventPage />},
    {path: '/admin/showTimes', element: <ShowTimesAdminPage />},
  ]

  return (
    <>
      <ScrollToTop />
      <div className="p-0 m-0 relative bg-#1a1d29">
        <main>
          <Routes>
            {/* Client */}
            <Route path="/" element={<LayoutClient/>}>
            <Route path="/">
              <Route index element={<HomePage />} />
              {routesClient.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
            
            </Route>

            {/* Admin */}
            <Route path="/admin" element={<LayoutAdmin />}>
              {RoutesAdmin.map((router, idx) => (
                <Route
                  key={idx}
                  path={router.path}
                  element={router.element}
                />
              ))}
            </Route>
          </Routes>
        </main>
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
