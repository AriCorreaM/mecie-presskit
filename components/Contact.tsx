'use client';

import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function Contact() {
	const mailtoLink = `mailto:${artist.email}`;

	const socialLinks = [
		{ name: 'Instagram', href: artist.social.instagram },
		{ name: 'SoundCloud', href: artist.social.soundcloud },
		{ name: 'Spotify', href: artist.social.spotify },
		{ name: 'YouTube', href: artist.social.youtube },
		{ name: 'Beatport', href: artist.social.beatport },
		{ name: 'Bandcamp', href: artist.social.bandcamp },
	];

	return (
		<section
			id="booking"
			className="relative border-t border-white/10 bg-background overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 w-full">
				{/* Lado Izquierdo: El CTA de Booking Masivo */}
				<div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between min-h-[500px] border-b lg:border-b-0 lg:border-r border-white/10">
					<div>
						<span className="font-mono text-[10px] tracking-[0.5em] text-accent uppercase block mb-8">
							{artist.sections.contact.subtitle}
						</span>
						<motion.h2
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-12"
						>
							{artist.sections.contact.title.split(' ')[0]}
							<br />
							{artist.sections.contact.title.split(' ')[1]}<span className="not-italic text-accent">.</span>
						</motion.h2>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						<p className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] mb-4">
							{artist.sections.contact.emailLabel}
						</p>
						<a
							href={mailtoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg sm:text-2xl md:text-5xl font-light tracking-tighter hover:italic hover:text-accent transition-all duration-300 break-all"
						>
							{artist.email.toUpperCase()}
						</a>
					</motion.div>
				</div>

				{/* Lado Derecho: Redes Sociales Estilo "Créditos" */}
				<div className="lg:col-span-5 flex flex-col">
					<div className="p-8 md:p-16 border-b border-white/10">
						<h3 className="text-xs font-mono uppercase tracking-[0.4em] text-accent mb-12">
							{artist.sections.contact.socialTitle}
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
							{socialLinks.map((link, index) => (
								<motion.a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, x: 10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}
									className="group flex items-center justify-between border-b border-white/5 pb-2"
								>
									<span className="text-lg font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
										{link.name}
									</span>
									<span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
										↗
									</span>
								</motion.a>
							))}
						</div>
					</div>

					{/* Bloque de Cierre con Inversión de Color (Ref: image_a0baca) */}
					<div className="flex-1 bg-white text-black p-8 md:p-16 flex flex-col justify-center gap-4">
						<p className="text-[10px] font-black uppercase tracking-[0.5em]">
							{artist.location}
						</p>
						<p className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic leading-none">
							{artist.name.toUpperCase()} {artist.sections.contact.archiveTitle}
							<br />
							{artist.sections.contact.versionLabel} {artist.pressKitYear}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
