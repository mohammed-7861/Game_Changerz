import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/coaches', label: 'Coaches' },
    { path: '/contact', label: 'Contact Us' },
  ];


  return (
    <header className="sticky top-0 z-50 bg-clean-white shadow-sm border-b border-soft-charcoal/10 py-6">
      <div className="container-max relative">
        <div className="flex items-center justify-between min-h-16">
          {/* Logo Container - Left Side */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2 pl-4 md:pl-0">
            <img
              src="/hairy.png"
              alt="Game Changerz Logo"
              className="h-24 md:h-[100px] w-auto object-contain"
            />
            <div className="text-lg md:text-xl font-bold text-fresh-green text-center leading-tight">
              Game Changerz
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[1.2rem] text-soft-charcoal hover:text-fresh-green transition-colors duration-200 font-medium ${location.pathname === item.path ? 'text-fresh-green' : ''
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/sessions"
              className="bg-sunshine-yellow text-soft-charcoal font-bold px-16 py-5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg inline-block text-2xl"
            >
              Sessions
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="text-soft-charcoal hover:text-fresh-green transition-colors duration-200"
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
                  className={`block px-4 py-4 text-2xl font-medium text-soft-charcoal hover:text-fresh-green transition-colors duration-200 ${location.pathname === item.path ? 'text-fresh-green' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-4"> 
                <Link
                  to="/sessions"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-sunshine-yellow text-soft-charcoal font-bold px-16 py-5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg w-full text-center block text-2xl"
                >
                  Sessions
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;