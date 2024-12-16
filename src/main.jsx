import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BasketProvider } from "./components/context/basketcontext.jsx";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BasketProvider>
      
      <App />
    </BasketProvider>
  </HelmetProvider>
);

