import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Moon, Star, Compass, Eye } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Tarot',
    description: 'Klasické výklady karet pro jasné odpovědi',
  },
  {
    icon: Star,
    title: 'Numerologie',
    description: 'Odkryjte sílu čísel ve vašem životě',
  },
  {
    icon: Moon,
    title: 'Astrologie',
    description: 'Hvězdy odhalí váš osud',
  },
  {
    icon: Compass,
    title: 'Runy',
    description: 'Prastaré symboly severské moudrosti',
  },
  {
    icon: Eye,
    title: 'Křišťálová koule',
    description: 'Nahlédněte do budoucnosti',
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-electric/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Naše <span className="text-gradient-gold">techniky</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Tradiční mystické metody spojené s moderním přístupem
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="group glass-card p-6 h-full border border-transparent hover:border-gold-warm/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer cosmic-glow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-glow to-cosmic-surface flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-gold-warm" />
                  </div>
                  <h3 className="font-heading text-lg text-moon-white mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-mystic-blue leading-relaxed">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
