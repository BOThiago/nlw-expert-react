import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./app";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Toaster richColors />
    </React.StrictMode>
);
