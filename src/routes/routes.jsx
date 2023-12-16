import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../pages/loading/loadingPage.jsx";
import HomePage from "../pages/home/HomePage";
import Playground from ".././components/playground/playground.jsx";
const RouteManager = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/playground" element={<Playground />} />

      <Route
        path="/react-capstone-project/home"
        element={isLoading ? <LoadingPage /> : <HomePage />}
      />
    </Routes>
  );
};

export default RouteManager;
