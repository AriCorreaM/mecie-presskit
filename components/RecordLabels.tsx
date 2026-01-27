'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artist } from '@/data/artist';

export default function RecordLabels() {
	return (
		<section className="relative py-24 bg-background border-t border-white/10 overflow-hidden">
			{/* Fondo: Círculo topográfico sutil (Ref: a0bdb2) */}
			<div className="absolute left-[-5%] bottom-[-10%] w-96 h-96 border border-white/[0.03] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-6xl px-6 relative z-10">
				<header className="mb-16 flex items-baseline justify-between border-b border-white/10 pb-6">
					<h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
						LABELS
						<span className="text-outline text-4xl md:text-6xl not-italic ml-2">
							.
						</span>
					</h2>
					<span className="font-mono text-[10px] tracking-[0.5em] text-text-secondary uppercase">
						Affiliations / Partners
					</span>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
					{artist.labels.map((label, index) => (
						<motion.div
							key={label.name}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative bg-background p-8 min-h-[200px] flex flex-col justify-between hover:bg-white transition-colors duration-500"
						>
							{/* Decoración: ID de catálogo */}
							<div className="flex justify-between items-start transition-colors group-hover:text-black">
								<span className="font-mono text-[10px] tracking-widest opacity-50 uppercase">
									Label ID: 00{index + 1}
								</span>
								<div className="w-2 h-2 rounded-full border border-current opacity-30 group-hover:animate-ping" />
							</div>

							{/* Logo y Nombre */}
							<div className="flex flex-col gap-6">
								<div className="relative w-16 h-16 grayscale contrast-125 brightness-75 group-hover:brightness-0 transition-all duration-500">
									<Image
										src={label.logo}
										alt={label.name}
										fill
										className="object-contain"
									/>
								</div>
								<div>
									<h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase group-hover:text-black transition-colors">
										{label.name}
									</h3>
									<p className="text-[9px] font-mono tracking-[0.3em] text-text-secondary group-hover:text-black/60 uppercase">
										Official Imprint
									</p>
								</div>
							</div>

							{/* Efecto de línea de "escaneo" al hacer hover */}
							<div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-700" />
						</motion.div>
					))}
				</div>

				{/* Cierre estético estilo pie de página de catálogo */}
				<div className="mt-12 flex flex-col md:flex-row justify-between text-[9px] font-mono text-text-secondary uppercase tracking-[0.4em]">
					<p>{artist.name} sonic signatures documented globally</p>
					<p>© {artist.pressKitYear} Archive Series</p>
				</div>
			</div>
		</section>
	);
}
