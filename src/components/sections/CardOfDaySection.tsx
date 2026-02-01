import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { RotateCw } from 'lucide-react';
import tarotCardBack from '@/assets/tarot-card-back.png';

export const CardOfDaySection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial-hero opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-electric/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Karta <span className="text-gradient-purple">dne</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Nechte karty promluvit. Otočte kartu a odkryjte své denní poselství.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center">
            {/* Card container */}
            <div 
              className={`relative w-64 h-96 cursor-pointer group transition-all duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Card back */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src={tarotCardBack}
                  alt="Tarot karta"
                  className="w-full h-full object-cover"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-gold-warm/30 rounded-2xl group-hover:border-gold-warm/60 transition-colors duration-300" />
              </div>

              {/* Card front (revealed) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl glass-card flex items-center justify-center p-6 border-2 border-gold-warm/50"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="font-heading text-2xl text-gold-warm mb-2">Hvězda</h3>
                  <p className="font-body text-sm text-mystic-blue leading-relaxed">
                    Naděje a inspirace. Nový začátek je na obzoru. Věřte ve své sny.
                  </p>
                </div>
              </div>

              {/* Floating glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-electric/20 to-gold-warm/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 -z-10 animate-pulse" />
            </div>

            {/* Flip button */}
            <Button 
              variant="glass" 
              size="lg" 
              className="mt-8 group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <RotateCw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
              {isFlipped ? 'Otočit zpět' : 'Otočit kartu'}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
