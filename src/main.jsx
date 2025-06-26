import React from "react";

import ReactDOM from "react-dom/client";
import { Resume } from "./Pages/Resume";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { ContactForm } from "./Pages/form";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/cv" element={<Resume />} />
                    <Route path="/" element={<ContactForm />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
);

