import {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {DestinationsSection} from './components/DestinationsSection';
import {PackagesSection} from './components/PackagesSection';
import {GallerySection} from './components/GallerySection';
import {TestimonialsSection} from './components/TestimonialsSection';
import {LocationMapSection} from './components/LocationMapSection';
import {ContactAndSocialSection} from './components/ContactAndSocialSection';
import {MobileStickyBar} from './components/MobileStickyBar';
import {Footer} from './components/Footer';

export default function App() {
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [selectedMapDestId, setSelectedMapDestId] = useState<string | null>(null);

  useEffect(() => {
    const handleQuota = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  const handleSelectSpotOnMap = (destinationId: string) => {
    setSelectedMapDestId(destinationId);
    const mapSection = document.getElementById('lokasi');
    mapSection?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] text-[#1E293B]">
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <DestinationsSection onSelectSpotOnMap={handleSelectSpotOnMap} />
        <PackagesSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationMapSection externalSelectedDestinationId={selectedMapDestId} />
        <ContactAndSocialSection />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
