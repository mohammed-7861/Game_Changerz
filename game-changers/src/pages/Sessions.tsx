import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SessionCard from '../components/SessionCard';

const Sessions = () => {
  useEffect(() => {
    // Load Calendly script and CSS only once
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      calendlyScript.async = true;
      document.head.appendChild(calendlyScript);

      const calendlyCSS = document.createElement('link');
      calendlyCSS.rel = 'stylesheet';
      calendlyCSS.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(calendlyCSS);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-clean-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-4">
              Choose Your Session Type
            </h1>
            <p className="text-lg text-soft-charcoal/70 max-w-2xl mx-auto">
              Select the format that matches your player's current level
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <SessionCard
              title="7v7"
              description="Perfect for players developing core skills in a medium-sided game format."
              ageGroup="U9 & U10"
              type="available"
            />
            <SessionCard
              title="9v9"
              description="Transitional format bridging small-sided and full-field play."
              ageGroup="U11 & U12"
              type="coming-soon"
            />
            <SessionCard
              title="11v11"
              description="Full-field competitive format for advanced players."
              ageGroup="U13 & Up"
              type="coming-soon"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sessions;