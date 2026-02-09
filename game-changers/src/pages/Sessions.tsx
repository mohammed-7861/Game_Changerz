import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SessionCard from '../components/SessionCard';

const Sessions: React.FC = () => {
  useEffect(() => {
    // Load Calendly assets ONCE
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Ensure page always starts at top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="section-padding bg-clean-white" style={{ backgroundImage: "url('/s.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <section className="section-padding">
        <div className="container-max">
          {/* Header */}
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
              Select the format that matches your player&apos;s current level
            </p>
          </motion.div>

          {/* Session Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* U8 */}
            <SessionCard
              title="U8"
              description="Perfect for players who are just discovering the joy of the game."
              ageGroup="Ages 7-8"
              type="available"
              calendlyUrl="https://calendly.com/game__changerz/training_session"
            />

            {/* U10 */}
            <SessionCard
              title="U10"
              description="Great for players who are starting to find their place on the pitch."
              ageGroup="Ages 9–10"
              type="available"
              calendlyUrl="https://calendly.com/game__changerz/soccer-training-session?hide_gdpr_banner=1"
            />

            {/* U12 */}
            <SessionCard
              title="U12"
              description="Ideal for players looking to bridge the gap between small and full-sized play."
              ageGroup="Ages 11-12"
              type="coming-soon"
            />

            {/* U14 */}
            <SessionCard
              title="U14"
              description="Designed for players who are ready for the thrill of the full-field soccer experience."
              ageGroup="Ages 13-14"
              type="coming-soon"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sessions;
