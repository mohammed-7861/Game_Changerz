
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Book Your Session",
    description: "Choose a time that works for your player and sign up online."
  },
  {
    number: 2,
    title: "Pay & Get Confirmed",
    description: "$20 per session. Simple payment, instant confirmation. No contracts, no hassle."
  },
  {
    number: 3,
    title: "Show Up & Improve",
    description: "Come ready to work. Leave with more confidence and better skills."
  }
];

const HowItWorks = () => {
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
    <section className="section-padding bg-pastel-yellow section-pattern">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-soft-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-soft-charcoal/70 max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to book your session.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="step-card card glass-text hover:shadow-md hover:border-fresh-green transition-all duration-200">
                <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-soft-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-soft-charcoal/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;