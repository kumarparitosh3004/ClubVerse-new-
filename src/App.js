import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ClubList from './components/ClubList';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClubDetails from "./pages/ClubDetails";
import './App.css';

function Home({ activeCategory, setActiveCategory, search, setSearch }) {
  return (
    <>
      <section className="hero">
        <div className="hero-shell">
          <div className="hero-badge">OFFICIAL VIT CLUBS DISCOVERY PLATFORM</div>
          <h1>CLUBVERSE</h1>
          <p>DISCOVER OFFICIAL VIT CLUBS, BUILD YOUR NETWORK, AND GROW YOUR SKILLS</p>

          <div className="hero-actions">
            <button
              className="hero-btn"
              onClick={() =>
                document.getElementById("clubs").scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPLORE CLUBS ↓
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
            >
              CONTACT TEAM
            </button>
          </div>

          <div className="hero-highlights">
            <div className="hero-stat">
              <strong>12+</strong>
              <span>Active Clubs</span>
            </div>
            <div className="hero-stat">
              <strong>5</strong>
              <span>Categories</span>
            </div>
            <div className="hero-stat">
              <strong>1</strong>
              <span>Institutional Hub</span>
            </div>
          </div>
        </div>
      </section>

      <section className="clubs-section">

        <input
          type="text"
          placeholder="SEARCH CLUBS..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-filters">
          {['all','tech','cultural','arts','ngo'].map(cat => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <ClubList category={activeCategory} search={search} />

      </section>

      <section id="contact" className="contact-section">
        <h2>CONTACT US</h2>
        <ContactForm />
      </section>
    </>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? "App dark" : "App light"}>

        <Navbar toggleTheme={() => setDarkMode(!darkMode)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                search={search}
                setSearch={setSearch}
              />
            }
          />

          <Route path="/club/:id" element={<ClubDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
