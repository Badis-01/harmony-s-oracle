import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Phone, MessageCircle, Star, Eye, PhoneCall, Clock } from 'lucide-react';
import advisor1 from '@/assets/advisor-1.png';
import advisor2 from '@/assets/advisor-2.png';
import advisor3 from '@/assets/advisor-3.png';
import advisor4 from '@/assets/advisor-4.png';
import advisor5 from '@/assets/advisor-5.png';
import advisor6 from '@/assets/advisor-6.png';
import advisor7 from '@/assets/advisor-7.png';
import advisor8 from '@/assets/advisor-8.png';

type AdvisorStatus = 'available' | 'busy' | 'offline';

interface Advisor {
  id: number;
  name: string;
  bio: string;
  tags: Array<{ label: string; type: 'tarot' | 'love' | 'finance' | 'astro' }>;
  rating: number;
  reviews: number;
  pricePerMin: number;
  image: string;
  status: AdvisorStatus;
  busyTime?: string;
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
    status: 'available',
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
    status: 'available',
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
    status: 'busy',
    busyTime: '~8 min',
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
    status: 'available',
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
    status: 'available',
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
    status: 'busy',
    busyTime: '~15 min',
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
    status: 'offline',
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
    status: 'busy',
    busyTime: '~5 min',
  },
];

const tagStyles = {
  tarot: 'tag-tarot',
  love: 'tag-love',
  finance: 'tag-finance',
  astro: 'tag-astro',
};

const statusConfig = {
  available: {
    badge: 'Volná',
    badgeClass: 'bg-green-500/20 text-green-400 border-green-500/30',
    ringClass: 'ring-green-500',
    glowClass: 'shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]',
    cardOpacity: 'opacity-100',
  },
  busy: {
    badge: 'Hovoří',
    badgeClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse',
    ringClass: 'ring-orange-500',
    glowClass: '',
    cardOpacity: 'opacity-75',
  },
  offline: {
    badge: 'Offline',
    badgeClass: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    ringClass: 'ring-gray-500',
    glowClass: '',
    cardOpacity: 'opacity-60',
  },
};

export const AdvisorsSection = () => {
  const [mode, setMode] = useState<'call' | 'chat'>('call');

  // Sort advisors: available first, then busy, then offline
  const sortedAdvisors = [...advisors].sort((a, b) => {
    const order = { available: 0, busy: 1, offline: 2 };
    return order[a.status] - order[b.status];
  });

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

        {/* Toggle Switch - Clean Pill Style */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex rounded-full bg-cosmic-surface/50 backdrop-blur-sm border border-white/10 p-1">
              {/* Animated background pill */}
              <div 
                className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out ${
                  mode === 'call' 
                    ? 'left-1 bg-gradient-to-r from-gold-warm to-amber-400 shadow-gold' 
                    : 'left-[calc(50%+2px)] bg-gradient-to-r from-purple-electric to-violet-500 shadow-purple'
                }`}
              />
              
              <button
                onClick={() => setMode('call')}
                className={`relative z-10 flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  mode === 'call'
                    ? 'text-cosmic-deep'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                Volat
              </button>
              <button
                onClick={() => setMode('chat')}
                className={`relative z-10 flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  mode === 'chat'
                    ? 'text-moon-white'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                Chat
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Advisors Grid - 4 columns x 2 rows, horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 scrollbar-hide">
          {sortedAdvisors.map((advisor, index) => {
            const config = statusConfig[advisor.status];
            
            return (
              <ScrollReveal key={advisor.id} delay={index * 80}>
                <div 
                  className={`min-w-[280px] sm:min-w-[300px] lg:min-w-0 snap-center glass-card glass-card-hover p-5 h-full flex flex-col relative transition-all duration-500 ${config.cardOpacity} ${config.glowClass}`}
                >
                  {/* Status Badge - Top Right */}
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.badgeClass} flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      advisor.status === 'available' ? 'bg-green-400 animate-pulse' :
                      advisor.status === 'busy' ? 'bg-orange-400' : 'bg-gray-400'
                    }`} />
                    {config.badge}
                  </div>

                  {/* Avatar with status ring */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    {/* Pulsing ring for available */}
                    {advisor.status === 'available' && (
                      <div className="absolute -inset-1 rounded-full bg-green-500/20 animate-pulse" />
                    )}
                    
                    {/* Photo with colored ring */}
                    <div className={`w-full h-full rounded-full overflow-hidden ring-2 ${config.ringClass} ring-offset-2 ring-offset-cosmic-deep p-0.5 relative`}>
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    {/* Busy indicator with time */}
                    {advisor.status === 'busy' && advisor.busyTime && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-cosmic-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-orange-500/30 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-400" strokeWidth={2} />
                        <span className="text-[10px] text-orange-400 font-medium">{advisor.busyTime}</span>
                      </div>
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
                        strokeWidth={1.5}
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
                    {advisor.status === 'available' ? (
                      <Button
                        variant={mode === 'call' ? 'advisor' : 'advisorChat'}
                        className="flex-1 text-sm"
                      >
                        {mode === 'call' ? (
                          <>
                            <PhoneCall className="w-4 h-4" strokeWidth={2} />
                            {advisor.pricePerMin} Kč/min
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-4 h-4" strokeWidth={2} />
                            Psát
                          </>
                        )}
                      </Button>
                    ) : advisor.status === 'busy' ? (
                      <Button
                        variant="outline"
                        className="flex-1 text-sm border-orange-500/30 text-orange-400/70 cursor-not-allowed"
                        disabled
                      >
                        <Clock className="w-4 h-4" strokeWidth={2} />
                        Obsazeno
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="flex-1 text-sm border-gray-500/30 text-gray-400/70 cursor-not-allowed"
                        disabled
                      >
                        Offline
                      </Button>
                    )}
                    <Button variant="glass" size="icon" className="shrink-0">
                      <Eye className="w-4 h-4" strokeWidth={2} />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
