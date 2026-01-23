import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: "01.",
    title: "Technical Mastery (The \"Techy\" Edge)",
    description: "We believe in high-volume repetition. By getting more touches in one hour than they might get in a month of team practice, we build the muscle memory that makes elite play feel like a reflex."
  },
  {
    number: "02.",
    title: "Empowered Impact",
    description: "It's not just about the drill; it's about the decision. We empower our \"brilliant lads\" to take risks, try the nutmeg, and drive the ball forward. We don't just build players; we build game-changers."
  },
  {
    number: "03.",
    title: "Connection & Community",
    description: "We aren't a bland, corporate academy. We are a \"proper\" footy hub. We connect players from different backgrounds, creating a supportive squad where every player feels uplifted to reach their next level."
  }
];

const ThreePillars = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-soft-charcoal/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-soft-charcoal mb-4">
            The Three Pillars
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="pillars-grid"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="pillar-card card"
            >
              <div className="text-3xl font-bold text-sky-blue mb-4">
                {pillar.number}
              </div>
              <h3 className="text-xl font-bold text-soft-charcoal mb-4">
                {pillar.title}
              </h3>
              <p className="text-soft-charcoal/70 leading-relaxed flex-grow">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillars;