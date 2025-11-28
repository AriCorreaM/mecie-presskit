'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="section bg-[var(--background)]">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="About" subtitle="Biography" />

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <div className="gradient-border absolute inset-0 z-10" />
            <Image
              src="/images/about.jpg"
              alt={`${artist.name} - ${artist.role}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Biography text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {artist.biography.map((paragraph, index) => (
              <p
                key={index}
                className="text-[var(--text-secondary)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Genre tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {artist.genres.map((genre) => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
