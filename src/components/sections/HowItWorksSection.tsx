import { ScrollReveal } from '@/components/ScrollReveal';
import { Play, UserCheck, PhoneCall, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Vyberte poradce',
    description: 'Prohlédněte si profily našich ověřených věštkyň. Čtěte recenze a vyberte si tu pravou pro vás.',
  },
  {
    icon: PhoneCall,
    number: '02',
    title: 'Spojte se ihned',
    description: 'Zavolejte nebo napište zprávu. Spojení je okamžité, bezpečné a zcela diskrétní.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Získejte odpovědi',
    description: 'Odhalte svou budoucnost a získejte jasné vedení pro váš život a důležitá rozhodnutí.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-warm/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Jednoduchý proces</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Jak to <span className="text-gradient-purple text-glow-purple">funguje</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Tři jednoduché kroky k odkrytí vaší budoucnosti
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video placeholder - Premium design */}
          <ScrollReveal delay={100}>
            <div className="relative group cursor-pointer">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-electric/20 via-gold-warm/10 to-purple-electric/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative glass-card aspect-video rounded-2xl overflow-hidden border-2 border-purple-electric/20 group-hover:border-gold-warm/50 transition-all duration-500">
                {/* Video gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-electric/30 via-cosmic-surface to-gold-warm/10" />
                
                {/* Mystic overlay pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {[...Array(10)].map((_, i) => (
                      <circle
                        key={i}
                        cx="50"
                        cy="50"
                        r={10 + i * 5}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.2"
                        className="text-gold-warm"
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Play button with ripple */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ripple effects */}
                    <div className="absolute inset-0 w-24 h-24 -m-2 rounded-full border-2 border-gold-warm/50 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-0 w-24 h-24 -m-2 rounded-full border border-gold-warm/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                    
                    {/* Play button */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold-warm to-amber-500 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-cosmic-deep ml-1 fill-cosmic-deep" />
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-warm" />
                  <span className="text-moon-white/70 font-heading text-sm">Věštírna Harmonie</span>
                </div>
                <div className="absolute bottom-4 right-4 glass-card px-3 py-1">
                  <span className="text-moon-white/70 font-body text-sm">2:45</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={200 + index * 100}>
                <div className="flex gap-6 items-start group">
                  {/* Step number and icon */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-all duration-300 overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-warm/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <step.icon className="w-8 h-8 text-gold-warm relative z-10" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-electric to-violet-500 flex items-center justify-center text-xs font-bold text-moon-white font-body shadow-purple">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-2xl text-moon-white mb-3 group-hover:text-gold-warm transition-colors duration-300">{step.title}</h3>
                    <p className="font-body text-mystic-blue leading-relaxed text-base">{step.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="ml-10 h-8 border-l-2 border-dashed border-purple-electric/30" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
