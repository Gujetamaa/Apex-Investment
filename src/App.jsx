import React from "react";
import Routes from "./Routes";
import { ToastProvider } from "./utils/ToastContext.jsx";

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

export default App;
