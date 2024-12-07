import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./Routers/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from 'sonner'
import { ThemeProvider } from "./AuthProvider/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Toaster position="top-right"  richColors />
    <BrowserRouter>
    <AuthProvider> 
    <ThemeProvider>
      <AppRoute />
      </ThemeProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
