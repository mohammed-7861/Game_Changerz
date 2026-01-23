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
    <section className="bg-sky-blue section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-soft-charcoal mb-6 leading-tight">
            Where Confidence Becomes Second Nature
          </h1>
          <p className="text-lg md:text-xl text-soft-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering players aged 10-15 to bridge the gap from Rec to Club and High School through technical mastery and connection.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalendlyClick}
            className="btn-primary text-lg px-8 py-4"
          >
            Book Your Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;