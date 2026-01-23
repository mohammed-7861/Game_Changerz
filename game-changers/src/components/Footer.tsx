import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-soft-charcoal text-clean-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Game Changers</h3>
            <p className="text-clean-white/80 mb-4">
              Empowering players aged 10-15 to bridge the gap from Rec to Club and High School soccer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-clean-white/80 hover:text-sky-blue transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-clean-white/80 hover:text-sky-blue transition-colors duration-200">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-clean-white/80 hover:text-sky-blue transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-clean-white/80 hover:text-sky-blue transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="text-clean-white/80 mb-2">
              Ready to transform your game?
            </p>
            <Link
              to="/contact"
              className="inline-block bg-sky-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-blue/90 transition-colors duration-200"
            >
              Contact Us
            </Link>
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