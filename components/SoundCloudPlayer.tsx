'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function SoundCloudPlayer() {
  return (
    <section className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Music" subtitle="Latest tracks on SoundCloud" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mecie_91&color=%239333ea&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            title="SoundCloud Player - Mecie"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
