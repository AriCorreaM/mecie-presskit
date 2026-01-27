'use client';

import { artist } from '@/data/artist';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-white text-black py-16 border-t border-black/10">
			<div className="mx-auto max-w-6xl px-6">
				{/* Grilla Principal: 4 columnas balanceadas */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
					{/* 01. Identidad */}
					<div className="space-y-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">
							{artist.sections.footer.identityLabel}
						</span>
						<div className="space-y-1">
							<h3 className="text-2xl font-black tracking-tighter uppercase italic">
								{artist.name.toUpperCase()}<span className="not-italic text-xs ml-1">©</span>
							</h3>
							<p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
								{artist.role} / {artist.location}
							</p>
						</div>
					</div>

					{/* 02. Navegación Silenciosa */}
					<div className="space-y-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">
							{artist.sections.footer.indexLabel}
						</span>
						<ul className="grid grid-cols-1 gap-2 text-[11px] font-bold uppercase tracking-tighter">
							{artist.navigation.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="hover:opacity-40 transition-opacity italic"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* 03. Studio / Credit */}
					<div className="space-y-4">
						<span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">
							{artist.sections.footer.productionLabel}
						</span>
						<div className="space-y-2">
							<p className="text-[11px] font-bold uppercase tracking-widest opacity-60">
								{artist.sections.footer.craftedBy}
							</p>
							<a
								href={artist.credits.studioUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-0.5 hover:bg-black hover:text-white transition-all"
							>
								{artist.credits.studio.toUpperCase()} ↗
							</a>
						</div>
					</div>

					{/* 04. Legal / Time */}
					<div className="space-y-4 lg:text-right">
						<span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">
							{artist.sections.footer.protocolLabel}
						</span>
						<div className="space-y-1 text-[10px] font-mono leading-relaxed opacity-60 uppercase tracking-widest">
							<p>{artist.sections.footer.allRightsReserved}</p>
							<p>{artist.cityCode} / {artist.establishedYear} — {currentYear}</p>
							<p>Ref: {artist.pressKitVersion}</p>
						</div>
					</div>
				</div>

				{/* Línea final de cierre estético */}
				<div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center opacity-30">
					<div className="flex gap-4">
						<div className="w-12 h-px bg-black" />
						<div className="w-4 h-px bg-black" />
					</div>
					<span className="font-mono text-[8px] uppercase tracking-[0.8em]">
						{artist.sections.footer.endOfDocument}
					</span>
				</div>
			</div>
		</footer>
	);
}
