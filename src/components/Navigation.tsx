import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-cinematic' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg">N</span>
            </div>
            <span className="text-2xl font-black text-foreground">
              NUT_<span className="text-primary">JOB</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="#movies" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Movies
            </a>
            <a 
              href="#animations" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Animations
            </a>
            <a 
              href="#genres" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Genres
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
          </div>

          {/* Search & User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-glow hover:scale-105">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}