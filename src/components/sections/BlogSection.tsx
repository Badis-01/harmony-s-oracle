import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Jak správně interpretovat Velkou arkánu',
    excerpt: 'Průvodce 22 kartami, které tvoří základ každého výkladu tarotu. Naučte se číst jejich hluboké poselství.',
    category: 'Tarot',
    date: '28. 1. 2026',
    readTime: '5 min',
    author: 'Madame Helena',
  },
  {
    id: 2,
    title: 'Co prozradí váš numerologický profil',
    excerpt: 'Zjistěte, jak čísla vašeho narození ovlivňují váš život a jakým směrem se máte ubírat.',
    category: 'Numerologie',
    date: '25. 1. 2026',
    readTime: '7 min',
    author: 'Eva Mystická',
  },
  {
    id: 3,
    title: 'Retrográdní Merkur 2026: Co očekávat',
    excerpt: 'Příprava na období komunikačních výzev a introspekce. Jak využít tuto energii ve svůj prospěch.',
    category: 'Astrologie',
    date: '22. 1. 2026',
    readTime: '4 min',
    author: 'Kristýna Světlá',
  },
];

const categoryColors: Record<string, string> = {
  'Tarot': 'bg-purple-electric/20 text-purple-electric border-purple-electric/30',
  'Numerologie': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Astrologie': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export const BlogSection = () => {
  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-electric/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Novinky & tipy</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Nejnovější <span className="text-gradient-purple">články</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Poznatky a tipy z mystického světa od našich zkušených poradců
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 100}>
              <article className="glass-card glass-card-hover group cursor-pointer overflow-hidden h-full flex flex-col">
                {/* Image placeholder with gradient */}
                <div className="h-52 bg-gradient-to-br from-cosmic-glow via-cosmic-surface to-purple-electric/20 relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {[...Array(5)].map((_, i) => (
                        <circle
                          key={i}
                          cx="70"
                          cy="30"
                          r={15 + i * 10}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.3"
                          className="text-gold-warm"
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-body font-medium border ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-mystic-blue/70 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl text-moon-white mb-3 group-hover:text-gold-warm transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-mystic-blue mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  {/* Read more link */}
                  <div className="flex items-center gap-2 text-gold-warm font-body text-sm font-medium group-hover:gap-4 transition-all duration-300">
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
