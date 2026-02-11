export const artist = {
	name: 'Mecie',
	realName: 'Jorge González',
	role: 'DJ / Producer',
	location: 'Santiago, Chile',
	cityCode: 'SCL',
	region: 'South America',
	country: 'Chile',
	email: 'Jorgegmusic91@gmail.com',
	soundcloudUrl: 'https://soundcloud.com/mecie_91',

	// Dates
	establishedYear: 2024,
	pressKitYear: 2026,
	pressKitVersion: 'MC_PK_V1',

	// SEO
	seo: {
		siteUrl: 'https://meciemusic.cl',
		title: 'Mecie | DJ & Producer - Techno, Minimal, Deep House',
		description:
			'Press Kit oficial de Mecie, DJ y productor de música electrónica de Santiago, Chile. Especializado en Techno, Minimal y Deep House. Booking, releases y más.',
		keywords: [
			'Mecie',
			'DJ',
			'Producer',
			'Techno',
			'Minimal',
			'Deep House',
			'Santiago',
			'Chile',
			'Electronic Music',
			'Press Kit',
			'Booking',
		],
		ogImage: '/images/og-image.jpg',
		twitterHandle: '@mecie_music',
	},

	// Images
	images: {
		hero: '/images/hero.jpeg',
		about: '/images/about/about1.jpeg',
		ogImage: '/images/og-image.jpg',
	},

	// Taglines & descriptions
	tagline: 'Explorando paisajes sonoros minimalistas.',
	formats: ['Digital', 'Vinyl'],
	touringStatus: 'Active Touring',
	collaborationsDescription:
		'Artistas con los que Mecie ha compartido cabina y estudio.',

	// Tech rider
	techRiderVersion: '1.2',

	// Credits
	credits: {
		studio: 'BKSTG Studio',
		studioUrl: 'https://bkstgstudio.cl',
	},

	// Navigation
	navigation: [
		{ label: '01 Identity', href: '#about' },
		{ label: '02 Sound Archive', href: '#releases' },
		{ label: '03 Visuals', href: '#gallery' },
		{ label: '04 Contact', href: '#booking' },
	],

	// Section Content
	sections: {
		hero: {
			subtitle: 'Official Press Kit',
			nameParts: ['ME', 'CIE'],
		},
		about: {
			title: 'BIO',
			subtitle: 'Selected Biography',
			genresLabel: 'Sound Signature',
			labels: {
				origin: 'ORIGIN',
				established: 'EST',
				format: 'FORMAT',
			},
		},
		releases: {
			title: 'RELEASES',
			subtitle: 'Digital Catalog',
			refPrefix: 'REF. MC-',
			spotifyCard: {
				label: 'Protocol / External Link',
				title: 'FULL DISCOGRAPHY',
				cta: 'Listen on Spotify',
			},
		},
		gallery: {
			title: 'Visual',
			subtitle: 'Press / Documentation / Archive',
			imagePrefix: 'IMG_',
			fallbackAlt: 'Press Photo',
		},
		venues: {
			title: 'LOCATE',
			subtitle: 'Tour Log / Location History',
			labels: {
				region: 'Region',
				status: 'Status',
			},
		},
		collaborations: {
			title: 'COMPARTIDO ESCENARIO CON',
			subtitle: 'Shared Stage With / Archive',
		},
		techRider: {
			title: 'EQUIPMENT',
			subtitle: 'Technical Specification / Rider',
			componentPrefix: 'Component',
			specPrefix: 'SPEC_DOC_',
			requirementsTitle: 'Requirements',
			requirementsDescription:
				'Equipo obligatorio para performance. Consultar cambios con antelación.',
			verifiedBy: 'Tech Rider Verified by',
		},
		labels: {
			title: 'LABELS',
			subtitle: 'Affiliations / Partners',
			idPrefix: 'Label ID:',
			imprint: 'Official Imprint',
			footerText: 'sonic signatures documented globally',
			archiveText: 'Archive Series',
		},
		contact: {
			title: "LET'S TALK",
			subtitle: 'Booking Protocol / Inquiry',
			emailLabel: 'Direct Mailbox:',
			socialTitle: 'Digital Network',
			archiveTitle: 'ARCHIVE',
			versionLabel: 'VERSION',
		},
		footer: {
			identityLabel: 'Identity',
			indexLabel: 'Index',
			productionLabel: 'Production',
			craftedBy: 'Crafted by',
			protocolLabel: 'Protocol',
			allRightsReserved: 'All Rights Reserved',
			endOfDocument: 'End of document',
		},
	},

	biography: [
		'Jorge González, conocido como "Mecie" en la música electrónica, es un talentoso DJ y productor chileno que está dejando huella en la escena local. Su pasión por la música electrónica comenzó temprano, y a finales de 2018 inicia su camino por los estilos clásicos del techno, minimal y house.',
		'Tras perfeccionar sus habilidades de producción musical de la mano de grandes productores nacionales como Pablo Balbontín, Francisco Allendes y Matías Spataro, sus producciones han destacado tanto en sellos nacionales como internacionales, ganando reconocimiento por un sonido vanguardista y único.',
		'Actualmente Mecie se presenta en algunos de los clubes y fiestas más importantes de Santiago, combinando sus propias producciones con éxitos de la música electrónica internacional. Su dedicación a la música y su capacidad de reinventarse constantemente lo han establecido como una figura prominente en la escena.',
	],

	genres: ['Techno', 'Minimal', 'Deep House'],

	venues: [
		'La Feria',
		'Club Room',
		'Santo Remedio',
		'Misa',
		'Trnsts',
		'Club Ambar',
		'Miniroom',
		'Candelaria',
		'Club Amanda',
		'Club Subterráneo',
		'Teatro Alicia',
		'Onacciu',
	],

	collaborations: [
		'Paralelo 86',
		'Fabian Argomedo',
		'Mañungo',
		'Aldo Cadiz',
		'Ricardo Molinari',
		'Javier Labarca',
		'Sepha',
		'David Schaffer',
		'Sam Silva',
		'Pietro Mengarelli',
		'Fidel Santelices',
		'Koto Barrueto',
		'Agustt',
		'Lunik',
		'Jay Jay Cousin',
		'Jay M',
		'Cabbs',
		'Arap',
	],

	labels: [
		{ name: 'Manoslabel', logo: '/images/labels/manos-label.jpeg' },
		{ name: 'Little Helpers', logo: '/images/labels/little-helpers.png' },
		{ name: 'Street Habitat', logo: '/images/labels/street-habitat.png' },
		{ name: 'Calle Latina Records', logo: '/images/labels/calle-latina.png' },
		{ name: 'Código 56 Records', logo: '/images/labels/codigo-56.jpeg' },
		{ name: 'Motion Bass', logo: '/images/labels/motion-bass.jpeg' },
		{ name: 'Whizal Records', logo: '/images/labels/wizal.jpeg' },
		{ name: 'Coquimbo Music', logo: '/images/labels/coquimbo-records.jpeg' },
	],

	gallery: [
		{ src: '/images/gallery/photo-1.jpeg', alt: 'Mecie en vivo' },
		{
			src: '/images/gallery/ABEC0067-402D-41F3-A2E3-F7787E7CA14C.jpg',
			alt: 'Mecie portrait',
		},
		{ src: '/images/gallery/DSC05624.JPEG', alt: 'Mecie DJ set' },
		{ src: '/images/gallery/DSC05670.JPEG', alt: 'Mecie en club' },
		{
			src: '/images/gallery/JV6A9725-Mejorado-NR.jpg',
			alt: 'Mecie performance',
		},
		{ src: '/images/gallery/JV6A9733-Mejorado-NR.jpg', alt: 'Mecie en cabina' },
		{ src: '/images/gallery/JV6A9741-Mejorado-NR.jpg', alt: 'Mecie live' },
	],

	techRider: {
		equipment: [
			'1x Mixer: Xone 96/92 – DJM V10/900 NXS/750 MK2',
			'2x CDJ 3000/2000 NXS/2000 – XDJ 1000 MK2/1000',
			'1x Tornamesa: Pioneer PLX 1000 – Technics 1200',
			'2x Monitores estéreo de alta calidad + Subwoofer',
		],
		images: [
			{ src: '/images/technical-rider/cdj-2000.png', alt: 'CDJ 2000 NXS2' },
			{ src: '/images/technical-rider/plx-1000.png', alt: 'Pioneer PLX 1000' },
		],
	},

	releases: [
		{
			title: 'Deep Inside',
			spotifyTrackId: '3YAfHK1K8ytQuDg9jucY8E',
		},
		{
			title: 'Little Helper 423-1',
			spotifyTrackId: '1c8Rc6vighL3CIPzvojwDa',
		},
		{
			title: 'Little Helper 423-2',
			spotifyTrackId: '4WWuKPviSAX2PDotRhqwu7',
		},
		{
			title: 'Little Helper 423-3',
			spotifyTrackId: '5GFw0lD75qI8fnFqlXQN32',
		},
		{
			title: 'Fire (Koto Barrueto Remix)',
			spotifyTrackId: '24R50zzx7Avof3MTtGJxWC',
		},
		{
			title: 'What We You Do',
			spotifyTrackId: '6UbZSsNr3eR8wuThSC0A4V',
		},
		{
			title: 'Eterio - Original Mix',
			spotifyTrackId: '3YOcueJoSbF7VY6c3mH3NC',
		},
		{
			title: 'Hot News - Original Mix',
			spotifyTrackId: '57fkxSCDqt2WcMH08gNgL6',
		},
		{
			title: 'Eye Contact',
			spotifyTrackId: '2u9igAJhCRqMrp2j79xEpx',
		},
	],

	spotifyArtistId: '5P8Fsdky4FmNMPc7ZZN8ET',

	social: {
		instagram: 'https://instagram.com/mecie__/',
		soundcloud: 'https://soundcloud.com/mecie_91',
		youtube: 'https://youtube.com/@Mecie_Music',
		spotify: 'https://open.spotify.com/artist/5P8Fsdky4FmNMPc7ZZN8ET',
		bandcamp: 'https://mecie.bandcamp.com/music',
		beatport: 'https://www.beatport.com/es/artist/mecie',
		applemusic: 'https://music.apple.com/us/artist/mecie/1491810136?l=es-MX',
	},
};
