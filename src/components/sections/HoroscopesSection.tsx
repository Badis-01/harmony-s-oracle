import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const zodiacSigns = [
  { name: 'Beran', symbol: '♈', dates: '21.3 - 19.4', prediction: 'Nové příležitosti na obzoru. Buďte odvážní.' },
  { name: 'Býk', symbol: '♉', dates: '20.4 - 20.5', prediction: 'Finance se stabilizují. Čas na investice.' },
  { name: 'Blíženci', symbol: '♊', dates: '21.5 - 20.6', prediction: 'Komunikace přinese úspěch. Buďte otevření.' },
  { name: 'Rak', symbol: '♋', dates: '21.6 - 22.7', prediction: 'Rodinné záležitosti vyžadují pozornost.' },
  { name: 'Lev', symbol: '♌', dates: '23.7 - 22.8', prediction: 'Vaše kreativita zazáří. Využijte ji.' },
  { name: 'Panna', symbol: '♍', dates: '23.8 - 22.9', prediction: 'Detaily rozhodnou o úspěchu.' },
  { name: 'Váhy', symbol: '♎', dates: '23.9 - 22.10', prediction: 'Harmonie ve vztazích. Láska kvete.' },
  { name: 'Štír', symbol: '♏', dates: '23.10 - 21.11', prediction: 'Transformace přináší nové začátky.' },
  { name: 'Střelec', symbol: '♐', dates: '22.11 - 21.12', prediction: 'Cestování rozšíří vaše obzory.' },
  { name: 'Kozoroh', symbol: '♑', dates: '22.12 - 19.1', prediction: 'Kariérní postup je na dosah.' },
  { name: 'Vodnář', symbol: '♒', dates: '20.1 - 18.2', prediction: 'Inovativní nápady přinesou uznání.' },
  { name: 'Ryby', symbol: '♓', dates: '19.2 - 20.3', prediction: 'Intuice vás povede správným směrem.' },
];

export const HoroscopesSection = () => {
  const [hoveredSign, setHoveredSign] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold-warm/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-electric/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Vaše znamení</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Denní <span className="text-gradient-purple text-glow-purple">horoskopy</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Najeďte na své znamení a zjistěte, co vám hvězdy přináší
            </p>
          </div>
        </ScrollReveal>

        {/* Zodiac Coins Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {zodiacSigns.map((sign, index) => (
            <ScrollReveal key={index} delay={index * 40}>
              <div 
                className="zodiac-coin w-full p-4"
                onMouseEnter={() => setHoveredSign(index)}
                onMouseLeave={() => setHoveredSign(null)}
              >
                {/* Symbol */}
                <span className="zodiac-symbol text-4xl md:text-5xl text-gold-warm transition-all duration-300">
                  {sign.symbol}
                </span>
                
                {/* Name */}
                <h3 className="font-heading text-xs md:text-sm text-moon-white mt-2 mb-0.5">{sign.name}</h3>
                <p className="font-body text-[10px] text-mystic-blue/60">{sign.dates}</p>

                {/* Prediction overlay on hover */}
                {hoveredSign === index && (
                  <div className="absolute inset-0 rounded-full bg-cosmic-deep/95 flex items-center justify-center p-4 animate-fade-in">
                    <p className="font-body text-xs text-center text-gold-warm leading-relaxed">
                      {sign.prediction}
                    </p>
                  </div>
                )}

                {/* Inner ring decoration */}
                <div className="absolute inset-3 rounded-full border border-gold-warm/10 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
