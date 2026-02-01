import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Moon, Star, Compass, Eye, Flame, CloudMoon, Brain, Heart, Zap } from 'lucide-react';

const services = [
  { icon: Sparkles, title: 'Tarotové karty', description: 'Klasické výklady pro jasné odpovědi' },
  { icon: Star, title: 'Numerologie', description: 'Síla čísel ve vašem životě' },
  { icon: Moon, title: 'Astrologie', description: 'Hvězdy odhalí váš osud' },
  { icon: Compass, title: 'Runy', description: 'Prastaré symboly moudrosti' },
  { icon: Eye, title: 'Křišťálová koule', description: 'Nahlédněte do budoucnosti' },
  { icon: Flame, title: 'Svíčková magie', description: 'Rituály pro splnění přání' },
  // Duplicates for seamless marquee
  { icon: Sparkles, title: 'Tarotové karty', description: 'Klasické výklady pro jasné odpovědi' },
  { icon: Star, title: 'Numerologie', description: 'Síla čísel ve vašem životě' },
  { icon: Moon, title: 'Astrologie', description: 'Hvězdy odhalí váš osud' },
  { icon: Compass, title: 'Runy', description: 'Prastaré symboly moudrosti' },
  { icon: Eye, title: 'Křišťálová koule', description: 'Nahlédněte do budoucnosti' },
  { icon: Flame, title: 'Svíčková magie', description: 'Rituály pro splnění přání' },
];

const bentoServices = [
  { title: 'Výklad snů', icon: CloudMoon, color: 'from-indigo-500/20' },
  { title: 'Regrese', icon: Brain, color: 'from-purple-500/20' },
  { title: 'Channeling', icon: Zap, color: 'from-amber-500/20' },
  { title: 'Reiki', icon: Heart, color: 'from-emerald-500/20' },
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
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card glass-card-hover p-6 min-w-[280px] cursor-pointer group cosmic-glow"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon with glow */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-glow to-cosmic-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-gold-warm" strokeWidth={1.5} />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gold-warm/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading text-lg text-moon-white mb-2 group-hover:text-gold-warm transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-mystic-blue leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Bento Grid for additional services - with Lucide icons */}
      <div className="container mx-auto px-6 relative z-10 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bentoServices.map((item, index) => (
            <ScrollReveal key={index} delay={300 + index * 50}>
              <div className={`glass-card p-6 text-center cursor-pointer group hover:border-gold-warm/50 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${item.color} to-transparent`}>
                <div className="relative inline-block mb-3">
                  <item.icon className="w-8 h-8 text-gold-warm group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-sm text-moon-white block">{item.title}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
