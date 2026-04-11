import { ScrollReveal } from '@/components/ScrollReveal';

const zodiacSigns = [
  { name: 'Beran', symbol: '♈', dates: '21.3 - 19.4' },
  { name: 'Býk', symbol: '♉', dates: '20.4 - 20.5' },
  { name: 'Blíženci', symbol: '♊', dates: '21.5 - 20.6' },
  { name: 'Rak', symbol: '♋', dates: '21.6 - 22.7' },
  { name: 'Lev', symbol: '♌', dates: '23.7 - 22.8' },
  { name: 'Panna', symbol: '♍', dates: '23.8 - 22.9' },
  { name: 'Váhy', symbol: '♎', dates: '23.9 - 22.10' },
  { name: 'Štír', symbol: '♏', dates: '23.10 - 21.11' },
  { name: 'Střelec', symbol: '♐', dates: '22.11 - 21.12' },
  { name: 'Kozoroh', symbol: '♑', dates: '22.12 - 19.1' },
  { name: 'Vodnář', symbol: '♒', dates: '20.1 - 18.2' },
  { name: 'Ryby', symbol: '♓', dates: '19.2 - 20.3' },
];

export const HoroscopesSection = () => {
  const radius = 42;

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-electric/8 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-purple-electric font-body text-sm tracking-widest uppercase mb-4 block">Vaše znamení</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4">
              Denní <span className="text-gradient-purple text-glow-purple">horoskopy</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Vyberte své znamení a zjistěte, co vám hvězdy přináší
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full max-w-[550px] md:max-w-[650px] aspect-square mx-auto">
            {/* Decorative SVG rings */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_120s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(270 90% 68% / 0.1)" strokeWidth="0.2" />
              <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(270 90% 68% / 0.15)" strokeWidth="0.3" strokeDasharray="2 1.5" />
              <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(270 90% 68% / 0.07)" strokeWidth="0.2" />
            </svg>

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="24" fill="none" stroke="hsl(270 90% 68% / 0.05)" strokeWidth="0.15" />
              {/* Radial lines */}
              {[0, 30, 60, 90, 120, 150].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1={50 + 24 * Math.cos(rad)}
                    y1={50 + 24 * Math.sin(rad)}
                    x2={50 + 46 * Math.cos(rad)}
                    y2={50 + 46 * Math.sin(rad)}
                    stroke="hsl(270 90% 68% / 0.05)"
                    strokeWidth="0.12"
                  />
                );
              })}
            </svg>

            {/* Zodiac sign nodes */}
            {zodiacSigns.map((sign, index) => {
              const angle = ((index * 360) / 12 - 90) * (Math.PI / 180);
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <a
                  key={index}
                  href="#"
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 group no-underline"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  aria-label={sign.name}
                >
                  {/* Circle node */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-cosmic-surface/80 border border-purple-electric/25 group-hover:border-purple-electric/60 group-hover:bg-purple-electric/15 group-hover:scale-110 group-hover:shadow-[0_0_24px_hsl(270_90%_68%/0.35)]">
                    <span
                      className="text-2xl md:text-[28px] text-purple-electric/80 group-hover:text-purple-electric transition-colors duration-300"
                      style={{ fontFamily: "'Cinzel', 'Noto Sans Symbols 2', serif", fontVariantEmoji: 'text' } as React.CSSProperties}
                    >
                      {sign.symbol}
                    </span>
                  </div>

                  {/* Name label */}
                  <span className="font-heading text-[10px] md:text-xs text-mystic-blue/70 group-hover:text-moon-white transition-colors duration-300 whitespace-nowrap">
                    {sign.name}
                  </span>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
