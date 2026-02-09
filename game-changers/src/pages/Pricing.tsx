import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div
      className="min-h-screen section-padding"
      style={{
        backgroundImage: "url('/pb.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="section-padding">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-4">
              High-Level Coaching. Real Value.
            </h1>
            <p className="text-lg text-soft-charcoal/70 max-w-2xl mx-auto mb-8">
              <strong>
                We believe elite development shouldn’t come with an absurd price tag or complicated contracts.
              </strong>
            </p>
          </motion.div>

          {/* Pricing Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
              <div className="text-center text-lg font-semibold text-soft-charcoal">
                📅 No long-term commitments
              </div>
              <div className="text-center text-lg font-semibold text-soft-charcoal">
                👥 Small groups for maximum attention
              </div>
            </div>

            {/* Glass Pricing Card */}
            <div className="text-center">
          <div className="glass-text px-6 py-8 mb-8 max-w-5xl mx-auto rounded-lg shadow-lg border border-soft-charcoal/10">
                <div className="text-6xl font-bold text-fresh-green mb-4">
                  $20
                </div>
                <div className="text-xl text-soft-charcoal/70 mb-6">
                  per session
                </div>
                <p className="text-soft-charcoal/80 leading-relaxed">
                  Whether you bring one player or a whole squad, the price stays simple.
                  We’re here for the love of the game and the growth of the players.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Private Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-soft-charcoal mb-6">
              Looking for a more personal touch?
            </h2>
            <p className="text-lg text-soft-charcoal/70 mb-8 leading-relaxed">
              <strong>
                Reach out for 1-on-1 private mastery sessions tailored to your player’s specific goals.
              </strong>
            </p>

            <Link
              to="/contact"
              className="bg-sky-blue text-white font-bold px-6 py-3 rounded-lg
                         transition-all duration-200
                         hover:scale-105 hover:shadow-lg hover:bg-blue-500
                         inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
