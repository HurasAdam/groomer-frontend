import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";
import OurTeamPage from "./pages/OurTeamPage";
import OurStoryPage from "./pages/OurStoryPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <main className=" h-screen w-full">
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/*" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/404" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
