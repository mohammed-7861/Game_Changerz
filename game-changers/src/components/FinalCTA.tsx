
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-fresh-green/70">
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
            Don't just be another player on the roster. Be the one the other team talks about. Join the <strong>Game Changerz</strong> , and start playing with confidence today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/sessions"
              className="bg-sunshine-yellow text-soft-charcoal font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >Join a Session</Link>
          </motion.div>
        </motion.div> 
      </div>
    </section>
  );
};

export default FinalCTA;