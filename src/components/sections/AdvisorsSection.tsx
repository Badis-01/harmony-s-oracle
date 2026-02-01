import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Phone, MessageCircle, Star, Eye } from 'lucide-react';
import advisor1 from '@/assets/advisor-1.png';
import advisor2 from '@/assets/advisor-2.png';
import advisor3 from '@/assets/advisor-3.png';
import advisor4 from '@/assets/advisor-4.png';
import advisor5 from '@/assets/advisor-5.png';
import advisor6 from '@/assets/advisor-6.png';
import advisor7 from '@/assets/advisor-7.png';
import advisor8 from '@/assets/advisor-8.png';

interface Advisor {
  id: number;
  name: string;
  bio: string;
  tags: Array<{ label: string; type: 'tarot' | 'love' | 'finance' | 'astro' }>;
  rating: number;
  reviews: number;
  pricePerMin: number;
  image: string;
  isOnline: boolean;
}

const advisors: Advisor[] = [
  { 
    id: 1, 
    name: 'Madame Helena', 
    bio: 'Specializuji se na partnerské vztahy a rodinné konstelace. 15 let zkušeností s tarotem.',
    tags: [{ label: 'Tarot', type: 'tarot' }, { label: 'Láska', type: 'love' }],
    rating: 4.9, 
    reviews: 342, 
    pricePerMin: 50, 
    image: advisor1, 
    isOnline: true 
  },
  { 
    id: 2, 
    name: 'Kristýna Světlá', 
    bio: 'Astrologické výklady a horoskopy na míru. Pomohu vám pochopit váš životní plán.',
    tags: [{ label: 'Astrologie', type: 'astro' }, { label: 'Finance', type: 'finance' }],
    rating: 4.8, 
    reviews: 189, 
    pricePerMin: 45, 
    image: advisor2, 
    isOnline: true 
  },
  { 
    id: 3, 
    name: 'Eva Mystická', 
    bio: 'Numerologický rozbor života a karmy. Odkryji tajemství vašeho osudu skrze čísla.',
    tags: [{ label: 'Tarot', type: 'tarot' }, { label: 'Finance', type: 'finance' }],
    rating: 4.9, 
    reviews: 256, 
    pricePerMin: 55, 
    image: advisor3, 
    isOnline: false 
  },
  { 
    id: 4, 
    name: 'Luna Stříbrná', 
    bio: 'Křišťálová koule a jasnovidectví. Nahlédnu do vaší budoucnosti s láskou.',
    tags: [{ label: 'Láska', type: 'love' }, { label: 'Astrologie', type: 'astro' }],
    rating: 5.0, 
    reviews: 412, 
    pricePerMin: 60, 
    image: advisor4, 
    isOnline: true 
  },
  { 
    id: 5, 
    name: 'Sibyla Africká', 
    bio: 'Přináším moudrost předků a duchovní vedení. Spojuji tradice s intuicí.',
    tags: [{ label: 'Tarot', type: 'tarot' }, { label: 'Láska', type: 'love' }, { label: 'Finance', type: 'finance' }],
    rating: 4.9, 
    reviews: 278, 
    pricePerMin: 65, 
    image: advisor5, 
    isOnline: true 
  },
  { 
    id: 6, 
    name: 'Věra Moudrá', 
    bio: '30 let praxe v kartářství. Klidný a laskavý přístup ke každému klientovi.',
    tags: [{ label: 'Tarot', type: 'tarot' }, { label: 'Astrologie', type: 'astro' }],
    rating: 5.0, 
    reviews: 523, 
    pricePerMin: 70, 
    image: advisor6, 
    isOnline: true 
  },
  { 
    id: 7, 
    name: 'Marcus Temný', 
    bio: 'Runové výklady a nordická magie. Odhaluji skryté cesty vašeho osudu.',
    tags: [{ label: 'Tarot', type: 'tarot' }, { label: 'Finance', type: 'finance' }],
    rating: 4.7, 
    reviews: 156, 
    pricePerMin: 55, 
    image: advisor7, 
    isOnline: false 
  },
  { 
    id: 8, 
    name: 'Jana Měsíční', 
    bio: 'Intuitivní čtení a duchovní poradenství. Propojím vás s vaší vnitřní moudrostí.',
    tags: [{ label: 'Láska', type: 'love' }, { label: 'Astrologie', type: 'astro' }],
    rating: 4.8, 
    reviews: 198, 
    pricePerMin: 50, 
    image: advisor8, 
    isOnline: true 
  },
];

const tagStyles = {
  tarot: 'tag-tarot',
  love: 'tag-love',
  finance: 'tag-finance',
  astro: 'tag-astro',
};

export const AdvisorsSection = () => {
  const [mode, setMode] = useState<'call' | 'chat'>('call');

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-electric/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block">Naši specialisté</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4 text-glow-gold">
              Ověřené <span className="text-gradient-gold">kartářky</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Vyberte si z našich ověřených věštkyň a kartářek. Každá z nich prošla důkladným výběrovým procesem.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle Switch */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex glass-card p-1.5 gap-1">
              <button
                onClick={() => setMode('call')}
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-base transition-all duration-300 ${
                  mode === 'call'
                    ? 'bg-gradient-to-r from-gold-warm to-amber-400 text-cosmic-deep shadow-gold'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <Phone className="w-5 h-5" />
                📞 Volat
              </button>
              <button
                onClick={() => setMode('chat')}
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-base transition-all duration-300 ${
                  mode === 'chat'
                    ? 'bg-gradient-to-r from-purple-electric to-violet-500 text-moon-white shadow-purple'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                💬 Chat
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Advisors Grid - 4 columns x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <ScrollReveal key={advisor.id} delay={index * 80}>
              <div className="glass-card glass-card-hover p-5 h-full flex flex-col">
                {/* Avatar with status */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold-warm/30 p-0.5">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Status dot with pulse */}
                  {advisor.isOnline && (
                    <div className="absolute bottom-1 right-1">
                      <div className="relative">
                        <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-50" />
                        <div className="relative w-4 h-4 bg-green-500 rounded-full border-2 border-cosmic-deep" />
                      </div>
                    </div>
                  )}
                  {!advisor.isOnline && (
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-gray-500 rounded-full border-2 border-cosmic-deep" />
                  )}
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl text-moon-white text-center mb-2">{advisor.name}</h3>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                  {advisor.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagStyles[tag.type]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(advisor.rating) ? 'fill-gold-warm text-gold-warm' : 'text-mystic-blue/30'}`}
                    />
                  ))}
                  <span className="text-xs text-mystic-blue ml-1">({advisor.reviews} recenzí)</span>
                </div>

                {/* Bio snippet */}
                <p className="font-body text-sm text-mystic-blue/80 text-center mb-4 line-clamp-2 flex-grow">
                  {advisor.bio}
                </p>

                {/* Action Area */}
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant={mode === 'call' ? 'advisor' : 'advisorChat'}
                    className="flex-1 text-sm"
                    disabled={!advisor.isOnline}
                  >
                    {mode === 'call' ? (
                      <>
                        <Phone className="w-4 h-4" />
                        {advisor.pricePerMin} Kč/min
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Psát
                      </>
                    )}
                  </Button>
                  <Button variant="glass" size="icon" className="shrink-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
