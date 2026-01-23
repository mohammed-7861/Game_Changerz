import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap, Heart } from 'lucide-react';

const values = [
  {
    icon: AlertCircle,
    title: "The Confidence Gap",
    description: "Most kids want to make an impact but lack the confidence to try things in 'games that matter.'",
    color: "text-red-500"
  },
  {
    icon: Zap,
    title: "Extra Touches, Techy Skills",
    description: "We provide the extra touches and 'techy' skills needed to make high-level play feel like instinct.",
    color: "text-sky-blue"
  },
  {
    icon: Heart,
    title: "Connection, Empowerment, Mastery",
    description: "Building players who are technically sound, mentally confident, and deeply connected to the beautiful game.",
    color: "text-fresh-green"
  }
];

const Values = () => {
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
    <section className="section-padding bg-clean-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="card">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} className={value.color} />
                  </div>
                  <h3 className="text-xl font-bold text-soft-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-soft-charcoal/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;