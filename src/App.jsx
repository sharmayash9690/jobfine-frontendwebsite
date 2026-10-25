
import './App.css';
import {
  Search,
  Bell,
  ArrowUpRight,
  Plus,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

function App() {
  const [jobTitle, setJobTitle] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  return (
    <main className="website" id="home">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-symbol">◈</span>
          <span>JobFine</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#platform" onClick={() => setMenuOpen(false)}>
            Platform
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            Solution
          </a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="#company" onClick={() => setMenuOpen(false)}>
            Company
          </a>
        </nav>

        <a href="mailto:hello@example.com" className="demo-button">
          Book A Demo
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="platform">
        <div className="hero-content">
          <p className="eyebrow">YOUR NEXT OPPORTUNITY STARTS HERE</p>

          <h1>
            Find Your
            <br />
            Ideal Job
          </h1>

          <p className="hero-description">
            Discover exciting career opportunities and connect
            with the right people to unlock your potential.
          </p>

          <form className="search-bar" onSubmit={handleSearch}>
            <Search size={21} aria-hidden="true" />

            <input
              type="search"
              placeholder="Search job"
              aria-label="Search jobs"
              value={jobTitle}
              onChange={(event) => {
                setJobTitle(event.target.value);
                setSearched(false);
              }}
            />

            <button type="submit">Search</button>
          </form>

          {searched && (
            <p className="search-message" role="status">
              {jobTitle.trim()
                ? `Search ready for "${jobTitle.trim()}". Connect a job API to find live results.`
                : 'Please enter a job title to search.'}
            </p>
          )}

          <div className="hero-bottom">
            <div className="matches-card">
              <strong>8M+</strong>
              <span>Matches Made</span>
            </div>

            <div className="potential-card" id="solutions">
              <h2>Unlocking your potential</h2>
              <p>Find the right opportunity for your career.</p>
              <a href="#resources">
                Browse All Categories <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="hero-visual" aria-label="Job search illustration">
          <div className="purple-shape" />
          <div className="green-shape" />

          <div className="hero-image-placeholder">
            <div className="image-overlay">
              <span className="image-icon">✦</span>
              <span>Build your future</span>
              <p>Your dream job is waiting.</p>
            </div>
          </div>

          <div className="floating-card alert-card">
            <span className="notification-icon">
              <Bell size={19} />
            </span>
            <span>Job Alert Subscribe</span>
          </div>

          <div className="floating-card talent-card">
            <h3>Find Your Talent</h3>
            <label htmlFor="work-type">Type of Work</label>
            <input id="work-type" placeholder="e.g. Full-time" />
            <label htmlFor="position">Position</label>
            <input id="position" placeholder="e.g. Developer" />
            <button type="button" onClick={() => document.querySelector('.search-bar input')?.focus()}>
              Search Talent
            </button>
          </div>

          <div className="floating-card candidates-card">
            <strong>5k+ candidates get job</strong>
            <div className="candidate-avatars">
              <span>J</span>
              <span>A</span>
              <span>R</span>
              <span>M</span>
              <span className="avatar-plus">
                <Plus size={19} />
              </span>
            </div>
          </div>

          <div className="dot-pattern" aria-hidden="true" />
        </div>
      </section>

      {/* Company logos */}
      <section className="brand-strip" id="company">
        <span className="brand-aws">aws</span>
        <span className="brand-walmart">Walmart ✳</span>
        <span className="brand-hbo">HBO</span>
        <span className="brand-vanguard">Vanguard</span>
        <span className="brand-time">TIME</span>
        <span className="brand-levis">Levi's</span>
      </section>


    </main>
  );
}

export default App;
