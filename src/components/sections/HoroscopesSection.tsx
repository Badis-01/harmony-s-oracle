import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles } from 'lucide-react';

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
  const [selectedSign, setSelectedSign] = useState<number | null>(null);

  // Circle layout: 12 signs evenly distributed, starting from top (-90deg)
  const radius = 42; // percentage of container

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-electric/8 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Vaše znamení</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Denní <span className="text-gradient-purple text-glow-purple">horoskopy</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Klikněte na své znamení a zjistěte, co vám hvězdy přináší
            </p>
          </div>
        </ScrollReveal>

        {/* Zodiac Wheel */}
        <ScrollReveal>
          <div className="relative w-full max-w-[600px] md:max-w-[700px] aspect-square mx-auto">
            {/* Decorative rings */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Outer ring */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(270 90% 68% / 0.12)" strokeWidth="0.3" />
              {/* Main ring where signs sit */}
              <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(270 90% 68% / 0.2)" strokeWidth="0.4" strokeDasharray="1.5 1" />
              {/* Inner decorative ring */}
              <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(270 90% 68% / 0.08)" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="24" fill="none" stroke="hsl(270 90% 68% / 0.06)" strokeWidth="0.2" />
              {/* Cross lines */}
              {[0, 30, 60, 90, 120, 150].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1={50 + 24 * Math.cos(rad)}
                    y1={50 + 24 * Math.sin(rad)}
                    x2={50 + 46 * Math.cos(rad)}
                    y2={50 + 46 * Math.sin(rad)}
                    stroke="hsl(270 90% 68% / 0.06)"
                    strokeWidth="0.15"
                  />
                );
              })}
            </svg>

            {/* Center content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {selectedSign !== null ? (
                <div className="glass-card px-6 py-5 md:px-10 md:py-6 max-w-[280px] md:max-w-[320px] text-center animate-fade-in border border-purple-electric/20">
                  <h3 className="font-heading text-lg md:text-xl text-purple-electric mb-1">
                    {zodiacSigns[selectedSign].symbol} {zodiacSigns[selectedSign].name}
                  </h3>
                  <p className="font-body text-[11px] text-mystic-blue/60 mb-3">
                    {zodiacSigns[selectedSign].dates}
                  </p>
                  <p className="font-body text-sm text-moon-white/90 leading-relaxed">
                    {zodiacSigns[selectedSign].prediction}
                  </p>
                </div>
              ) : (
                <div className="glass-card px-8 py-6 md:px-12 md:py-8 text-center border border-purple-electric/10">
                  <Sparkles className="w-8 h-8 text-gold-warm mx-auto mb-3" strokeWidth={1.5} />
                  <p className="font-body text-sm text-mystic-blue">
                    Vyberte své znamení
                  </p>
                </div>
              )}
            </div>

            {/* Zodiac sign nodes on the circle */}
            {zodiacSigns.map((sign, index) => {
              const angle = ((index * 360) / 12 - 90) * (Math.PI / 180);
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              const isSelected = selectedSign === index;

              return (
                <button
                  key={index}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer group
                    ${isSelected
                      ? 'bg-purple-electric/30 border-2 border-purple-electric scale-110 shadow-[0_0_20px_hsl(270_90%_68%/0.4)]'
                      : 'bg-cosmic-surface/80 border border-purple-electric/20 hover:border-purple-electric/50 hover:bg-purple-electric/15 hover:scale-110'
                    }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  onClick={() => setSelectedSign(isSelected ? null : index)}
                  aria-label={sign.name}
                >
                  <span className={`text-xl md:text-2xl transition-all duration-300 ${isSelected ? 'text-purple-electric' : 'text-purple-electric/70 group-hover:text-purple-electric'}`}>
                    {sign.symbol}
                  </span>

                  {/* Tooltip name on hover */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-body text-[10px] text-mystic-blue whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {sign.name}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
