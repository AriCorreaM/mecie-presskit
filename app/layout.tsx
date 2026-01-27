import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { artist } from '@/data/artist';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const mono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
});

export const viewport: Viewport = {
	themeColor: '#050505',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	metadataBase: new URL(artist.seo.siteUrl),
	title: {
		default: artist.seo.title,
		template: `%s | ${artist.name}`,
	},
	description: artist.seo.description,
	keywords: artist.seo.keywords,
	authors: [{ name: artist.realName, url: artist.seo.siteUrl }],
	creator: artist.name,
	publisher: artist.name,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'es_CL',
		url: artist.seo.siteUrl,
		siteName: `${artist.name} - Press Kit`,
		title: artist.seo.title,
		description: artist.seo.description,
	},
	twitter: {
		card: 'summary_large_image',
		title: artist.seo.title,
		description: artist.seo.description,
		creator: artist.seo.twitterHandle,
	},
	alternates: {
		canonical: artist.seo.siteUrl,
	},
	category: 'music',
	classification: 'Electronic Music Artist',
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'MusicGroup',
	name: artist.name,
	alternateName: artist.realName,
	description: artist.seo.description,
	url: artist.seo.siteUrl,
	image: `${artist.seo.siteUrl}${artist.seo.ogImage}`,
	genre: artist.genres,
	foundingLocation: {
		'@type': 'Place',
		name: artist.location,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Santiago',
			addressCountry: 'CL',
		},
	},
	sameAs: [
		artist.social.instagram,
		artist.social.spotify,
		artist.social.soundcloud,
		artist.social.youtube,
		artist.social.beatport,
		artist.social.bandcamp,
	],
	email: artist.email,
	member: {
		'@type': 'Person',
		name: artist.realName,
		alternateName: artist.name,
		jobTitle: artist.role,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className="selection:bg-white selection:text-black">
			<head>
				<link rel="manifest" href="/manifest.json" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${inter.variable} ${mono.variable} antialiased bg-background text-text-primary`}
			>
				{/* Líneas de guía decorativas estilo editorial (Opcional) */}
				<div className="fixed inset-0 z-[-1] flex justify-between px-6 md:px-12 pointer-events-none opacity-5">
					<div className="w-[1px] h-full bg-white" />
					<div className="w-[1px] h-full bg-white hidden md:block" />
					<div className="w-[1px] h-full bg-white" />
				</div>

				{children}
			</body>
		</html>
	);
}
