'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { artist } from '@/data/artist';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hero image background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about/hero1.png)' }}
      />

      {/* Gradient overlay on top of image - only at edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />

      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Artist name */}
          <h1 className="hero-name mb-4 text-6xl tracking-[0.3em] md:text-8xl lg:text-9xl">
            <span className="gradient-text">{artist.name}</span>
          </h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-xl font-light tracking-widest text-[var(--text-secondary)] md:text-2xl"
          >
            {artist.role}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-[var(--text-secondary)]"
          >
            <MapPin size={18} className="text-[var(--text-secondary)]" />
            <span className="tracking-wide">{artist.location}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
