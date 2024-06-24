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
function App() {
   // Xử lý cuộc trang
   const [isVisible, setIsVisible] = useState<boolean>(false);

   // Xử lý hiển thị nút khi cuộn xuống 200px
   useEffect(() => {
     const toggleVisibility = () => {
       if (window.pageYOffset > 500) {
         setIsVisible(true);
       } else {
         setIsVisible(false);
       }
     };
 
     window.addEventListener('scroll', toggleVisibility);
 
     return () => {
       window.removeEventListener('scroll', toggleVisibility);
     };
   }, []);
 
   // Xử lý sự kiện khi click vào nút
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   };
 

  return (
    <>
      <div className="container- p-0 m-0 relative bg-#1a1d29">
        <Header />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/event" element={<EventPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPasswordPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
        {/* Xử lí cuộn trang */}
        {isVisible && (
        <button className="fixed bottom-14 right-5  text-white px-2 py-2 rounded-full bg-transparent border-[1.5px] border-solid border-#fff hover:bg-#72be43 hover:border-#72be43"
                onClick={scrollToTop}>
          <RxCaretUp size={24} className="text-fff"/>
        </button>
      )}
      </div>
    </>
  );
}

export default App;
