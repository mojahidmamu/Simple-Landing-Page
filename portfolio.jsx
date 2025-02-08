<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold">Hi, I'm Abdullah Al Mojahid</h1>
    <p className="text-gray-600 mt-3">Full-Stack Web Developer | Passionate about building interactive web applications.</p>
    <Link to="/projects" className="mt-5 inline-block bg-blue-500 text-white px-5 py-2 rounded-lg">View My Work</Link>
  </div>
);

const Projects = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {[
        { name: "EquiSports", description: "A sports equipment store.", github: "https://github.com/mojahid/equisports", live: "https://equisports.com" },
        { name: "Career Counseling", description: "Personalized career guidance.", github: "https://github.com/mojahid/career-counseling", live: "https://careercounseling.com" },
        { name: "News Portal", description: "A dynamic news platform.", github: "https://github.com/mojahid/news-portal", live: "https://newsportal.com" }
      ].map((project, index) => (
        <div key={index} className="border p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <div className="flex gap-3 mt-3">
            <a href={project.github} className="text-blue-500" target="_blank">GitHub</a>
            <a href={project.live} className="text-green-500" target="_blank">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="text-center p-10">
    <h2 className="text-3xl font-bold">Contact Me</h2>
    <p className="text-gray-600">Let's connect and work together!</p>
    <div className="flex justify-center gap-5 mt-5">
      <a href="mailto:mojahid@example.com" className="text-red-500 text-2xl"><FaEnvelope /></a>
      <a href="https://linkedin.com/in/mojahid" className="text-blue-500 text-2xl"><FaLinkedin /></a>
      <a href="https://github.com/mojahid" className="text-gray-800 text-2xl"><FaGithub /></a>
    </div>
  </div>
);

const App = () => (
  <Router>
    <nav className="p-5 bg-gray-900 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">Mojahid</Link>
      <div className="flex gap-5">
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;

</body>
</html>