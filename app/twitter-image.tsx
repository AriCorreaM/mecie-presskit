import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Mecie - DJ & Producer';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'space-between',
					backgroundColor: '#050505',
					padding: '80px',
					fontFamily: 'system-ui, sans-serif',
				}}
			>
				{/* Top section */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
					}}
				>
					<span
						style={{
							fontSize: '18px',
							color: '#71717a',
							textTransform: 'uppercase',
							letterSpacing: '0.3em',
						}}
					>
						Official Press Kit — 2026
					</span>
				</div>

				{/* Main title */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0',
					}}
				>
					<span
						style={{
							fontSize: '180px',
							fontWeight: 900,
							color: '#ffffff',
							lineHeight: 0.8,
							letterSpacing: '-0.05em',
							fontStyle: 'italic',
						}}
					>
						MECIE
					</span>
					<span
						style={{
							fontSize: '32px',
							color: '#71717a',
							textTransform: 'uppercase',
							letterSpacing: '0.2em',
							marginTop: '24px',
						}}
					>
						DJ / Producer • Santiago, Chile
					</span>
				</div>

				{/* Bottom section */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						alignItems: 'flex-end',
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: '24px',
							fontSize: '14px',
							color: '#71717a',
							textTransform: 'uppercase',
							letterSpacing: '0.2em',
						}}
					>
						<span>Techno</span>
						<span>•</span>
						<span>Minimal</span>
						<span>•</span>
						<span>Deep House</span>
					</div>
					<span
						style={{
							fontSize: '64px',
							fontWeight: 900,
							color: '#ffffff',
							letterSpacing: '-0.05em',
						}}
					>
						SCL
					</span>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
