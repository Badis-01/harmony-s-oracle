import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroMystic from '@/assets/hero-mystic.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic background layers */}
      <div className="absolute inset-0 bg-cosmic-deep" />
      
      {/* Radial glow behind hero */}
      <div className="absolute inset-0 bg-gradient-radial-hero opacity-60" />
      
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-moon-white rounded-full animate-star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Hero mystic image - blended into background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="relative w-full h-full max-w-4xl"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 80% at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, black 20%, transparent 70%)',
          }}
        >
          <img
            src={heroMystic}
            alt="Mystická věštkyně"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-auto object-contain opacity-80 animate-float"
            style={{ animationDuration: '8s' }}
          />
        </div>
      </div>

      {/* Purple glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-electric/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-warm/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 text-gold-warm" />
            <span className="text-sm font-body text-mystic-blue">Profesionální věštění online</span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-moon-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Odkryjte svou{' '}
            <span className="text-gradient-gold">budoucnost</span>
            {' '}s námi
          </h1>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-mystic-blue max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Spojte se s ověřenými věštkyněmi a kartářkami. Získejte odpovědi na své nejhlubší otázky prostřednictvím tarotu, astrologie a dalších mystických technik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl" className="group">
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Vyložit karty
            </Button>
            <Button variant="glass" size="xl">
              Prozkoumat poradce
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-mystic-blue/70 text-sm font-body animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>15+ online poradců</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>4.9/5 hodnocení</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>100% diskrétní</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-deep to-transparent" />
    </section>
  );
};
