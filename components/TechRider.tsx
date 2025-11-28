'use client';

import { motion } from 'framer-motion';
import { Disc3, Speaker, Monitor } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

const icons = [Disc3, Disc3, Speaker];

export default function TechRider() {
  return (
    <section className="section bg-[var(--background)]">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="Technical Rider" subtitle="Equipment requirements" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {artist.techRider.map((item, index) => {
            const Icon = icons[index] || Monitor;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gradient-border flex items-start gap-4 p-4"
              >
                <div className="rounded-lg bg-[var(--background-secondary)] p-3">
                  <Icon size={24} className="text-[var(--accent-purple)]" />
                </div>
                <p className="flex-1 pt-2 text-[var(--text-secondary)]">{item}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
