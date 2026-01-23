import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-fresh-green">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to change your game?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Don't just be another player on the roster. Be the one the other team talks about. Join the Game Changers hub and start playing with "proper" confidence today.
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-white text-fresh-green hover:bg-white/90 inline-block text-lg px-8 py-4"
          >
            Join Game Changers
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;