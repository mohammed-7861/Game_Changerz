import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/spikeballclubrb/soccer-training-session?hide_gdpr_banner=1'
      });
    }
    return false;
  };

  return (
    <section className="bg-sky-blue/20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-soft-charcoal mb-6 leading-tight">
            Where "Techy" Skill Meets Total Confidence.
          </h1>
          <p className="text-lg md:text-xl text-soft-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap from Rec to Elite. We help players aged 10-15 turn technical mastery into "second nature" instinct, so they can finally make the impact they're capable of in the games that matter.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalendlyClick}
            className="bg-sunshine-yellow text-soft-charcoal font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;