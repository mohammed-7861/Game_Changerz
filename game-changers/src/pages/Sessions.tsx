import React from 'react';
import { motion } from 'framer-motion';
import SessionCard from '../components/SessionCard';

const Sessions = () => {
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
              Choose Your Session
            </h1>
            <p className="text-lg text-soft-charcoal/70 max-w-2xl mx-auto">
              Select the program that best fits your player's age group and development goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <SessionCard
              title="7v7 Specialists"
              description="Perfect for U10-U12 players transitioning to competitive formats"
              type="available"
            />
            <SessionCard
              title="9v9 Mastery"
              description="Coming soon - Comprehensive training for U13-U14 players"
              type="coming-soon"
            />
            <SessionCard
              title="11v11 Elite"
              description="Coming soon - Advanced training for U15+ competitive players"
              type="coming-soon"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sessions;