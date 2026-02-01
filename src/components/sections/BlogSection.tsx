import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Jak správně interpretovat Velkou arkánu',
    excerpt: 'Průvodce 22 kartami, které tvoří základ každého výkladu tarotu.',
    category: 'Tarot',
    date: '28. 1. 2026',
  },
  {
    id: 2,
    title: 'Co prozradí váš numerologický profil',
    excerpt: 'Zjistěte, jak čísla vašeho narození ovlivňují váš život.',
    category: 'Numerologie',
    date: '25. 1. 2026',
  },
  {
    id: 3,
    title: 'Retrográdní Merkur 2026: Co očekávat',
    excerpt: 'Příprava na období komunikačních výzev a introspekce.',
    category: 'Astrologie',
    date: '22. 1. 2026',
  },
];

export const BlogSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Nejnovější <span className="text-gradient-purple">články</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Poznatky a tipy z mystického světa
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 100}>
              <article className="glass-card group cursor-pointer hover:border-gold-warm/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-cosmic-glow to-cosmic-surface relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-body bg-gold-warm/20 text-gold-warm border border-gold-warm/30">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-body text-xs text-mystic-blue/70 mb-2">{article.date}</p>
                  <h3 className="font-heading text-lg text-moon-white mb-3 group-hover:text-gold-warm transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-mystic-blue mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-gold-warm font-body text-sm group-hover:gap-3 transition-all duration-300">
                    Číst více
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
