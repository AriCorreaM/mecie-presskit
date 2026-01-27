'use client';
import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function Releases() {
	return (
		<section
			id="releases"
			className="relative py-24 border-t border-white/10 bg-background overflow-hidden"
		>
			{/* Decoración de fondo */}
			<div className="absolute right-[-10%] top-20 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />

			<div className="px-6 md:px-12 relative z-10">
				<header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
					<div className="max-w-xl">
						<span className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase block mb-4">
							{artist.sections.releases.subtitle}
						</span>
						<h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
							{artist.sections.releases.title}<span className="not-italic text-accent">.</span>
						</h2>
					</div>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
					{artist.releases.map((release, index) => (
						<motion.div
							key={`release-${index}`}
							className="group relative border-r border-b border-white/10 p-6 md:p-8 flex flex-col justify-between aspect-[4/3] md:aspect-square hover:bg-zinc-900 transition-colors duration-500"
						>
							<div className="z-10">
								<span className="font-mono text-[10px] mb-2 block opacity-50 text-accent">
									{artist.sections.releases.refPrefix}00{index + 1}
								</span>
								<h3 className="text-2xl font-bold tracking-tighter uppercase leading-tight mb-4">
									{release.title}
								</h3>
							</div>

							<div className="relative z-10 mt-auto">
								<iframe
									src={`https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`}
									width="100%"
									height="80"
									frameBorder="0"
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
									loading="lazy"
									className="grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
								/>
							</div>
						</motion.div>
					))}

					{/* 3. BLOQUE DE CIERRE: El perfil de Spotify como una tarjeta brutalista */}
					<motion.a
						href={artist.social.spotify}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative border-r border-b border-white/10 p-6 md:p-8 flex flex-col justify-between aspect-[4/3] md:aspect-square bg-white text-black transition-all duration-500 hover:invert"
					>
						<div>
							<span className="font-mono text-[10px] mb-2 block uppercase tracking-widest">
								{artist.sections.releases.spotifyCard.label}
							</span>
							<h3 className="text-4xl font-black tracking-tighter uppercase italic leading-[0.8]">
								{artist.sections.releases.spotifyCard.title.split(' ').map((word, i) => (
									<span key={i}>{word}<br /></span>
								))}
							</h3>
						</div>

						<div className="flex justify-between items-end">
							<span className="text-[10px] font-bold uppercase tracking-widest">
								{artist.sections.releases.spotifyCard.cta}
							</span>
							<span className="text-4xl">↗</span>
						</div>
					</motion.a>
				</div>
			</div>
		</section>
	);
}
