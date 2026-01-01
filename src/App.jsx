import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import CommandPalette from "@/components/CommandPalette";

function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}

function App() {
    return (
        <Router>
            <Helmet>
                <title>Supun Sulakshana | Software Engineer</title>
                <meta name="description" content="Portfolio of Supun Sulakshana, a Software Engineering Undergraduate and Full-Stack Developer." />
            </Helmet>

            {/* Global Components from layout.js */}
            <SmoothScroll />
            <Cursor />
            <CommandPalette />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
