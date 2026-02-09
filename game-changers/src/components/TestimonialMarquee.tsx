
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
// allow for stars to be partially filled?


const testimonials = [
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "My son's confidence exploded after just three sessions. He's finally trying those bold, creative moves in his club games that he used to be too shy to attempt."
  },
  {
    name: "Kevin Chen",
    rating: 4,
    text: "This is the best investment for a rec player looking to bridge the gap to club level. The coaches empower the kids to actually make an impact on the pitch."
  },
  {
    name: "Aria Gupta",
    rating: 5,
    text: "The focus on 'extra touches' really made the game feel like second nature for my daughter. She feels so much more connected to the ball and her teammates now."
  },

  {
    name: "Liam O'Connor",
    rating: 5,
    text: "Game Changerz is more than just drills; it's about character. My kids love the supportive, high-energy atmosphere and look forward to every single session."
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


const TestimonialMarquee = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16 * 1.1}
        className={`${index < rating ? 'text-sunshine-yellow fill-sunshine-yellow' : 'text-soft-charcoal/30'}`}
      />
    ));
  }

  return (
    <section className="py-16 bg-sky-blue/10 section-pattern">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-soft-charcoal mb-12"
        >
          What Parents Are Saying <br />
          <span className="text-sm text-soft-charcoal/50">
            Real Testimonials
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex flex-wrap justify-center gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] glass-text p-6 hover:shadow-md hover:border-fresh-green transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-soft-charcoal/80 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-fresh-green text-right">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;