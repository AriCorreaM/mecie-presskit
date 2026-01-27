'use client';
import { motion } from 'framer-motion';
import { artist } from '@/data/artist';

export default function Hero() {
	return (
		<section className="relative min-h-[110vh] flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b border-white/5">
			{/* Fondo: Imagen de montaña con mucho contraste (Ref: image_a0c157) */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
				{/* Asegúrate que esta sea B&N y alto contraste */}
				<img
					src={artist.images.hero}
					alt={`${artist.name} Background`}
					className="w-full h-full object-cover grayscale contrast-125 opacity-40"
				/>
			</div>

			<div className="relative z-10 flex flex-col md:flex-row justify-between items-start mt-24">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					className="max-w-2xl"
				>
					<span className="text-xs tracking-[0.6em] uppercase text-text-secondary block mb-6">
						{artist.sections.hero.subtitle} — {artist.pressKitYear}
					</span>
					<h1 className="hero-name flex flex-col">
						<span>{artist.sections.hero.nameParts[0]}</span>
						<span className="md:ml-24 opacity-80">{artist.sections.hero.nameParts[1]}</span>
					</h1>
				</motion.div>

				{/* Elemento gráfico (Ref: Círculo minimalista) */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
					className="hidden lg:flex w-64 h-64 circular-element opacity-20 mr-20"
				>
					<div className="w-[80%] h-[80%] border border-white/10 rounded-full flex items-center justify-center">
						<div className="w-2 h-2 bg-white rounded-full" />
					</div>
				</motion.div>
			</div>

			<div className="relative z-10 flex flex-col md:flex-row justify-between items-end pb-12 gap-8">
				<div className="md:w-1/3 text-sm uppercase tracking-widest leading-relaxed text-text-secondary italic">
					&ldquo;{artist.role} basado en {artist.location}. {artist.tagline}&rdquo;
				</div>

				<div className="flex gap-4">
					<div className="h-[1px] w-12 md:w-20 bg-white/20 self-center" />
					<span className="text-4xl md:text-6xl font-black tracking-tighter">{artist.cityCode}</span>
				</div>
			</div>
		</section>
	);
}
