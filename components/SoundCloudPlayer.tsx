'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function SoundCloudPlayer() {
	return (
		<section
			id="soundcloud"
			className="relative border-t border-white/10 bg-background overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 w-full">
				{/* Lado Izquierdo: Bloque de Información y Círculo Roto (Ref: a0bdd7) */}
				<div className="lg:col-span-5 border-r border-white/10 p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
					<div className="relative z-10">
						<span className="font-mono text-[10px] tracking-[0.5em] text-accent uppercase block mb-6">
							External Stream / Mixes
						</span>
						<h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
							SOUND
							<br />
							CLOUD<span className="not-italic text-accent">.</span>
						</h2>
						<p className="text-sm font-light leading-relaxed text-text-secondary uppercase tracking-widest max-w-xs">
							Sesiones grabadas, podcasts y material exclusivo de estudio.
							Curaduría sonora extendida.
						</p>
					</div>
				</div>

				{/* Lado Derecho: El Player y Acción de Cierre (Estilo Editorial) */}
				<div className="lg:col-span-7 flex flex-col">
					{/* El Reproductor Integrado */}
					<div className="p-8 md:p-16 border-b border-white/10 bg-zinc-900/30">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							className="relative group border border-white/10 p-1 bg-black"
						>
							<iframe
								width="100%"
								height="200"
								scrolling="no"
								frameBorder="no"
								allow="autoplay"
								src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mecie_91&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
								title="SoundCloud Player - Mecie"
								className="grayscale contrast-125 brightness-75 hover:brightness-100 transition-all duration-700"
							/>
						</motion.div>

						<div className="mt-6 flex justify-between items-center font-mono text-[9px] text-text-secondary uppercase tracking-[0.4em]">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
								Live Feed Active
							</div>
							<span>Santiago, CL</span>
						</div>
					</div>

					{/* Bloque de Acción Final (Estilo Ref: image_a0baca) */}
					<motion.a
						href={artist.social.soundcloud}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 p-8 md:p-16 flex items-end justify-between bg-white text-black hover:bg-accent transition-colors group"
					>
						<div>
							<span className="font-mono text-[10px] mb-2 block uppercase tracking-widest font-bold">
								Follow Channel
							</span>
							<h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.8]">
								EXPLORE
								<br />
								FULL FEED
							</h3>
						</div>
						<span className="text-5xl md:text-7xl font-light group-hover:translate-x-4 transition-transform duration-500">
							↗
						</span>
					</motion.a>
				</div>
			</div>
		</section>
	);
}
