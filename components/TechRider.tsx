'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artist } from '@/data/artist';

export default function TechRider() {
	return (
		<section
			id="tech-rider"
			className="relative py-24 bg-background border-t border-white/10 overflow-hidden"
		>
			{/* Grid de puntos de fondo */}
			<div className="absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

			<div className="mx-auto max-w-6xl px-6 relative z-10">
				<header className="mb-20 border-l-4 border-white pl-8">
					<span className="font-mono text-[10px] tracking-[0.5em] text-text-secondary uppercase block mb-2">
						{artist.sections.techRider.subtitle} {artist.techRiderVersion}
					</span>
					<h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
						{artist.sections.techRider.title}<span className="not-italic text-accent">.</span>
					</h2>
				</header>

				{/* Grid ajustado a 2 columnas para balancear las 2 imágenes */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20">
					{artist.techRider.images.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-background group relative flex flex-col"
						>
							{/* Contenedor de imagen optimizado */}
							<div className="relative aspect-[16/10] md:aspect-video w-full flex items-center justify-center p-12 overflow-hidden bg-background">
								<div className="relative w-full h-full grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700 ease-out">
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className="object-contain"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>

								{/* Detalles técnicos en las esquinas */}
								<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-white transition-colors" />
								<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 group-hover:border-white transition-colors" />
							</div>

							{/* Info inferior */}
							<div className="p-6 border-t border-white/10 flex justify-between items-center bg-background z-10">
								<div className="flex flex-col">
									<span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent mb-1">
										{artist.sections.techRider.componentPrefix} 0{index + 1}
									</span>
									<span className="text-lg font-bold uppercase tracking-tighter text-text-primary group-hover:text-white transition-colors">
										{image.alt}
									</span>
								</div>
								<span className="font-mono text-xs opacity-10 group-hover:opacity-100 transition-opacity italic">
									{artist.sections.techRider.specPrefix}{index + 1}
								</span>
							</div>
						</motion.div>
					))}
				</div>

				{/* Lista de Equipo */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
					<div className="md:col-span-4">
						<h3 className="text-xl font-bold uppercase tracking-tighter mb-4 italic">
							{artist.sections.techRider.requirementsTitle}
						</h3>
						<p className="text-xs text-text-secondary font-mono leading-relaxed uppercase tracking-wider">
							{artist.sections.techRider.requirementsDescription}
						</p>
					</div>

					<div className="md:col-span-8">
						<div className="space-y-0 border-t border-white/10">
							{artist.techRider.equipment.map((item, index) => (
								<motion.div
									key={item}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white transition-colors duration-300 px-4 cursor-default"
								>
									<div className="flex items-baseline gap-6 group-hover:text-black">
										<span className="font-mono text-[10px] opacity-40">
											0{index + 1}
										</span>
										<p className="text-lg md:text-xl font-light tracking-tight uppercase">
											{item}
										</p>
									</div>
									<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black/30">
										<div className="w-1 h-1 bg-white group-hover:bg-black rounded-full" />
									</div>
								</motion.div>
							))}
						</div>

						<div className="mt-12 p-6 border border-white/5 bg-white/[0.02] flex justify-between items-center">
							<span className="text-[9px] font-mono text-text-secondary uppercase tracking-[0.4em]">
								{artist.sections.techRider.verifiedBy} {artist.name} Studio
							</span>
							<div className="w-12 h-[1px] bg-accent" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
