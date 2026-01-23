import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
  title: string;
  description: string;
  type: 'available' | 'coming-soon';
}

const SessionCard: React.FC<SessionCardProps> = ({ title, description, type }) => {
  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/spikeballclubrb/soccer-training-session?hide_gdpr_banner=1'
      });
    }
    return false;
  };

  if (type === 'coming-soon') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card relative overflow-hidden opacity-75"
      >
        <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </div>
        <h3 className="text-xl font-bold text-soft-charcoal mb-3">
          {title}
        </h3>
        <p className="text-soft-charcoal/70 mb-6">
          {description}
        </p>
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
      className="card hover:border-fresh-green"
    >
      <h3 className="text-xl font-bold text-soft-charcoal mb-3">
        {title}
      </h3>
      <p className="text-soft-charcoal/70 mb-6">
        {description}
      </p>
      <button
        onClick={handleCalendlyClick}
        className="w-full btn-secondary"
      >
        Book Now
      </button>
    </motion.div>
  );
};

export default SessionCard;