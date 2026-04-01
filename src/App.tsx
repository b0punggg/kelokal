import { Footer } from "./components/landing/Footer";
import { Navbar } from "./components/landing/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUsPage } from "./pages/AboutUsPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
