import { ScrollReveal } from '@/components/ScrollReveal';
import { Play, UserCheck, PhoneCall, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Vyberte poradce',
    description: 'Prohlédněte si profily našich ověřených věštkyň a vyberte si tu pravou.',
  },
  {
    icon: PhoneCall,
    title: 'Spojte se',
    description: 'Zavolejte nebo napište zprávu. Spojení je okamžité a diskrétní.',
  },
  {
    icon: Sparkles,
    title: 'Získejte odpovědi',
    description: 'Odhalte svou budoucnost a získejte jasné vedení pro váš život.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-warm/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Jak to <span className="text-gradient-purple">funguje</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Tři jednoduché kroky k odkrytí vaší budoucnosti
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video placeholder */}
          <ScrollReveal delay={100}>
            <div className="relative group cursor-pointer">
              <div className="glass-card aspect-video rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-gold-warm/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-electric/20 to-gold-warm/10" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-warm to-amber-400 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-cosmic-deep ml-1" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-moon-white/50 font-heading text-sm">
                  Věštírna Harmonie
                </div>
                <div className="absolute bottom-4 right-4 text-moon-white/50 font-body text-sm">
                  2:45
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-electric/20 to-gold-warm/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={200 + index * 100}>
                <div className="flex gap-6 items-start group">
                  {/* Step number and icon */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-surface to-cosmic-glow border border-gold-warm/20 flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                      <step.icon className="w-7 h-7 text-gold-warm" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-electric to-violet-500 flex items-center justify-center text-xs font-bold text-moon-white">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-moon-white mb-2">{step.title}</h3>
                    <p className="font-body text-mystic-blue leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
