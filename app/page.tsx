import fs from 'fs';
import path from 'path';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Releases from '@/components/Releases';
import Gallery from '@/components/Gallery';
import RecordLabels from '@/components/RecordLabels';
import Venues from '@/components/Venues';
import TechRider from '@/components/TechRider';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Collaborations from '@/components/Collaborations';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';

function getGalleryPhotos() {
	const galleryDir = path.join(process.cwd(), 'public/images/gallery');
	const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
	const files = fs.readdirSync(galleryDir)
		.filter((file) => extensions.includes(path.extname(file).toLowerCase()))
		.sort();
	return files.map((file) => ({
		src: `/images/gallery/${file}`,
		alt: path.basename(file, path.extname(file)).replace(/[-_]/g, ' '),
	}));
}

export default function Home() {
	const photos = getGalleryPhotos();
	return (
		<main className="relative flex flex-col w-full bg-background">
			{/* 01. ENTRADA - Impacto visual masivo */}
			<Hero />

			{/* 02. IDENTIDAD - Bloque blanco/negro asimétrico */}
			<About />

			{/* 03. DISCOGRAFÍA - Grid de archivo técnico */}
			<Releases />
			<SoundCloudPlayer />

			{/* 05. HISTORIAL GEOGRÁFICO - Clubs y Venues */}
			<Venues />
			<Collaborations />

			{/* 06. ARCHIVO VISUAL - Cuadrícula rota (Grid 12) */}
			<Gallery photos={photos} />

			{/* 07. DATA TÉCNICA - Los dos bloques compartiendo grilla */}
			<div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10">
				<div className="border-b lg:border-b-0 lg:border-r border-white/10">
					<RecordLabels />
				</div>
				<div>
					<TechRider />
				</div>
			</div>

			{/* 08. CONVERSIÓN - Booking y Redes */}
			<Contact />

			<Footer />
		</main>
	);
}
