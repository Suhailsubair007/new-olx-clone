import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirebaseContext } from "./FirebaseContext.jsx"; 
import App from "./App.jsx";
import "./index.css";
import {app} from './config.jsx'

// Rendering the root component with Firebase context
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContext.Provider value={app}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>
);
