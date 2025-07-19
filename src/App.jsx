import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer faqWhite />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer faqWhite />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/faq" element={
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">
              <FAQ />
            </div>
            <Footer faqWhite />
          </div>
        } />
      </Routes>
    </>
  );
} 