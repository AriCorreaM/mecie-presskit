'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
	title: string;
	subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className="mb-12 text-center"
		>
			<h2 className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent text-4xl font-black tracking-tighter md:text-6xl uppercase">
				{title}
			</h2>
			{subtitle && (
				<p className="mt-3 text-[var(--text-secondary)]">{subtitle}</p>
			)}
		</motion.div>
	);
}
