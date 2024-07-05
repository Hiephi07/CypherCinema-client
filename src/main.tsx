import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./_context/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CalendarProvider from "./_context/CalendarProvider.tsx";
import BookTicketStepone_Provider from "./_context/BookTicketStepOne.tsx";


const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
        <BookTicketStepone_Provider>
          <CalendarProvider>
            <App />
          </CalendarProvider>
        </BookTicketStepone_Provider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
