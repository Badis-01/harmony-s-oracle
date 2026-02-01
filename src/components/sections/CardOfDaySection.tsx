import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { RotateCw, Sparkles } from 'lucide-react';
import tarotCardBack from '@/assets/tarot-card-back.png';

export const CardOfDaySection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow - stronger */}
      <div className="absolute inset-0 bg-gradient-radial-hero opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-electric/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Denní poselství</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Karta <span className="text-gradient-purple text-glow-purple">dne</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Nechte karty promluvit. Otočte kartu a odkryjte své denní poselství od vesmíru.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center">
            {/* Card container with 3D effect */}
            <div 
              className="relative w-64 md:w-72 h-96 md:h-[420px] cursor-pointer group perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Card wrapper for flip */}
              <div 
                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* Card back */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={tarotCardBack}
                    alt="Tarot karta"
                    className="w-full h-full object-cover"
                  />
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s ease-in-out infinite' }}
                  />
                  {/* Border glow */}
                  <div className="absolute inset-0 border-2 border-gold-warm/40 rounded-2xl group-hover:border-gold-warm/80 transition-colors duration-300 group-hover:shadow-gold" />
                </div>

                {/* Card front (revealed) */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl glass-card flex items-center justify-center p-8 border-2 border-gold-warm/50 backface-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-center">
                    {/* Card artwork placeholder */}
                    <div className="relative mb-6">
                      <div className="text-8xl animate-glow-pulse">🌟</div>
                      {/* Sparkles around */}
                      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold-warm animate-star-twinkle" />
                      <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-purple-electric animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <h3 className="font-heading text-3xl text-gold-warm mb-3 text-glow-gold">Hvězda</h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-warm to-transparent mx-auto mb-4" />
                    <p className="font-body text-sm text-mystic-blue leading-relaxed">
                      <span className="text-moon-white font-medium">Naděje a inspirace.</span>
                      <br />
                      Nový začátek je na obzoru. Věřte ve své sny a sledujte svou intuici.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating glow behind card */}
              <div 
                className="absolute -inset-8 rounded-3xl blur-3xl transition-opacity duration-500 -z-10"
                style={{
                  background: 'radial-gradient(ellipse, hsl(270 90% 68% / 0.2) 0%, hsl(32 100% 64% / 0.1) 50%, transparent 70%)',
                  opacity: isFlipped ? 1 : 0.5,
                }}
              />
            </div>

            {/* Flip button */}
            <Button 
              variant="glass" 
              size="lg" 
              className="mt-10 group border-gold-warm/30 hover:border-gold-warm"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <RotateCw className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
              {isFlipped ? 'Otočit zpět' : 'Otočit kartu'}
            </Button>

            {/* Hint text */}
            <p className="font-body text-xs text-mystic-blue/50 mt-4">
              Klikněte na kartu nebo tlačítko
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
