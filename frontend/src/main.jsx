import React from "react";

import ReactDOM from "react-dom/client";
import { Resume } from "./Pages/Resume";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { ContactForm } from "./Pages/form";
import Dashboard from "./Pages/dashboard";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cv" element={<Resume />} />
                    <Route path="/form" element={<ContactForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
);

