import { Section } from '@/components/ui';

export function Scene02Location() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Text Container */}
        <div className="w-full md:w-5/12 flex flex-col relative z-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            01 — LETAK
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-10 mix-blend-multiply">
            Di antara aliran sungai dan rimba yang luas.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
            Desa Air Putih terletak di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau. Dikelilingi oleh aliran sungai yang menjadi nadi kehidupan dan hamparan alam yang asri.
          </p>
        </div>

        {/* Real Map Embed */}
        <div className="w-full md:w-7/12 relative z-10">
          <div className="w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-stone-300 p-2 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127633.24355523455!2d103.04400760431327!3d-0.49079234850787134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e283b9c48858e3f!2sKecamatan%20Lubuk%20Batu%20Jaya%2C%20Kabupaten%20Indragiri%20Hulu%2C%20Riau!5e1!3m2!1sen!2sid!4v1716182103405!5m2!1sen!2sid" 
              className="w-full h-full grayscale-[0.5] sepia-[0.3]"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
