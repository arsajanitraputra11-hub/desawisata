export type DestinationCategory = 'Semua' | 'Wisata Alam' | 'Agro & Edukasi' | 'Penginapan';

export interface Destination {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, 'Semua'>;
  duration: string;
  ticketPrice: number;
  openHours: string;
  shortDesc: string;
  fullDesc: string;
  facilities: string[];
  tips: string;
  image: string;
  imageAlt: string;
  coordinates: {lat: number; lng: number};
}

export interface TourPackage {
  id: string;
  name: string;
  subtitle: string;
  pricePerPerson: number;
  minPeople: number;
  duration: string;
  isPopular?: boolean;
  includes: string[];
  summary: string;
  image: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Alam' | 'Penginapan' | 'Kuliner & Budaya';
  caption: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleOrGroup: string;
  packageTaken: string;
  visitDate: string;
  rating: number;
  quote: string;
}

export interface MapSpot {
  id: string;
  name: string;
  type: string;
  subtitle: string;
  openHours: string;
  coordinates: {lat: number; lng: number};
  accentColor: string;
}

export interface SocialChannel {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube' | 'Facebook';
  handle: string;
  followers: string;
  description: string;
  url: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_lereng_asri_1794886757105.jpg';

export const VILLAGE_CENTER = {
  lat: -7.3865,
  lng: 110.4328,
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'hutan-pinus',
    name: 'Hutan Pinus Lembah Asri',
    category: 'Wisata Alam',
    duration: '1–2 Jam',
    ticketPrice: 20000,
    openHours: '06.30 – 17.30 WIB',
    shortDesc:
      'Jalur titian kayu ramah keluarga di bawah naungan pohon pinus rindang dengan dek pandang matahari terbit.',
    fullDesc:
      'Kawasan hutan pinus seluas 12 hektare yang dilengkapi jalur papan kayu landai, aman untuk anak-anak maupun lansia. Pagi hari antara pukul 06.30 hingga 09.00 menjadi momen terbaik menikmati cahaya matahari menembus kabut tipis pegunungan.',
    facilities: ['Jalur Titian Kayu', 'Dek Pandang Lembah', 'Gazebo Istirahat', 'Mushola & Toilet Bersih'],
    tips: 'Bawa jaket tipis di pagi hari karena suhu rata-rata berada di kisaran 17–20°C.',
    image: '/src/assets/images/dest_hutan_pinus_1794886756653.jpg',
    imageAlt: 'Jalur titian kayu di tengah Hutan Pinus Lembah Asri saat cahaya pagi',
    coordinates: {lat: -7.3852, lng: 110.4345},
  },
  {
    id: 'curug-embun',
    name: 'Curug Embun Pagi',
    category: 'Wisata Alam',
    duration: '2 Jam',
    ticketPrice: 25000,
    openHours: '07.00 – 16.30 WIB',
    shortDesc:
      'Air terjun jernih dua tingkat di balik tebing hijau alami dengan kolam dangkal yang aman untuk bermain air.',
    fullDesc:
      'Berjarak 15 menit jalan santai menyusuri jalur batu tertata dari pos utama desa. Debit air pegunungan tetap jernih sepanjang tahun dan terdapat pendopo bilas serta ruang ganti yang terawat oleh warga setempat.',
    facilities: ['Jalur Batu Rapi', 'Ruang Bilas & Ganti', 'Pos P3K Desa', 'Warung Kopi & Jahe Hangat'],
    tips: 'Gunakan alas kaki anti-selip agar nyaman saat melintasi area bebatuan dekat kolam air terjun.',
    image: '/src/assets/images/dest_air_terjun_1794886757264.jpg',
    imageAlt: 'Air terjun Curug Embun Pagi dengan air jernih kehijauan dikelilingi tebing rimbun',
    coordinates: {lat: -7.3894, lng: 110.4368},
  },
  {
    id: 'kebun-organik',
    name: 'Kebun Teh & Petik Stroberi Organik',
    category: 'Agro & Edukasi',
    duration: '1,5 Jam',
    ticketPrice: 30000,
    openHours: '07.30 – 17.00 WIB',
    shortDesc:
      'Wisata edukasi memetik buah stroberi dan daun teh segar langsung bersama petani lokal dengan latar perbukitan.',
    fullDesc:
      'Cocok untuk wisata keluarga dan rombongan sekolah. Pengunjung diajak mengenal cara budidaya tanpa pestisida kimia, memetik buah segar ke keranjang bambu, serta mencicipi seduhan teh tubruk khas lereng gunung di saung bambu.',
    facilities: ['Pendampingan Petani Lokal', 'Saung Bambu Santai', 'Keranjang Petik Gratis', 'Oleh-Oleh Sayur Segar'],
    tips: 'Hasil petik stroberi bisa langsung ditimbang di tempat atau dinikmati hangat dengan teh manis desa.',
    image: '/src/assets/images/dest_kebun_organik_1794886758068.jpg',
    imageAlt: 'Perkebunan teh terasering dan kebun stroberi organik dengan saung bambu',
    coordinates: {lat: -7.3841, lng: 110.4302},
  },
  {
    id: 'glamping-kayu',
    name: 'Bukit Sunrise Eco-Glamping',
    category: 'Penginapan',
    duration: 'Menginap 2H1M',
    ticketPrice: 425000,
    openHours: 'Check-in 14.00 WIB',
    shortDesc:
      'Pondok kayu hangat dan tenda glamping berteras privat menghadap hamparan lembah hijau dan kabut fajar.',
    fullDesc:
      'Penginapan ramah lingkungan dengan kasur empuk, selimut tebal, kamar mandi air hangat bertenaga surya, serta beranda kayu untuk menikmati kopi pagi tanpa harus mendaki jauh.',
    facilities: ['Air Hangat Tenaga Surya', 'Sarapan Dapur Desa', 'Api Unggun Malam', 'Parkir Luas Terjaga'],
    tips: 'Disarankan memesan minimal 5 hari sebelum akhir pekan karena kapasitas hanya tersedia 10 unit.',
    image: '/src/assets/images/dest_glamping_kayu_1794886758494.jpg',
    imageAlt: 'Pondok kayu dan tenda glamping hangat di punggungan bukit saat fajar',
    coordinates: {lat: -7.3879, lng: 110.4294},
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'jelajah-sehari',
    name: 'Paket Jelajah Sehari',
    subtitle: 'Cocok untuk kunjungan akhir pekan tanpa menginap',
    pricePerPerson: 165000,
    minPeople: 2,
    duration: '1 Hari (08.00 – 16.00)',
    includes: [
      'Tiket terusan Hutan Pinus, Curug Embun & Kebun Organik',
      '1x Makan siang nasi liwet & lauk tradisional desa',
      'Minuman selamat datang wedang jahe serai hangat',
      'Pemandu lokal ramah selama perjalanan desa',
    ],
    summary: 'Nikmati seluruh destinasi unggulan desa dalam satu hari penuh tanpa repot membeli tiket terpisah.',
    image: '/src/assets/images/dest_hutan_pinus_1794886756653.jpg',
  },
  {
    id: 'keluarga-2h1m',
    name: 'Paket Keluarga Asri 2H1M',
    subtitle: 'Pengalaman menginap lengkap di pondok kayu atau glamping',
    pricePerPerson: 425000,
    minPeople: 2,
    duration: '2 Hari 1 Malam',
    isPopular: true,
    includes: [
      'Menginap 1 malam di Eco-Glamping / Pondok Kayu air hangat',
      '3x Sajian kuliner desa (makan siang, makan malam BBQ, sarapan)',
      'Sesi api unggun, jagung bakar, dan petik stroberi gratis 250g',
      'Tiket masuk seluruh destinasi wisata & pemandu pribadi',
    ],
    summary: 'Pilihan favorit keluarga yang menginginkan ketenangan malam pegunungan dan udara pagi segar.',
    image: '/src/assets/images/dest_glamping_kayu_1794886758494.jpg',
  },
  {
    id: 'gathering-rombongan',
    name: 'Paket Gathering & Outbound',
    subtitle: 'Untuk rombongan kantor, komunitas, atau sekolah',
    pricePerPerson: 295000,
    minPeople: 12,
    duration: '1 Hari Penuh (07.30 – 17.00)',
    includes: [
      'Area pendopo utama khusus rombongan + sound system',
      'Permainan kekompakan tim dipandu fasilitator desa',
      '2x Rehat kopi/teh tradisional & 1x makan siang prasmanan',
      'Tiket wisata hutan pinus, curug, dan dokumentasi foto grup',
    ],
    summary: 'Dirancang untuk mempererat kebersamaan tim di suasana alam terbuka yang sejuk dan tertata.',
    image: '/src/assets/images/dest_kebun_organik_1794886758068.jpg',
  },
];

export const SAMPLE_ITINERARY: ItineraryStep[] = [
  {
    time: '07.30 WIB',
    title: 'Penyambutan di Pendopo Utama & Wedang Hangat',
    detail: 'Parkir kendaraan di pos aman desa, pengarahan singkat, dan mencicipi wedang jahe gula aren.',
  },
  {
    time: '08.30 WIB',
    title: 'Susur Titian Hutan Pinus & Dek Pandang Pagi',
    detail: 'Berjalan santai menghirup udara pegunungan dan berfoto di titik pandang lembah hijau.',
  },
  {
    time: '10.30 WIB',
    title: 'Wisata Edukasi Kebun Teh & Petik Stroberi',
    detail: 'Belajar budidaya organik bersama petani desa dan membawa pulang hasil petik segar.',
  },
  {
    time: '12.30 WIB',
    title: 'Santap Siang Dapur Lereng di Saung Bambu',
    detail: 'Menikmati nasi hangat, ayam kampung ungkep, sayur organik, sambal terasi, dan buah segar.',
  },
  {
    time: '14.00 WIB',
    title: 'Bermain Air & Santai di Curug Embun Pagi',
    detail: 'Relaksasi di tepi aliran air jernih sebelum kembali ke penginapan atau persiapan pulang.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pagi Berkabut di Desa Lereng Asri',
    category: 'Alam',
    caption: 'Suasana permukiman kayu tradisional berdampingan dengan terasering kebun sayur.',
    image: '/src/assets/images/hero_lereng_asri_1794886757105.jpg',
    alt: 'Pemandangan pagi desa wisata di lereng pegunungan hijau',
  },
  {
    id: 'gal-2',
    title: 'Jalur Titian Hutan Pinus',
    category: 'Alam',
    caption: 'Sinar matahari pagi menembus pepohonan pinus di jalur pejalan kaki yang aman.',
    image: '/src/assets/images/dest_hutan_pinus_1794886756653.jpg',
    alt: 'Wisatawan berjalan santai di jalur papan kayu hutan pinus',
  },
  {
    id: 'gal-3',
    title: 'Kesegaran Curug Embun Pagi',
    category: 'Alam',
    caption: 'Aliran air pegunungan yang jernih dan asri di tengah tebing hijau.',
    image: '/src/assets/images/dest_air_terjun_1794886757264.jpg',
    alt: 'Air terjun alami di kawasan Desa Wisata Lereng Asri',
  },
  {
    id: 'gal-4',
    title: 'Saung Kebun Teh & Stroberi',
    category: 'Kuliner & Budaya',
    caption: 'Berinteraksi langsung dengan petani lokal sambil memetik buah segar.',
    image: '/src/assets/images/dest_kebun_organik_1794886758068.jpg',
    alt: 'Petani lokal memanen stroberi dan daun teh di lereng hijau',
  },
  {
    id: 'gal-5',
    title: 'Senja & Fajar di Eco-Glamping',
    category: 'Penginapan',
    caption: 'Pencahayaan lentera hangat dari teras kayu menghadap lembah pegunungan.',
    image: '/src/assets/images/dest_glamping_kayu_1794886758494.jpg',
    alt: 'Area pondok kayu dan tenda glamping dengan lampu lentera hangat',
  },
  {
    id: 'gal-6',
    title: 'Hidangan Hangat Dapur Lereng',
    category: 'Kuliner & Budaya',
    caption: 'Sajian lauk pauk desa beralas daun pisang dengan seduhan teh rempah.',
    image: '/src/assets/images/gallery_kuliner_desa_1794886758920.jpg',
    alt: 'Makanan tradisional desa disajikan di atas meja kayu berlatar perbukitan',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Ibu Ratna Kusumawardani',
    roleOrGroup: 'Keluarga (5 Orang) dari Semarang',
    packageTaken: 'Paket Keluarga Asri 2H1M',
    visitDate: 'Oktober 2026',
    rating: 5,
    quote:
      'Awalnya kami khawatir jalanan terlalu terjal untuk orang tua, ternyata jalur titian kayu di hutan pinusnya landai dan bersih sekali. Anak-anak betah memetik stroberi, makanannya hangat dan bumbunya terasa masakan rumah.',
  },
  {
    id: 'testi-2',
    name: 'Bapak Hendra Wijaya',
    roleOrGroup: 'Koordinator Outing · PT Karya Mandiri Yogyakarta',
    packageTaken: 'Paket Gathering & Outbound (28 Peserta)',
    visitDate: 'September 2026',
    rating: 5,
    quote:
      'Komunikasi pemesanan lewat WhatsApp sangat cepat dan jelas rincian biayanya sejak awal. Setibanya di lokasi, pendopo dan fasilitator desa sudah siap sehingga acara tim kami berjalan lancar dan akrab.',
  },
  {
    id: 'testi-3',
    name: 'Salsa & Dimas Pratama',
    roleOrGroup: 'Wisatawan Akhir Pekan dari Solo',
    packageTaken: 'Paket Jelajah Sehari',
    visitDate: 'November 2026',
    rating: 5,
    quote:
      'Tempat terbaik untuk rehat dari bising kota. Hanya satu hari sudah bisa menikmati hutan pinus, air terjun jernih, dan makan siang menghadap bukit hijau tanpa biaya tambahan yang mendadak.',
  },
];

export const MAP_SPOTS: MapSpot[] = [
  {
    id: 'pos-utama',
    name: 'Gerbang & Pendopo Desa Lereng Asri',
    type: 'Titik Kumpul & Parkir',
    subtitle: 'Area parkir luas bus & mobil, pusat informasi wisata, mushola.',
    openHours: '06.00 – 21.00 WIB',
    coordinates: {lat: -7.3865, lng: 110.4328},
    accentColor: '#1B4332',
  },
  {
    id: 'spot-pinus',
    name: 'Hutan Pinus Lembah Asri',
    type: 'Wisata Alam',
    subtitle: '3 menit jalan kaki dari Pendopo Utama · Jalur titian kayu.',
    openHours: '06.30 – 17.30 WIB',
    coordinates: {lat: -7.3852, lng: 110.4345},
    accentColor: '#2D6A4F',
  },
  {
    id: 'spot-curug',
    name: 'Curug Embun Pagi',
    type: 'Air Terjun',
    subtitle: '15 menit trekking ringan · Kolam jernih & ruang bilas.',
    openHours: '07.00 – 16.30 WIB',
    coordinates: {lat: -7.3894, lng: 110.4368},
    accentColor: '#0E7490',
  },
  {
    id: 'spot-kebun',
    name: 'Kebun Teh & Stroberi Organik',
    type: 'Agro & Edukasi',
    subtitle: '5 menit dari Pendopo Utama · Saung teh & petik buah.',
    openHours: '07.30 – 17.00 WIB',
    coordinates: {lat: -7.3841, lng: 110.4302},
    accentColor: '#D97736',
  },
  {
    id: 'spot-glamping',
    name: 'Bukit Sunrise Eco-Glamping',
    type: 'Penginapan Kayu',
    subtitle: 'Area menginap tenang menghadap lembah timur.',
    openHours: '24 Jam (Tamu Menginap)',
    coordinates: {lat: -7.3879, lng: 110.4294},
    accentColor: '#B45309',
  },
];

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'ig',
    platform: 'Instagram',
    handle: '@desalerengasri',
    followers: '24,8 rb pengikut',
    description: 'Foto kabut pagi harian, info promo akhir pekan, dan cerita petani lokal.',
    url: 'https://instagram.com/desalerengasri',
  },
  {
    id: 'tt',
    platform: 'TikTok',
    handle: '@lerengasri.official',
    followers: '38,2 rb pengikut',
    description: 'Video singkat rute perjalanan, suasana glamping malam, dan kuliner desa.',
    url: 'https://tiktok.com/@lerengasri.official',
  },
  {
    id: 'yt',
    platform: 'YouTube',
    handle: 'Desa Wisata Lereng Asri',
    followers: '9,4 rb subscriber',
    description: 'Liputan lengkap fasilitas penginapan dan panduan wisata keluarga.',
    url: 'https://youtube.com/@desalerengasri',
  },
  {
    id: 'fb',
    platform: 'Facebook',
    handle: 'Desa Wisata Lereng Asri',
    followers: '15,1 rb pengikut',
    description: 'Kalender acara budaya panen raya dan ulasan rombongan komunitas.',
    url: 'https://facebook.com/desalerengasri',
  },
];
