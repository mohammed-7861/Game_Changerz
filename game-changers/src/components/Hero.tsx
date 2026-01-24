import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-sky-blue/20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-soft-charcoal mb-6 leading-tight">
            Teaching Skill. Building Confidence.
          </h1>
          <p className="text-lg md:text-xl text-soft-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help players aged 7-14 turn technical mastery into "second nature" instinct, so they can finally make the impact they're capable of in the games that matter. Whether you want to go on to club, highschool or even just home knowing you played an amaing game, we've got you covered.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/sessions"
              className="bg-sunshine-yellow text-soft-charcoal font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg inline-block"
            >
              Book a Session
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;