
import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: "The \"Clean\" Touch",
    description: "Tight-space control and elite ball mastery."
  },
  {
    title: "The Creative Spark",
    description: "One-on-one dominance and brave finishing."
  },
  {
    title: "The Game IQ",
    description: "Understanding movement, transitions, and making a impact on the pitch."
  }
];

const SecondNature = () => {
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
    <section className="section-padding bg-clean-white section-pattern">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-soft-charcoal mb-6">
            From Thinking to Instinct.
          </h2>
          <p className="text-lg text-soft-charcoal/70 leading-relaxed mb-8">
            When a player stops thinking about their feet and starts seeing the field, everything changes. Our curriculum is specifically designed for the 7-14 age group—the critical window for developing specialized technical talent.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="focus-item card glass-text border-2 border-sky-blue/30 hover:shadow-md hover:border-fresh-green transition-all duration-200"
            >
              <h4 className="text-lg font-bold text-sky-blue mb-2">
                {area.title}
              </h4>
              <p className="text-soft-charcoal/70 leading-relaxed flex-grow">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondNature;