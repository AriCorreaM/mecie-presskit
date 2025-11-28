'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function Releases() {
  return (
    <section id="releases" className="section bg-[var(--background)]">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Releases" subtitle="Latest tracks" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {artist.releases.map((release, index) => (
            <motion.div
              key={`release-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl"
            >
              <iframe
                src={`https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={release.title}
                className="rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
