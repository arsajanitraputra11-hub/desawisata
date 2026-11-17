import {useEffect, useState} from 'react';
import {
  APILoadingStatus,
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
} from '@vis.gl/react-google-maps';
import {Clock, ExternalLink, MapPin, Navigation} from 'lucide-react';
import {MAP_SPOTS, MapSpot, VILLAGE_CENTER} from '../data/villageData';

const MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';

const DEST_TO_MAP_SPOT: Record<string, string> = {
  'hutan-pinus': 'spot-pinus',
  'curug-embun': 'spot-curug',
  'kebun-organik': 'spot-kebun',
  'glamping-kayu': 'spot-glamping',
};

interface SpotMarkerProps {
  spot: MapSpot;
  isSelected: boolean;
  onSelect: (spotId: string) => void;
  onClose: () => void;
}

function SpotMarker({spot, isSelected, onSelect, onClose}: SpotMarkerProps) {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={spot.coordinates}
        title={spot.name}
        onClick={() => onSelect(spot.id)}
      >
        <Pin
          background={isSelected ? '#D97736' : spot.accentColor}
          borderColor="#FFFFFF"
          glyphColor="#FFFFFF"
          scale={isSelected ? 1.2 : 1.0}
        />
      </AdvancedMarker>

      {isSelected && marker && (
        <InfoWindow anchor={marker} maxWidth={260} onCloseClick={onClose}>
          <div className="p-1 text-[#1E293B]">
            <p className="text-[11px] font-bold text-[#2D6A4F]">{spot.type}</p>
            <h4 className="text-sm font-extrabold text-[#1B4332] mt-0.5">{spot.name}</h4>
            <p className="text-xs text-[#414844] mt-1 leading-snug">{spot.subtitle}</p>
            <p className="text-[11px] font-semibold text-[#6D3000] mt-1.5">
              Buka: {spot.openHours}
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

function MapPanController({selectedSpot}: {selectedSpot: MapSpot | null}) {
  const map = useMap();

  useEffect(() => {
    if (map && selectedSpot) {
      map.panTo(selectedSpot.coordinates);
      const currentZoom = map.getZoom() ?? 15;
      if (currentZoom < 16) {
        map.setZoom(16);
      }
    }
  }, [map, selectedSpot]);

  return null;
}

interface InnerMapCanvasProps {
  selectedSpotId: string | null;
  onSelectSpot: (id: string) => void;
  onClearSpot: () => void;
}

function InnerMapCanvas({selectedSpotId, onSelectSpot, onClearSpot}: InnerMapCanvasProps) {
  const status = useApiLoadingStatus();
  const activeSpot = MAP_SPOTS.find((s) => s.id === selectedSpotId) || null;

  if (status === APILoadingStatus.FAILED || status === APILoadingStatus.AUTH_FAILURE) {
    return (
      <MapUnavailableCard message="Peta interaktif sedang mengalami kendala pemuatan. Anda tetap dapat melihat rute langsung melalui tombol Google Maps di bawah." />
    );
  }

  return (
    <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-[#1B4332]/15 bg-[#E7EEFF]">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={VILLAGE_CENTER}
        defaultZoom={15}
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{width: '100%', height: '100%'}}
      >
        <MapPanController selectedSpot={activeSpot} />
        {MAP_SPOTS.map((spot) => (
          <SpotMarker
            key={spot.id}
            spot={spot}
            isSelected={spot.id === selectedSpotId}
            onSelect={onSelectSpot}
            onClose={onClearSpot}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

function MapUnavailableCard({message}: {message: string}) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${VILLAGE_CENTER.lat},${VILLAGE_CENTER.lng}`;
  return (
    <div className="w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl border border-[#1B4332]/15 bg-gradient-to-br from-[#F8FAF6] via-white to-[#FDF8F5] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center mb-4">
        <MapPin className="w-7 h-7" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-extrabold text-[#1B4332]">
        Desa Wisata Lereng Asri · Kawasan Pegunungan
      </h3>
      <p className="text-sm text-[#414844] max-w-md mt-2 leading-relaxed">{message}</p>
      <p className="text-xs font-semibold text-[#2D6A4F] mt-3 tabular-nums">
        Koordinat GPS: {VILLAGE_CENTER.lat}, {VILLAGE_CENTER.lng}
      </p>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-sm font-bold transition-colors"
      >
        <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Buka Rute di Google Maps</span>
      </a>
    </div>
  );
}

interface LocationMapSectionProps {
  externalSelectedDestinationId: string | null;
}

export function LocationMapSection({externalSelectedDestinationId}: LocationMapSectionProps) {
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(MAP_SPOTS[0].id);

  useEffect(() => {
    if (!externalSelectedDestinationId) return;
    const mappedSpot = DEST_TO_MAP_SPOT[externalSelectedDestinationId];
    if (mappedSpot) {
      setSelectedSpotId(mappedSpot);
    }
  }, [externalSelectedDestinationId]);

  const activeSpot = MAP_SPOTS.find((s) => s.id === selectedSpotId) || MAP_SPOTS[0];
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${activeSpot.coordinates.lat},${activeSpot.coordinates.lng}`;

  return (
    <section id="lokasi" className="py-12 sm:py-16 border-t border-[#1B4332]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-[#D97736] mb-1.5">
              05. Peta Lokasi &amp; Akses Jalan
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
              Peta Kawasan Desa Wisata Lereng Asri
            </h2>
            <p className="text-base text-[#414844] mt-2 max-w-2xl">
              Akses jalan beraspal mulus dapat dilalui mobil keluarga maupun bus pariwisata medium
              hingga area parkir Pendopo Utama Desa.
            </p>
          </div>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-sm font-bold whitespace-nowrap shrink-0 transition-colors self-start"
          >
            <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Petunjuk Arah Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Spot Directory */}
          <div className="lg:col-span-4 space-y-2.5">
            {MAP_SPOTS.map((spot) => {
              const isSelected = spot.id === selectedSpotId;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setSelectedSpotId(spot.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
                    isSelected
                      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                      : 'bg-white text-[#1E293B] border-[#1B4332]/12 hover:border-[#1B4332]/35'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-bold ${
                        isSelected ? 'text-[#A5D0B9]' : 'text-[#D97736]'
                      }`}
                    >
                      {spot.type}
                    </span>
                    <span
                      className={`text-[11px] font-medium flex items-center gap-1 ${
                        isSelected ? 'text-white/85' : 'text-[#414844]'
                      }`}
                    >
                      <Clock className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{spot.openHours}</span>
                    </span>
                  </div>
                  <p className="text-base font-bold mt-1">{spot.name}</p>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      isSelected ? 'text-white/90' : 'text-[#414844]'
                    }`}
                  >
                    {spot.subtitle}
                  </p>
                </button>
              );
            })}

            <div className="p-4 rounded-2xl bg-[#FDF8F5] text-sm text-[#6D3000] space-y-1">
              <p className="font-bold">Estimasi Waktu Tempuh</p>
              <p className="text-xs leading-relaxed">
                ± 35 menit dari Kota Salatiga · ± 65 menit dari Semarang · ± 90 menit dari
                Yogyakarta / Solo.
              </p>
            </div>
          </div>

          {/* Interactive Google Map Canvas */}
          <div className="lg:col-span-8">
            {MAPS_API_KEY ? (
              <APIProvider apiKey={MAPS_API_KEY} language="id" region="ID" libraries={['marker']}>
                <InnerMapCanvas
                  selectedSpotId={selectedSpotId}
                  onSelectSpot={(id) => setSelectedSpotId(id)}
                  onClearSpot={() => setSelectedSpotId(null)}
                />
              </APIProvider>
            ) : (
              <MapUnavailableCard message="Gunakan tombol di bawah untuk langsung membuka navigasi rute menuju Gerbang Utama Desa Wisata Lereng Asri di aplikasi Google Maps." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
