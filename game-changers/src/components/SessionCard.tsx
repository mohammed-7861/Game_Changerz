import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
  title: string;
  description: string;
  ageGroup?: string;
  type: 'available' | 'coming-soon';
}

const SessionCard: React.FC<SessionCardProps> = ({ title, description, ageGroup, type }) => {
  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!window.Calendly) {
      console.error('Calendly not loaded yet');
      // Retry after a short delay if script is still loading
      setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/game__changers/soccer-training-session?hide_gdpr_banner=1'
          });
        }
      }, 500);
      return;
    }

    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/game__changers/soccer-training-session?hide_gdpr_banner=1'
    });
  };

  if (type === 'coming-soon') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card relative overflow-hidden opacity-75 session-card"
      >
        <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm font-medium z-10 opacity-100">
          Coming Soon
        </div>
        <h3 className="text-xl font-bold text-soft-charcoal mb-3">
          {title}
        </h3>
        <p className="text-soft-charcoal/70 mb-4">
          {description}
        </p>
        {ageGroup && (
          <div className="mb-6">
            <div className="text-soft-charcoal/60 text-sm">👥 {ageGroup}</div>
          </div>
        )}
        <button
          disabled
          className="w-full bg-soft-charcoal/20 text-soft-charcoal/50 px-6 py-3 rounded-lg font-medium cursor-not-allowed"
        >
          Coming Soon
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="card hover:border-fresh-green relative session-card"
    >
      <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm font-medium z-10 opacity-100">
        Available Now
      </div>
      <h3 className="text-xl font-bold text-soft-charcoal mb-3">
        {title}
      </h3>
      <p className="text-soft-charcoal/70 mb-4">
        {description}
      </p>
      {ageGroup && (
        <div className="mb-6">
          <div className="text-soft-charcoal/60 text-sm">👥 {ageGroup}</div>
        </div>
      )}
      {/* Calendly container - hidden, only used for popup trigger */}
      <div className="calendly-7v7-container hidden"></div>
      <button
        onClick={handleCalendlyClick}
        id="book-7v7-btn"
        className="w-full btn-secondary"
      >
        Book Session
      </button>
    </motion.div>
  );
};

export default SessionCard;