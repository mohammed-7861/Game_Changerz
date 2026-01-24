import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
  title: string;
  description: string;
  ageGroup?: string;
  type: 'available' | 'coming-soon';
  calendlyUrl?: string;
}

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  description,
  ageGroup,
  type,
  calendlyUrl
}) => {
  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!window.Calendly || !calendlyUrl) {
      console.error('Calendly not loaded');
      return;
    }

    window.Calendly.initPopupWidget({
      url: calendlyUrl
    });
  };

  /* ======================
     COMING SOON CARD
     ====================== */
  if (type === 'coming-soon') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card relative opacity-75"
      >
        <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm">
          Coming Soon
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-soft-charcoal/70 mb-4">{description}</p>

        {/* ✅ ADD AGE GROUP HERE */}
        {ageGroup && (
          <div className="mb-6 text-soft-charcoal/60 text-sm">
            👥 {ageGroup}
          </div>
        )}

        <button
          disabled
          className="w-full bg-soft-charcoal/20 text-soft-charcoal/50 py-3 rounded-lg cursor-not-allowed"
        >
          Coming Soon
        </button>
      </motion.div>
    );
  }

  /* ======================
     AVAILABLE CARD
     ====================== */
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="card relative hover:border-fresh-green"
    >
      <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm">
        Available Now
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-soft-charcoal/70 mb-4">{description}</p>

      {ageGroup && (
        <div className="mb-6 text-soft-charcoal/60 text-sm">
          👥 {ageGroup}
        </div>
      )}

      <button
        onClick={handleCalendlyClick}
        className="w-full btn-secondary"
      >
        Book Session
      </button>
    </motion.div>
  );
};

export default SessionCard;
