import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom"; // ✅ Add Router
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ BrowserRouter should only be here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
