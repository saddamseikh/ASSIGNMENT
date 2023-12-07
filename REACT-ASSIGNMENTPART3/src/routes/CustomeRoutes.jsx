import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SinglePhoto from "../Pages/SinglePhoto";
export default function CustomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<SinglePhoto />} />
    </Routes>
  );
}
