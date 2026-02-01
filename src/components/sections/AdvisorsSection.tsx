import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Phone, MessageCircle, Star } from 'lucide-react';
import advisor1 from '@/assets/advisor-1.png';
import advisor2 from '@/assets/advisor-2.png';
import advisor3 from '@/assets/advisor-3.png';
import advisor4 from '@/assets/advisor-4.png';

interface Advisor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  pricePerMin: number;
  image: string;
  isOnline: boolean;
}

const advisors: Advisor[] = [
  { id: 1, name: 'Madame Helena', specialty: 'Tarot & Láska', rating: 4.9, reviews: 324, pricePerMin: 50, image: advisor1, isOnline: true },
  { id: 2, name: 'Kristýna Světlá', specialty: 'Astrologie', rating: 4.8, reviews: 189, pricePerMin: 45, image: advisor2, isOnline: true },
  { id: 3, name: 'Eva Mystická', specialty: 'Numerologie', rating: 4.9, reviews: 256, pricePerMin: 55, image: advisor3, isOnline: false },
  { id: 4, name: 'Luna Stříbrná', specialty: 'Křišťálová koule', rating: 5.0, reviews: 412, pricePerMin: 60, image: advisor4, isOnline: true },
];

export const AdvisorsSection = () => {
  const [mode, setMode] = useState<'call' | 'chat'>('call');

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-electric/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Naše <span className="text-gradient-gold">kartářky</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Vyberte si z ověřených věštkyň a kartářek. Každá z nich prošla důkladným výběrem.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle Switch */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex glass-card p-1.5 gap-1">
              <button
                onClick={() => setMode('call')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                  mode === 'call'
                    ? 'bg-gradient-to-r from-gold-warm to-amber-400 text-cosmic-deep shadow-gold'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                Volat
              </button>
              <button
                onClick={() => setMode('chat')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                  mode === 'chat'
                    ? 'bg-gradient-to-r from-purple-electric to-violet-500 text-moon-white shadow-purple'
                    : 'text-mystic-blue hover:text-moon-white'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Chat
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <ScrollReveal key={advisor.id} delay={index * 100}>
              <div className="glass-card p-6 group hover:border-gold-warm/30 transition-all duration-300 hover:-translate-y-2">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full rounded-full object-cover border-2 border-gold-warm/30"
                  />
                  {/* Status dot */}
                  <div
                    className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-cosmic-surface ${
                      advisor.isOnline ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                    style={advisor.isOnline ? { animation: 'pulse-glow 2s ease-in-out infinite' } : {}}
                  />
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl text-moon-white mb-1">{advisor.name}</h3>
                  <p className="font-body text-sm text-mystic-blue">{advisor.specialty}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(advisor.rating) ? 'fill-gold-warm text-gold-warm' : 'text-mystic-blue/30'}`}
                    />
                  ))}
                  <span className="text-sm text-mystic-blue ml-2">({advisor.reviews})</span>
                </div>

                {/* Action Button */}
                <Button
                  variant={mode === 'call' ? 'advisor' : 'advisorChat'}
                  className="w-full"
                  disabled={!advisor.isOnline}
                >
                  {mode === 'call' ? (
                    <>
                      <Phone className="w-4 h-4" />
                      Zavolat ({advisor.pricePerMin} Kč/min)
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      Psát zprávu
                    </>
                  )}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
