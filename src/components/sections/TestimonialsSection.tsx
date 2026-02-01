import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import advisor1 from '@/assets/advisor-1.png';
import advisor2 from '@/assets/advisor-2.png';
import advisor4 from '@/assets/advisor-4.png';

const testimonials = [
  {
    id: 1,
    name: 'Martina K.',
    avatar: advisor1,
    advisor: 'Madame Helena',
    text: 'Úžasný zážitek, děkuji! Madame Helena mi pomohla najít směr v mém životě. Její výklad byl neuvěřitelně přesný a dodal mi sílu pokračovat. Doporučuji každému, kdo hledá odpovědi.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jana P.',
    avatar: advisor2,
    advisor: 'Luna Stříbrná',
    text: 'Byla jsem skeptická, ale po konzultaci s Lunou jsem změnila názor. Její vhled do mé situace byl ohromující. Předpověděla mi setkání s mým nynějším partnerem!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Petra V.',
    avatar: advisor4,
    advisor: 'Eva Mystická',
    text: 'Numerologický rozbor od Evy mi otevřel oči. Nyní chápu, proč se věci dějí tak, jak se dějí. Její přístup je profesionální a laskavý zároveň.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Large background quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-heading text-purple-electric/5 select-none pointer-events-none">
        "
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block">Recenze klientů</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Co říkají <span className="text-gradient-gold">klienti</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-warm/10 to-transparent" />
              
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-gold-warm/20" />

              {/* Testimonial content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold-warm text-gold-warm" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-lg md:text-xl text-moon-white leading-relaxed mb-8 text-center italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-warm/50"
                  />
                  <div className="text-left">
                    <p className="font-heading text-lg text-gold-warm">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="font-body text-sm text-mystic-blue">
                      Konzultace s {testimonials[currentIndex].advisor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-gold-warm w-8' : 'bg-mystic-blue/30 w-2 hover:bg-mystic-blue/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
