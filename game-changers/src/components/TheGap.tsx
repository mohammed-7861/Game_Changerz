import React from 'react';
import { motion } from 'framer-motion';

const TheGap = () => {
  return (
    <section className="section-padding bg-clean-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-soft-charcoal mb-6">
            Is your player stuck in the "Middle Ground"?
          </h2>
          <p className="text-lg text-soft-charcoal/70 mb-4 leading-relaxed">
            Many talented youth players have the heart, but when the game speeds up, they hesitate. They play it safe because they're worried about making mistakes.
          </p>
          <p className="text-lg text-soft-charcoal/70 leading-relaxed">
            At <strong>Game Changers</strong>, we identify <u>The Gap</u>—that space between having the skill and having the confidence to use it. Whether they are looking to jump from Rec to Club or Club to High School, we provide a training environment where bravery is rewarded and "extra touches" are the foundation of every session.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheGap;