'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Disc3, Speaker, CircleDot } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

const icons = [Disc3, Disc3, CircleDot, Speaker];

export default function TechRider() {
  return (
    <section className="section bg-[var(--background)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Technical Rider" subtitle="Equipment requirements" />

        {/* Equipment images grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {artist.techRider.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative h-32 w-32 md:h-40 md:w-40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <span className="mt-2 text-center text-xs text-[var(--text-secondary)]">
                {image.alt}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Equipment list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {artist.techRider.equipment.map((item, index) => {
            const Icon = icons[index] || Disc3;
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
                  <Icon size={24} className="text-[var(--text-secondary)]" />
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
