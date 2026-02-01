import { ScrollReveal } from '@/components/ScrollReveal';
import { Shield, BadgeCheck, Heart, Clock, Lock, Headphones } from 'lucide-react';

const trustIndicators = [
  {
    icon: Shield,
    title: 'Diskrétnost',
    description: 'Vaše hovory a zprávy jsou 100% soukromé a šifrované. Nikdy nesdílíme vaše data.',
  },
  {
    icon: BadgeCheck,
    title: 'Ověření poradci',
    description: 'Každá věštkyně prochází důkladným výběrovým procesem a pravidelnou kontrolou kvality.',
  },
  {
    icon: Heart,
    title: 'Garance spokojenosti',
    description: 'Nejste spokojeni? Vrátíme vám kredity bez otázek. Vaše spokojenost je na prvním místě.',
  },
  {
    icon: Clock,
    title: '24/7 dostupnost',
    description: 'Naši poradci jsou k dispozici kdykoli, ve dne i v noci, 365 dní v roce.',
  },
  {
    icon: Lock,
    title: 'Bezpečné platby',
    description: 'Využíváme nejmodernější šifrování. Vaše platební údaje jsou v bezpečí.',
  },
  {
    icon: Headphones,
    title: 'Zákaznická podpora',
    description: 'Náš tým je vám k dispozici pro jakékoli dotazy nebo technickou pomoc.',
  },
];

export const WhyUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold-warm/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-electric/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block">Naše výhody</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Proč <span className="text-gradient-gold">my</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Důvody, proč nám věří tisíce spokojených klientů
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustIndicators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="glass-card glass-card-hover p-8 h-full group">
                {/* Icon */}
                <div className="relative mb-6 inline-block">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-glow to-cosmic-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-gold-warm" strokeWidth={1.5} />
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gold-warm/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-heading text-xl text-moon-white mb-3 group-hover:text-gold-warm transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-mystic-blue leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
