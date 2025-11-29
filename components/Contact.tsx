'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Music2, Music, Youtube, ShoppingBag, Disc, Headphones } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const mailtoLink = `mailto:${artist.email}`;

  const socialLinks = [
    {
      name: 'Instagram',
      href: artist.social.instagram,
      icon: Instagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'SoundCloud',
      href: artist.social.soundcloud,
      icon: Music2,
      color: 'hover:text-orange-500',
    },
    {
      name: 'YouTube',
      href: artist.social.youtube,
      icon: Youtube,
      color: 'hover:text-red-500',
    },
    {
      name: 'Spotify',
      href: artist.social.spotify,
      icon: Music,
      color: 'hover:text-green-500',
    },
    {
      name: 'Beatport',
      href: artist.social.beatport,
      icon: ShoppingBag,
      color: 'hover:text-cyan-400',
    },
    {
      name: 'Bandcamp',
      href: artist.social.bandcamp,
      icon: Disc,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Apple Music',
      href: artist.social.applemusic,
      icon: Headphones,
      color: 'hover:text-rose-400',
    },
  ];

  return (
    <section id="booking" className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle title="Booking" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main CTA button */}
          <a href={mailtoLink} className="btn-primary inline-flex text-lg">
            <Mail size={20} />
            {artist.email}
          </a>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full bg-[var(--background)] p-4 text-[var(--text-secondary)] transition-colors ${link.color}`}
                aria-label={link.name}
                title={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
