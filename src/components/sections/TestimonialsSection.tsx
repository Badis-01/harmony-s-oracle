import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Martina K.',
    text: 'Madame Helena mi pomohla najít směr v mém životě. Její výklad byl neuvěřitelně přesný a dodal mi sílu pokračovat.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jana P.',
    text: 'Byla jsem skeptická, ale po konzultaci s Lunou jsem změnila názor. Její vhled do mé situace byl ohromující.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Petra V.',
    text: 'Numerologický rozbor od Evy mi otevřel oči. Nyní chápu, proč se věci dějí tak, jak se dějí.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Co říkají <span className="text-gradient-gold">klienti</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 relative">
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-10 h-10 text-gold-warm/20" />

              {/* Testimonial content */}
              <div className="text-center relative z-10">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-warm text-gold-warm" />
                  ))}
                </div>

                <p className="font-body text-lg md:text-xl text-moon-white leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                <p className="font-heading text-gold-warm text-lg">
                  {testimonials[currentIndex].name}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-mystic-blue hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-gold-warm w-6' : 'bg-mystic-blue/30 hover:bg-mystic-blue/50'
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
