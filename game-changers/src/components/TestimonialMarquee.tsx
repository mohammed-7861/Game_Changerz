import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "My son's confidence exploded after just three sessions. He's finally trying those bold, creative moves in his club games that he used to be too shy to attempt."
  },
  {
    name: "Aria Gupta",
    rating: 5,
    text: "The focus on 'extra touches' really made the game feel like second nature for my daughter. She feels so much more connected to the ball and her teammates now."
  },
  {
    name: "Kevin Chen",
    rating: 4,
    text: "This is the best investment for a rec player looking to bridge the gap to club level. The coaches empower the kids to actually make an impact on the pitch."
  },
  {
    name: "Liam O'Connor",
    rating: 5,
    text: "Game Changers is more than just drills; it's about character. My kids love the supportive, high-energy atmosphere and look forward to every single session."
  },
  {
    name: "Mei Lin",
    rating: 5,
    text: "The skills taught here are amazing. My son went from a hesitant rec player to one of the most confident in his age group. Highly recommend!"
  },
  {
    name: "Rohan Sharma",
    rating: 4,
    text: "Professional, wholesome, and incredibly effective. The transition to high school soccer felt seamless because of the technical foundation built here."
  }
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialMarquee = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-sunshine-yellow fill-sunshine-yellow' : 'text-soft-charcoal/30'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-soft-charcoal/5 overflow-hidden">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-soft-charcoal mb-12"
        >
          What Parents Are Saying
        </motion.h2>

        <div className="relative">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -100 * testimonials.length], // Move by the width of one set of testimonials
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed as needed
                ease: "linear",
              },
            }}
            style={{ width: `${duplicatedTestimonials.length * 350}px` }} // Adjust based on card width
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 bg-clean-white rounded-lg shadow-sm border border-soft-charcoal/10 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-soft-charcoal/80 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-soft-charcoal">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;