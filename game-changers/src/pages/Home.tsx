import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Values from '../components/Values';
import TestimonialMarquee from '../components/TestimonialMarquee';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <TestimonialMarquee />
      <HowItWorks />
    </div>
  );
};

export default Home;