import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Coach {
  id: string;
  name: string;
  title: string;
  professionalImage: string;
  casualImage: string;
  credentials: string[];
  bio: string;
}

const coachesData: Coach[] = [
  {
    id: 'mo',
    name: "Mohammed",
    title: "Coach ",
    professionalImage: "/mo-for.JPG",
    casualImage: "/mo-inf.PNG",
    credentials: [
      "5+ years of ECNL soccer experience",
      "Played for the 2nd best team in the country at the U16 level",
      "RB Rec Referee for 8+ years",
      "Graduated from RB High in 2025"
    ],
    bio:"Throughout my soccer journey, I've been fortunate to experience the game at various levels. Yet, I always felt the lack for an enviornment where I could grow as a player outside of the usual practice and games. More importantly, I wish that I was able to work with players that had been through the soccer system and could guide me through each step of the process. Which is why I am excited to share my knowldge and expereince with players who are looking to transform their game. Outside of soccer, I am an electrical engineering student at Miramar College. And I am impecable at ping pong. "
    
  }
];

const Coaches = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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

  const cardHoverVariants = {
    initial: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: { 
      y: -8, 
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/cb.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-4">
              Meet Your Coaches
            </h1>
            <p className="text-lg text-soft-charcoal/70 max-w-2xl mx-auto">
              We are coaches who combine technical mastery with genuine passion for player development. We believe in empowering young players to reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {coachesData.map((coach) => (
              <motion.div
                key={coach.id}
                variants={itemVariants}
                initial="initial"
                whileHover="hover"
                className="flex flex-col h-full"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="card glass-text overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-fresh-green"
                >
                  {/* Image Section - two images side by side on desktop */}
                  <div className="mb-6 -mx-6 -mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-gradient-to-br from-sky-blue/5 to-fresh-green/5">
                      {/* Professional Image */}
                      <div className="coach-card-img-wrap relative rounded-lg shadow-sm border border-soft-charcoal/10 bg-soft-charcoal/5">
                        <img
                          src={coach.professionalImage}
                          alt={`${coach.name} - Professional`}
                          width={1200}
                          height={627}
                          decoding="async"
                          fetchPriority="high"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Casual Image */}
                      <div className="coach-card-img-wrap relative rounded-lg shadow-sm border border-soft-charcoal/10 bg-soft-charcoal/5">
                        <img
                          src={coach.casualImage}
                          alt={`${coach.name} - Casual`}
                          width={1200}
                          height={627}
                          decoding="async"
                          fetchPriority="high"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow flex flex-col">
                    {/* Name and Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-soft-charcoal">
                        {coach.name}
                      </h3>
                      <p className="text-sm font-semibold text-sky-blue mt-1">
                        {coach.title}
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {coach.credentials.map((credential, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-soft-charcoal/75"
                          >
                            <span className="text-fresh-green font-bold mr-3 flex-shrink-0">
                              ✓
                            </span>
                            <span>{credential}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bio - Grows to fill available space */}
                    <p className="text-soft-charcoal/70 leading-relaxed text-sm flex-grow">
                      {coach.bio}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-soft-charcoal mb-6">
              Ready?
            </h2>
            <p className="text-lg text-soft-charcoal/70 mb-8">
              Take the first step towards unlocking your player's potential. Join a session today and see the difference expert coaching can make.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sessions"
                className="bg-sunshine-yellow text-soft-charcoal font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg inline-block"
              >
                Book a Session
              </Link>
              <Link
                to="/contact"
                className="bg-sky-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
