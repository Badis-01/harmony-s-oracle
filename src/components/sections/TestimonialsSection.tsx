import { useState, useEffect, useCallback } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jana Nováková',
    date: 'Před 2 dny',
    advisor: 'Madame Helena',
    text: 'Naprosto úžasný výklad, Sibyla mi otevřela oči. Všechno sedělo a její slova mě provázejí každý den. Doporučuji každému, kdo hledá odpovědi.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Martina Králová',
    date: 'Před 5 dny',
    advisor: 'Luna Stříbrná',
    text: 'Byla jsem skeptická, ale po konzultaci s Lunou jsem změnila názor. Její vhled do mé situace byl ohromující. Předpověděla mi setkání s mým nynějším partnerem!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Petra Veselá',
    date: 'Před týdnem',
    advisor: 'Eva Mystická',
    text: 'Numerologický rozbor od Evy mi otevřel oči. Nyní chápu, proč se věci dějí tak, jak se dějí. Její přístup je profesionální a laskavý zároveň.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lucie Dvořáková',
    date: 'Před 2 týdny',
    advisor: 'Sibyla Africká',
    text: 'Sibyla má dar vidět to, co ostatní nevidí. Její výklad mi pomohl udělat důležité životní rozhodnutí. Jsem jí nesmírně vděčná.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Karolína Malá',
    date: 'Před 3 týdny',
    advisor: 'Věra Moudrá',
    text: 'Třicet let zkušeností je znát. Věra je neuvěřitelně přesná a její rady jsou praktické. Volám jí pravidelně už dva roky.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Tereza Svobodová',
    date: 'Před měsícem',
    advisor: 'Kristýna Světlá',
    text: 'Astrologický výklad byl detailní a naprosto přesný. Kristýna mi pomohla pochopit můj životní směr. Skvělý zážitek!',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Calculate visible cards based on viewport
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };
  
  const [visibleCards, setVisibleCards] = useState(3);
  
  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCards;
  
  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);
  
  const prev = () => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Large background quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Quote className="w-[400px] h-[400px] text-purple-electric/5" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block">Recenze klientů</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Co říkají <span className="text-gradient-gold">klienti</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Tisíce spokojených klientů sdílí své zkušenosti
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation arrows - hidden on mobile, visible on tablet+ */}
            <button
              onClick={prev}
              className="hidden md:flex absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-card items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Předchozí"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              onClick={next}
              className="hidden md:flex absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-card items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Další"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>

            {/* Carousel container - swipeable on mobile */}
            <div className="overflow-hidden mx-0 md:mx-8 touch-pan-x">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-2 md:px-3"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="glass-card p-6 md:p-8 h-full relative overflow-hidden group hover:border-gold-warm/30 transition-all duration-300">
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-warm/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quote icon - background */}
                      <Quote className="absolute top-4 right-4 w-16 h-16 text-purple-electric/10" strokeWidth={1} />

                      {/* Rating stars */}
                      <div className="flex gap-1 mb-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold-warm text-gold-warm" strokeWidth={1.5} />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="font-body text-base text-moon-white/90 leading-relaxed mb-6 italic relative z-10 line-clamp-4">
                        "{testimonial.text}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-4 mt-auto relative z-10">
                        {/* Avatar placeholder with initials */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-electric/30 to-gold-warm/20 flex items-center justify-center border border-gold-warm/30">
                          <span className="font-heading text-sm text-gold-warm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-heading text-base text-gold-warm">
                            {testimonial.name}
                          </p>
                          <p className="font-body text-xs text-mystic-blue/70">
                            {testimonial.date} · {testimonial.advisor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-gold-warm w-8' : 'bg-mystic-blue/30 w-2 hover:bg-mystic-blue/50'
                  }`}
                  aria-label={`Přejít na ${i + 1}. slide`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};