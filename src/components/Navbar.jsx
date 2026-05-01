import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container flex items-center justify-between h-full">
        <a href="#hero" className="nav-logo">&lt;AG /&gt;</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[0.95rem] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">About</a>
          <a href="#projects" className="text-[0.95rem] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Projects</a>
          <a href="#experience" className="text-[0.95rem] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">Experience</a>
          <a href="#contact" className="nav-cta">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[var(--text-main)] text-2xl focus:outline-none">
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[var(--bg-glass-solid)] backdrop-blur-xl border-b border-[var(--border-light)] flex flex-col p-6 gap-6 md:hidden shadow-2xl">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[var(--text-main)]">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[var(--text-main)]">Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[var(--text-main)]">Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-cta text-center w-full mt-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
