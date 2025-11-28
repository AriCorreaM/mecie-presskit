'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function Collaborations() {
  return (
    <section className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Collaborations"
          subtitle="Artists Mecie has shared the stage with"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {artist.collaborations.map((collab, index) => (
            <motion.div
              key={collab}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="chip flex items-center gap-2"
            >
              <Users size={14} className="text-[var(--accent-cyan)]" />
              {collab}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
