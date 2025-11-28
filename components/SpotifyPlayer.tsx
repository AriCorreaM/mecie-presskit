'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function SpotifyPlayer() {
  return (
    <section className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Music" subtitle="Listen on Spotify" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <iframe
            src={`https://open.spotify.com/embed/artist/${artist.spotifyArtistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player - Mecie"
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
