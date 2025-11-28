'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function Venues() {
  return (
    <section className="section bg-[var(--background)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Venues" subtitle="Clubs where Mecie has performed" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {artist.venues.map((venue, index) => (
            <motion.div
              key={venue}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="chip flex items-center gap-2"
            >
              <MapPin size={14} className="text-[var(--accent-purple)]" />
              {venue}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
