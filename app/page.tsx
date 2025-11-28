import Hero from '@/components/Hero';
import About from '@/components/About';
import Releases from '@/components/Releases';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import Gallery from '@/components/Gallery';
import RecordLabels from '@/components/RecordLabels';
import Venues from '@/components/Venues';
import Collaborations from '@/components/Collaborations';
import TechRider from '@/components/TechRider';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Hero />
      <About />
      <Releases />
      <SpotifyPlayer />
      <Gallery />
      <RecordLabels />
      <Venues />
      <Collaborations />
      <TechRider />
      <Contact />
      <Footer />
    </main>
  );
}
