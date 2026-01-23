import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-clean-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-4">
              Simple, Honest Pricing
            </h1>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-16"
          >
            <div className="card text-center">
              <div className="text-6xl font-bold text-sky-blue mb-4">
                $25
              </div>
              <div className="text-xl text-soft-charcoal/70 mb-6">
                per session
              </div>
              <p className="text-soft-charcoal/80 leading-relaxed">
                No hidden fees, no matter the group size. We believe in accessible, high-quality footy for every player ready to level up.
              </p>
            </div>
          </motion.div>

          {/* Private Sessions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-soft-charcoal mb-6">
              Looking for 1-on-1 Private Training?
            </h2>
            <p className="text-lg text-soft-charcoal/70 mb-8 leading-relaxed">
              Reach out below for a custom schedule tailored to your player's needs. We'll work with you to create the perfect training program.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;