'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function Collaborations() {
	return (
		<section
			id="collaborations"
			className="relative border-t border-white/10 bg-background overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 w-full">
				{/* Lado Izquierdo: Lista de Artistas (5 columnas) - Invertido respecto a Venues */}
				<div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 order-2 lg:order-1">
					<div className="grid grid-cols-1 gap-y-3">
						{artist.collaborations.map((collab, index) => (
							<motion.div
								key={collab}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.05 }}
								className="group flex items-center justify-between"
							>
								<h3 className="text-xl md:text-3xl font-bold tracking-tighter uppercase opacity-40 group-hover:opacity-100 group-hover:italic transition-all">
									{collab}
								</h3>
								<span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>
						))}
					</div>
				</div>

				{/* Lado Derecho: Título y Bloque de Color (7 columnas) */}
				<div className="lg:col-span-7 bg-white text-black p-8 md:p-16 flex flex-col justify-between min-h-[400px] order-1 lg:order-2">
					<div>
						<span className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-8 opacity-60">
							{artist.sections.collaborations.subtitle}
						</span>
						<motion.h2
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]"
						>
							{artist.sections.collaborations.title.slice(0, 4)}
							<br />
							{artist.sections.collaborations.title.slice(4)}<span className="not-italic">.</span>
						</motion.h2>
					</div>

					<div className="mt-12">
						<p className="text-[10px] font-bold uppercase tracking-[0.3em] max-w-[200px]">
							{artist.collaborationsDescription}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
