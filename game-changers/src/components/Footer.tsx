import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-soft-charcoal text-clean-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl md:mx-auto">
          {/* Brand */}
          <div className="text-center md:text-left md:w-full">
            <h3 className="text-xl font-bold mb-4">Game Changers</h3>
            <p className="text-clean-white/80 mb-4">
              Empowering players aged 10-15 to bridge the gap<br />
              from Rec to Club and High School soccer.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left md:w-full">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-clean-white/80 hover:text-fresh-green transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-clean-white/80 hover:text-fresh-green transition-colors duration-200">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-clean-white/80 hover:text-fresh-green transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-clean-white/80 hover:text-fresh-green transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-clean-white/10 mt-8 pt-8 text-center text-clean-white/60">
          <p>&copy; 2026 Game Changers Youth Soccer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;