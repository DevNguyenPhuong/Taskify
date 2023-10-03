import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      //FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
