import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';
import heroMystic from '@/assets/hero-mystic.png';
import tarotCardBack from '@/assets/tarot-card-back.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-vignette">
      {/* Hero background with mystic woman - cinematic blend */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroMystic})`,
            backgroundPosition: 'center 20%',
          }}
        />
        {/* Gradient overlays for cinematic blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep via-transparent to-cosmic-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-deep/80 via-transparent to-cosmic-deep/80" />
        <div className="absolute inset-0 bg-cosmic-deep/40" />
      </div>

      {/* Floating tarot cards with 3D perspective */}
      <div className="absolute inset-0 pointer-events-none perspective-1000">
        {/* Left floating card */}
        <div 
          className="absolute left-[10%] top-[20%] w-32 h-48 preserve-3d"
          style={{ animation: 'float-card 8s ease-in-out infinite' }}
        >
          <img 
            src={tarotCardBack} 
            alt="Tarot" 
            className="w-full h-full object-cover rounded-xl shadow-2xl opacity-60"
            style={{
              transform: 'rotateY(-15deg) rotateX(10deg)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(181,101,247,0.2)',
            }}
          />
        </div>

        {/* Right floating card */}
        <div 
          className="absolute right-[10%] top-[25%] w-28 h-40 preserve-3d"
          style={{ animation: 'float-card-2 7s ease-in-out infinite 1s' }}
        >
          <img 
            src={tarotCardBack} 
            alt="Tarot" 
            className="w-full h-full object-cover rounded-xl shadow-2xl opacity-50"
            style={{
              transform: 'rotateY(20deg) rotateX(-5deg)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255,179,71,0.2)',
            }}
          />
        </div>

        {/* Bottom left small card */}
        <div 
          className="absolute left-[15%] bottom-[25%] w-20 h-28 preserve-3d hidden md:block"
          style={{ animation: 'float-card 9s ease-in-out infinite 2s' }}
        >
          <img 
            src={tarotCardBack} 
            alt="Tarot" 
            className="w-full h-full object-cover rounded-lg shadow-xl opacity-40"
            style={{
              transform: 'rotateY(-25deg) rotateX(15deg)',
            }}
          />
        </div>

        {/* Top right small card */}
        <div 
          className="absolute right-[20%] top-[15%] w-16 h-24 preserve-3d hidden lg:block"
          style={{ animation: 'float-card-2 10s ease-in-out infinite 0.5s' }}
        >
          <img 
            src={tarotCardBack} 
            alt="Tarot" 
            className="w-full h-full object-cover rounded-lg shadow-xl opacity-30"
            style={{
              transform: 'rotateY(30deg) rotateX(-10deg)',
            }}
          />
        </div>
      </div>

      {/* Magical particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-warm rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `star-twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 6px hsl(32 100% 64% / 0.8)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card mb-8"
            style={{ animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}
          >
            <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />
            <span className="text-sm font-body text-mystic-blue tracking-wide">Profesionální věštění online • 24/7</span>
            <Star className="w-4 h-4 text-gold-warm fill-gold-warm" />
          </div>

          {/* Main heading with GLOW */}
          <h1 
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-moon-white mb-6 leading-tight text-glow-gold"
            style={{ animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}
          >
            ODKRYJTE SVOU
            <br />
            <span className="text-gradient-gold">BUDOUCNOST</span>
          </h1>

          {/* Subtext */}
          <p 
            className="font-body text-lg md:text-xl text-mystic-blue max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '0.6s', opacity: 0 }}
          >
            Spojte se s ověřenými věštkyněmi a kartářkami. Získejte odpovědi na své nejhlubší otázky prostřednictvím tarotu, astrologie a dalších mystických technik.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '0.8s', opacity: 0 }}
          >
            <Button variant="hero" size="xl" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                Vyložit karty zdarma
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-gold-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="glass" size="xl" className="border-gold-warm/30 hover:border-gold-warm">
              Prozkoumat poradce
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="flex flex-wrap justify-center gap-8 mt-16 text-mystic-blue/80 text-sm font-body"
            style={{ animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '1s', opacity: 0 }}
          >
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <div className="relative w-2.5 h-2.5">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-2.5 h-2.5 bg-green-500 rounded-full" />
              </div>
              <span>25+ online poradců</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-warm text-gold-warm" />
                ))}
              </div>
              <span>4.9/5 (2,847 recenzí)</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <span>🔒</span>
              <span>100% diskrétní</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cosmic-deep via-cosmic-deep/80 to-transparent" />
    </section>
  );
};
