import { SoccerBackground } from './soccer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[75vh] section-padding overflow-hidden">
      { /* Background */}
      <SoccerBackground />

      {/* Content */}
      <div className="relative z-10 container-max h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-soft-charcoal mb-6 leading-tight">
            Teaching Skill. Building Confidence.
          </h1>

          <div className="glass-text px-6 py-5 mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-soft-charcoal/90 leading-relaxed">
              We help players aged 6-14 help turn technical mastery into "second nature" instinct, so they can finally make the impact they're capable of in the games that matter. Whether you want to go on to club, highschool or even just home knowing you played an amazing game, we've got you covered.
            </p>
            </div>

          <Link
            to="/sessions"
            className="bg-sunshine-yellow text-soft-charcoal font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Join a Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;