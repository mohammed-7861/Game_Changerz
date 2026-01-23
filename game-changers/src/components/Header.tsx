import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const handleCalendlyClick = () => {
    // Calendly integration will be added later
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/spikeballclubrb/soccer-training-session?hide_gdpr_banner=1'
      });
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-clean-white shadow-sm border-b border-soft-charcoal/10">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-soft-charcoal">Game Changers</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-soft-charcoal hover:text-sky-blue transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-sky-blue' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleCalendlyClick}
              className="btn-primary"
            >
              Sessions
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-soft-charcoal hover:text-sky-blue transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-clean-white border-t border-soft-charcoal/10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium text-soft-charcoal hover:text-sky-blue transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-sky-blue' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    handleCalendlyClick();
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full text-center"
                >
                  Sessions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;