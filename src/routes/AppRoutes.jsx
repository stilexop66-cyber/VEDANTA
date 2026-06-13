/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PracticeAreas from "../pages/PracticeAreas/PracticeAreas";
import Team from "../pages/Team/Team";
import TeamJoinPage from "../pages/Team/TeamJoinPage";
import Contact from "../pages/Contact/Contact";

import WhatsAppButton from "../components/layout/WhatsAppButton";


export default function AppRoutes() {

  return (

    <BrowserRouter>


      <WhatsAppButton />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/practice-areas"
          element={<PracticeAreas />}
        />


        <Route
          path="/team"
          element={<Team />}
        />


        <Route
          path="/join-our-team"
          element={<TeamJoinPage />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


      </Routes>


    </BrowserRouter>

  );

}