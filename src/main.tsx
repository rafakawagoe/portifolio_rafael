import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./i18n.ts";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.tsx";
import AnalyticsProvider from "./components/AnalyticsProvider/AnalyticsProvider.tsx";
import { initGA } from "./utils/analytics.ts";

const HomePage = lazy(() => import("./features/HomePage/HomePage.tsx"));
const AboutPage = lazy(() => import("./features/AboutPage/AboutPage.tsx"));

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/portifolio_rafael">
        <AnalyticsProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </AnalyticsProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
