import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContactProvider from "./context/ContactContext.jsx";
import "./index.css";
import UserProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ContactProvider>
  </StrictMode>
);
