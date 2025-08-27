import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function Home() {
  return <Card title="Home" content="Welcome to the home page ok" />;
}
function About() {
  return <Card title="About" content="This is about the app." />;
}
function Contact() {
  return <Card title="Contact" content="Contact us at example@example.com." />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
