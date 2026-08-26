import { Section, EditorialImage } from '@/components/ui';
import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
}

export function Scene03Geografi() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Koordinat Lubuk Batu Jaya (latitude: -0.49, longitude: 103.04)
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-0.49&longitude=103.04&current=temperature_2m,relative_humidity_2m,precipitation&timezone=Asia%2FJakarta');
        const data = await response.json();
        setWeather({
          temperature: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          precipitation: data.current.precipitation,
        });
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Section variant="default" spacing="none" className="bg-[#F8F6F3] pt-32 pb-32 px-6">
      <div className="max-w-6xl mx-auto w-full text-stone-900">
        
        {/* OPENING & MAPS */}
        <div className="w-full max-w-5xl mb-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
            03 — GEOGRAFI & LINGKUNGAN
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] text-stone-900 mb-8">
            Di antara sungai, daratan rendah, dan hijau yang membentang.
          </h2>
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed max-w-2xl mb-16 md:mb-24">
            Desa Air Putih berada di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau. Bentang alam di sekitarnya menjadi bagian dari kehidupan masyarakat—dari aktivitas sehari-hari hingga sumber daya yang menopang kehidupan desa.
          </p>

          {/* Google Maps */}
          <div className="w-full h-[260px] md:h-[450px] overflow-hidden bg-[#E8E1D7] mb-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127633.24355523455!2d103.04400760431327!3d-0.49079234850787134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e283b9c48858e3f!2sKecamatan%20Lubuk%20Batu%20Jaya%2C%20Kabupaten%20Indragiri%20Hulu%2C%20Riau!5e1!3m2!1sen!2sid!4v1716182103405!5m2!1sen!2sid" 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Kecamatan Lubuk Batu Jaya"
            />
          </div>
          <p className="text-stone-500 text-xs tracking-wide mb-20 md:mb-28">
            Lokasi Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu.
          </p>

          {/* Peta Potensi Desa Placeholder */}
          <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#F2F0EC] border border-stone-300 flex flex-col items-center justify-center relative overflow-hidden mb-8">
            {/* Subtle grid lines for technical aesthetic */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="flex flex-col items-center justify-center text-center z-10 px-6">
              <span className="font-serif text-2xl md:text-3xl text-stone-800 mb-4">PETA POTENSI DESA</span>
              <span className="text-stone-600 text-sm md:text-base max-w-sm mb-6">Visualisasi peta akan ditambahkan setelah data spasial tersedia.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] bg-white px-4 py-2 text-stone-500 font-bold border border-stone-200">
                PETA POTENSI — SEGERA HADIR
              </span>
            </div>
          </div>
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed max-w-2xl">
            Setiap bentang wilayah memiliki karakter dan potensi yang berbeda. Peta spasial ini nantinya akan membantu melihat ruang, aktivitas, serta potensi yang dimiliki Desa Air Putih.
          </p>
        </div>

        {/* 03 & 04 — TOPOGRAFI & IKLIM */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 border-t border-stone-200 pt-16">
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              03 — TOPOGRAFI
            </h3>
            <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4">
              Tanah datar yang menjadi ruang kehidupan.
            </h4>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8">
              Sebagian wilayah desa berupa dataran rendah dengan kontur yang relatif landai, mendukung aktivitas pemukiman, pertanian, dan perkebunan masyarakat.
            </p>
            <div className="w-full aspect-[16/9] shadow-sm">
              <EditorialImage 
                image={{ src: '/images/profil/topografi.webp', alt: 'Bentang alam Desa Air Putih' }} 
                preset="landscape"
                className="w-full h-[50vh] md:h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l md:border-stone-200 md:pl-16">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              04 — IKLIM
            </h3>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8">
              Kondisi cuaca terkini di kawasan Kecamatan Lubuk Batu Jaya yang dipantau secara langsung melalui satelit.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Curah Hujan */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center justify-center min-h-[140px] hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>
                </div>
                <span className="text-xs uppercase tracking-[0.1em] text-stone-500 font-bold mb-2">CURAH HUJAN</span>
                {loading ? (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full animate-pulse">Memuat...</span>
                ) : weather ? (
                  <span className="font-mono text-stone-900 font-bold text-lg">{weather.precipitation} mm</span>
                ) : (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full">Data Tidak Tersedia</span>
                )}
              </div>
              
              {/* Suhu Rata-rata */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center justify-center min-h-[140px] hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="m20 4-1.4 1.4"/><path d="M4 22v-2"/><path d="M22 22v-2"/><path d="m14 11-4 4"/><path d="M10 11l4 4"/></svg>
                </div>
                <span className="text-xs uppercase tracking-[0.1em] text-stone-500 font-bold mb-2">SUHU LOKAL</span>
                {loading ? (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full animate-pulse">Memuat...</span>
                ) : weather ? (
                  <span className="font-mono text-stone-900 font-bold text-lg">{weather.temperature}°C</span>
                ) : (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full">Data Tidak Tersedia</span>
                )}
              </div>

              {/* Kelembapan */}
              <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center justify-center min-h-[140px] hover:shadow-md transition-shadow group sm:col-span-2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 2.9 7 2.9s-2.29 6.16-2.29 6.16C3.57 10 3 11.08 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
                </div>
                <span className="text-xs uppercase tracking-[0.1em] text-stone-500 font-bold mb-2">KELEMBAPAN TERCATAT</span>
                {loading ? (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full animate-pulse">Memuat...</span>
                ) : weather ? (
                  <span className="font-mono text-stone-900 font-bold text-lg">{weather.humidity}%</span>
                ) : (
                  <span className="font-mono text-stone-900 text-sm bg-stone-100 px-3 py-1 rounded-full">Data Tidak Tersedia</span>
                )}
              </div>
            </div>
            
            <p className="text-stone-400 text-xs mt-6 text-center italic">Data diperbarui secara real-time dari sensor satelit cuaca.</p>
          </div>
        </div>

      </div>
    </Section>
  );
}
