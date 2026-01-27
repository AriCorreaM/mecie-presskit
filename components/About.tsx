'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artist } from '@/data/artist';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen border-t border-white/10 bg-background overflow-hidden">
      {/* 1. Header Brutalista (Inspirado en la Ref. JW S) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full border-b border-white/10">
        <div className="md:col-span-4 bg-white p-8 md:p-12 flex flex-col justify-between items-start min-h-[300px]">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-black italic leading-[0.8]"
          >
            {artist.sections.about.title}<span className="not-italic text-4xl md:text-7xl">.</span>
          </motion.h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-black">
            {artist.name} — {artist.sections.about.subtitle}
          </p>
        </div>

        {/* 2. Bloque de Texto Principal */}
        <div className="md:col-span-8 p-8 md:p-24 flex flex-col justify-center border-l border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-text-primary mb-8">
              {artist.biography[0]}
            </p>
            <div className="h-[1px] w-20 bg-accent mb-8" />
            <div className="space-y-4">
              {artist.biography.slice(1).map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base text-text-secondary leading-relaxed uppercase tracking-wider font-mono opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Imagen y Tags (Layout Desplazado) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        <div className="md:col-span-7 relative h-[500px] md:h-[700px] grayscale contrast-150 border-r border-white/10">
          <Image
            src={artist.images.about}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="60vw"
          />
          {/* Overlay de grano sutil solo en la imagen */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-end gap-12">
          {/* Genre Tags Estilo Minimalista */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-text-secondary">{artist.sections.about.genresLabel}</span>
            <div className="flex flex-wrap gap-2">
              {artist.genres.map((genre) => (
                <span key={genre} className="border border-white/20 px-4 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-default">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Dato Técnico / Ubicación */}
          <div className="border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] text-text-secondary leading-loose">
              {artist.sections.about.labels.origin}: {artist.location.toUpperCase()}<br />
              {artist.sections.about.labels.established}: {artist.establishedYear}<br />
              {artist.sections.about.labels.format}: {artist.formats.join(' / ').toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}