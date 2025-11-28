'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function RecordLabels() {
  return (
    <section className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Record Labels" subtitle="Released on" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
          {artist.labels.map((label, index) => (
            <motion.div
              key={label.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="label-circle relative overflow-hidden">
                <Image
                  src={label.logo}
                  alt={label.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-center text-sm text-[var(--text-secondary)]">
                {label.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
