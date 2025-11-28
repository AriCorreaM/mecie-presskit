'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Music2, Music } from 'lucide-react';
import { artist } from '@/data/artist';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const mailtoLink = `mailto:${artist.email}?subject=${encodeURIComponent(
    'Booking Request - Mecie'
  )}&body=${encodeURIComponent(
    'Hola Mecie,\n\nMe gustaría contactarte para un booking.\n\nNombre: \nFecha: \nVenue/Evento: \nMensaje: \n\nSaludos'
  )}`;

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
      name: 'Spotify',
      href: artist.social.spotify,
      icon: Music,
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section id="contact" className="section bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle title="Contact" subtitle="Get in touch for bookings" />

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
            Contact for Booking
          </a>

          {/* Email display */}
          <p className="text-[var(--text-secondary)]">
            or email directly at{' '}
            <a
              href={`mailto:${artist.email}`}
              className="text-[var(--accent-cyan)] transition-colors hover:text-[var(--accent-purple)]"
            >
              {artist.email}
            </a>
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-4">
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
