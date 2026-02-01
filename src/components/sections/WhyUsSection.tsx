import { ScrollReveal } from '@/components/ScrollReveal';
import { Shield, BadgeCheck, Heart } from 'lucide-react';

const trustIndicators = [
  {
    icon: Shield,
    title: 'Diskrétnost',
    description: 'Vaše hovory a zprávy jsou 100% soukromé a šifrované.',
  },
  {
    icon: BadgeCheck,
    title: 'Ověření poradci',
    description: 'Každá věštkyně prochází důkladným výběrovým procesem.',
  },
  {
    icon: Heart,
    title: 'Garance spokojenosti',
    description: 'Nejste spokojeni? Vrátíme vám kredity bez otázek.',
  },
];

export const WhyUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Proč <span className="text-gradient-gold">my</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Důvody, proč nám věří tisíce klientů
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {trustIndicators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="glass-card p-8 text-center group hover:border-gold-warm/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cosmic-glow to-cosmic-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-gold-warm" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-moon-white mb-3">{item.title}</h3>
                <p className="font-body text-mystic-blue leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
