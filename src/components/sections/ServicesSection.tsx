import { ScrollReveal } from '@/components/ScrollReveal';

import tarotImg from '@/assets/techniques/tarot.jpg';
import numerologieImg from '@/assets/techniques/numerologie.jpg';
import astrologieImg from '@/assets/techniques/astrologie.jpg';
import runyImg from '@/assets/techniques/runy.jpg';
import kristalovaKouleImg from '@/assets/techniques/kristalova-koule.jpg';
import svickovaMagieImg from '@/assets/techniques/svickova-magie.jpg';
import vykladSnuImg from '@/assets/techniques/vyklad-snu.jpg';
import regreseImg from '@/assets/techniques/regrese.jpg';
import channelingImg from '@/assets/techniques/channeling.jpg';
import reikiImg from '@/assets/techniques/reiki.jpg';

const services = [
  { title: 'Tarotové karty', description: 'Klasické výklady pro jasné odpovědi', image: tarotImg },
  { title: 'Numerologie', description: 'Síla čísel ve vašem životě', image: numerologieImg },
  { title: 'Astrologie', description: 'Hvězdy odhalí váš osud', image: astrologieImg },
  { title: 'Runy', description: 'Prastaré symboly moudrosti', image: runyImg },
  { title: 'Křišťálová koule', description: 'Nahlédněte do budoucnosti', image: kristalovaKouleImg },
  { title: 'Svíčková magie', description: 'Rituály pro splnění přání', image: svickovaMagieImg },
  { title: 'Výklad snů', description: 'Odhalte skrytý význam vašich snů', image: vykladSnuImg },
  { title: 'Regrese', description: 'Cesta do minulých životů', image: regreseImg },
  { title: 'Channeling', description: 'Spojení s vyššími dimenzemi', image: channelingImg },
  { title: 'Reiki', description: 'Léčivá energie pro tělo i duši', image: reikiImg },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-purple-electric/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block">Naše služby</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Mystické <span className="text-gradient-gold">techniky</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Tradiční mystické metody spojené s moderním přístupem k věštění
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee / Infinite horizontal scroll */}
      <ScrollReveal delay={200}>
        <div className="marquee-container py-8">
          <div className="marquee-content">
            {/* Original + duplicate for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="relative min-w-[280px] h-[380px] rounded-2xl overflow-hidden cursor-pointer group shrink-0"
              >
                {/* Full background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep via-cosmic-deep/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-moon-white/10 group-hover:border-gold-warm/50 transition-colors duration-300" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <h3 className="font-heading text-xl text-moon-white mb-2 group-hover:text-gold-warm transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-mystic-blue leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-warm to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
