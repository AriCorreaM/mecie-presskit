'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { artist } from '@/data/artist';

export default function Gallery() {
	const INITIAL_COUNT = 4;
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const openLightbox = (index: number) => {
		setSelectedIndex(index);
	};

	const closeLightbox = () => {
		setSelectedIndex(null);
	};

	const goToPrevious = useCallback(() => {
		if (selectedIndex === null) return;
		setSelectedIndex(
			selectedIndex === 0 ? artist.gallery.length - 1 : selectedIndex - 1,
		);
	}, [selectedIndex]);

	const goToNext = useCallback(() => {
		if (selectedIndex === null) return;
		setSelectedIndex(
			selectedIndex === artist.gallery.length - 1 ? 0 : selectedIndex + 1,
		);
	}, [selectedIndex]);

	useEffect(() => {
		if (selectedIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedIndex]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedIndex === null) return;
			if (e.key === 'Escape') closeLightbox();
			if (e.key === 'ArrowLeft') goToPrevious();
			if (e.key === 'ArrowRight') goToNext();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [selectedIndex, goToPrevious, goToNext]);

	return (
		<section
			id="gallery"
			className="relative py-24 bg-background border-t border-white/10"
		>
			<div className="px-6 md:px-12">
				{/* Título de sección asimétrico */}
				<div className="mb-16 flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-8">
					<h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic">
						{artist.sections.gallery.title}<span className="not-italic text-4xl md:text-7xl">.</span>
					</h2>
					<span className="font-mono text-[10px] tracking-[0.5em] text-text-secondary uppercase">
						{artist.sections.gallery.subtitle}
					</span>
				</div>

				{/* Cuadrícula Rota Estilo Brutalista */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
					{artist.gallery.slice(0, visibleCount).map((photo, index) => (
						<motion.div
							key={photo.src}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							onClick={() => openLightbox(index)}
							className={`
                relative cursor-pointer overflow-hidden transition-all duration-700
                ${
									index % 4 === 0
										? 'md:col-span-8 aspect-[16/9]'
										: index % 4 === 1
											? 'md:col-span-4 aspect-square'
											: index % 4 === 2
												? 'md:col-span-5 aspect-[4/5]'
												: 'md:col-span-7 aspect-[16/7]'
								}
              `}
						>
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								className="object-cover transition-transform duration-1000 hover:scale-105"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							{/* Overlay de número de archivo */}
							<div className="absolute bottom-4 left-4 font-mono text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
								{artist.sections.gallery.imagePrefix}00{index + 1}
							</div>
						</motion.div>
					))}
				</div>

				{visibleCount < artist.gallery.length && (
					<div className="flex justify-center mt-12">
						<button
							onClick={() => setVisibleCount(artist.gallery.length)}
							className="border border-white/20 px-8 py-3 text-[10px] uppercase tracking-[0.5em] font-mono hover:bg-white hover:text-black transition-colors duration-500"
						>
							Cargar más
						</button>
					</div>
				)}
			</div>

			{/* Lightbox Minimalista */}
			<AnimatePresence>
				{selectedIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
						onClick={closeLightbox}
					>
						{/* Controles del Lightbox */}
						<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-[110]">
							<span className="font-mono text-[10px] tracking-widest">
								{selectedIndex + 1} / {artist.gallery.length}
							</span>
							<button
								onClick={closeLightbox}
								className="hover:rotate-90 transition-transform duration-300"
							>
								<X size={32} strokeWidth={1} />
							</button>
						</div>

						<button
							onClick={(e) => {
								e.stopPropagation();
								goToPrevious();
							}}
							className="absolute left-2 md:left-6 z-[110] opacity-50 md:opacity-30 hover:opacity-100 transition-opacity"
						>
							<ChevronLeft size={32} strokeWidth={1} className="md:w-12 md:h-12" />
						</button>

						<button
							onClick={(e) => {
								e.stopPropagation();
								goToNext();
							}}
							className="absolute right-2 md:right-6 z-[110] opacity-50 md:opacity-30 hover:opacity-100 transition-opacity"
						>
							<ChevronRight size={32} strokeWidth={1} className="md:w-12 md:h-12" />
						</button>

						{/* Imagen Principal */}
						<motion.div
							key={selectedIndex}
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							className="relative w-full h-[70vh] max-w-6xl"
							onClick={(e) => e.stopPropagation()}
						>
							<Image
								src={artist.gallery[selectedIndex].src}
								alt={artist.gallery[selectedIndex].alt}
								fill
								className="object-contain"
								priority
							/>
						</motion.div>

						{/* Texto de metadata en el pie del lightbox */}
						<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs">
							<p className="text-[10px] uppercase tracking-[0.4em] text-text-secondary">
								{artist.gallery[selectedIndex].alt || artist.sections.gallery.fallbackAlt}
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
