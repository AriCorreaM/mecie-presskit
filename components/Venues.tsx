'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function Venues() {
	return (
		<section
			id="venues"
			className="relative border-t border-white/10 bg-background overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 w-full">
				{/* Lado Izquierdo: Título Masivo (7 columnas) */}
				<div className="lg:col-span-7 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between min-h-[400px]">
					<div>
						<span className="font-mono text-[10px] tracking-[0.5em] text-accent uppercase block mb-8">
							{artist.sections.venues.subtitle}
						</span>
						<motion.h2
							initial={{ x: -30, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]"
						>
							{artist.sections.venues.title.slice(0, 3)}
							<br />
							{artist.sections.venues.title.slice(3)}<span className="not-italic text-accent">.</span>
						</motion.h2>
					</div>

					<div className="mt-12 flex flex-col sm:flex-row gap-2 sm:gap-8 font-mono text-[10px] text-text-secondary uppercase tracking-widest">
						<p>{artist.sections.venues.labels.region}: {artist.region}</p>
						<p>{artist.sections.venues.labels.status}: {artist.touringStatus}</p>
					</div>
				</div>

				{/* Lado Derecho: Lista de Clubs (5 columnas) */}
				<div className="lg:col-span-5 p-8 md:p-12 bg-zinc-900/20">
					<div className="space-y-4">
						{artist.venues.map((venue, index) => (
							<motion.div
								key={venue}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.05 }}
								className="group flex items-baseline gap-4 border-b border-white/5 pb-2 hover:border-white transition-colors cursor-default"
							>
								<span className="font-mono text-[9px] text-accent opacity-40 group-hover:opacity-100">
									{(index + 1).toString().padStart(2, '0')}
								</span>
								<h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase group-hover:italic transition-all">
									{venue}
								</h3>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
