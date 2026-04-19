/**
 * MysticSymbols
 * Decentní magické symboly rozmístěné po celé délce stránky.
 * Slouží jako "vyplň" mezi sekcemi, aby obsah neplaval v prázdné černotě.
 *
 * Pravidla:
 * - opacity ~0.04–0.07 (sotva viditelné)
 * - tenké linky (stroke 0.6–1)
 * - pomalé animace (rotace 60–180s, pulz 6–10s)
 * - pointer-events: none, z-index: 0 (pod obsahem)
 * - používá design tokeny (gold-warm, purple-electric, mystic-blue)
 */

type SymbolProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Pentagram v kruhu
const Pentagram = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.4" />
    <path
      d="M50 12 L61.8 47.6 L97.6 47.6 L68.9 69.6 L80.7 105.2 L50 83.2 L19.3 105.2 L31.1 69.6 L2.4 47.6 L38.2 47.6 Z"
      transform="scale(0.78) translate(14, 8)"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinejoin="round"
    />
  </svg>
);

// Hexagram (Davidova hvězda / Šalamounova pečeť)
const Hexagram = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.5" />
    <polygon
      points="50,10 85,72 15,72"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinejoin="round"
    />
    <polygon
      points="50,90 15,28 85,28"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinejoin="round"
    />
  </svg>
);

// Oko / All-seeing eye v trojúhelníku
const EyeOfProvidence = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <polygon
      points="50,10 90,85 10,85"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinejoin="round"
    />
    <path
      d="M28 60 Q50 42 72 60 Q50 78 28 60 Z"
      stroke="currentColor"
      strokeWidth="0.6"
    />
    <circle cx="50" cy="60" r="6" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="50" cy="60" r="2.5" fill="currentColor" />
  </svg>
);

// Fáze měsíce
const MoonPhases = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 240 60" className={className} style={style} fill="none">
    <circle cx="20" cy="30" r="18" stroke="currentColor" strokeWidth="0.6" />
    <path d="M60 12 A18 18 0 1 1 60 48 A12 18 0 1 0 60 12" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="120" cy="30" r="18" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.5" />
    <path d="M180 12 A18 18 0 1 0 180 48 A12 18 0 1 1 180 12" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="220" cy="30" r="18" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

// Slunce s paprsky
const Sun = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.4" />
    {Array.from({ length: 16 }, (_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const x1 = 50 + 24 * Math.cos(angle);
      const y1 = 50 + 24 * Math.sin(angle);
      const x2 = 50 + (i % 2 === 0 ? 42 : 36) * Math.cos(angle);
      const y2 = 50 + (i % 2 === 0 ? 42 : 36) * Math.sin(angle);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

// Alchymistické trojúhelníky (čtyři živly)
const Elements = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 200 60" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="round">
    {/* Oheň */}
    <polygon points="20,50 35,15 50,50" />
    {/* Voda */}
    <polygon points="65,15 95,15 80,50" />
    {/* Vzduch */}
    <polygon points="110,50 125,15 140,50" />
    <line x1="118" y1="38" x2="132" y2="38" />
    {/* Země */}
    <polygon points="155,15 185,15 170,50" />
    <line x1="162" y1="32" x2="178" y2="32" />
  </svg>
);

// Ouroboros-style kroužky (vrstvený kruh)
const SacredCircle = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      return (
        <circle
          key={i}
          cx={50 + 40 * Math.cos(angle)}
          cy={50 + 40 * Math.sin(angle)}
          r="2"
          fill="currentColor"
        />
      );
    })}
  </svg>
);

// Konstelace / souhvězdí
const Constellation = ({ className, style }: SymbolProps) => {
  const points: [number, number][] = [
    [10, 40], [35, 20], [60, 35], [85, 15], [110, 45], [140, 30], [170, 55], [190, 25],
  ];
  return (
    <svg viewBox="0 0 200 80" className={className} style={style} fill="none">
      <path
        d={points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')}
        stroke="currentColor"
        strokeWidth="0.4"
      />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2 : 1.2} fill="currentColor" />
      ))}
    </svg>
  );
};

export const MysticSymbols = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* ~700px — mezi Hero a Advisors */}
      <Pentagram
        className="absolute text-gold-warm opacity-[0.05] w-[280px] h-[280px] -left-16 top-[700px]"
        style={{ animation: 'rotate-slow 180s linear infinite' }}
      />

      {/* ~1400px — vedle Advisors */}
      <Constellation
        className="absolute text-mystic-blue opacity-[0.08] w-[320px] h-[128px] right-8 top-[1500px]"
      />

      {/* ~2200px — mezi How It Works a Services */}
      <Hexagram
        className="absolute text-purple-electric opacity-[0.05] w-[240px] h-[240px] right-[8%] top-[2300px]"
        style={{ animation: 'rotate-slow 200s linear infinite reverse' }}
      />
      <MoonPhases
        className="absolute text-gold-warm opacity-[0.06] w-[360px] h-[90px] left-[10%] top-[2600px]"
      />

      {/* ~3200px — vedle Services */}
      <Sun
        className="absolute text-gold-warm opacity-[0.05] w-[260px] h-[260px] -right-12 top-[3300px]"
        style={{ animation: 'rotate-slow 240s linear infinite' }}
      />

      {/* ~4000px — mezi Horoscopes a Why Us */}
      <EyeOfProvidence
        className="absolute text-purple-electric opacity-[0.05] w-[220px] h-[220px] left-[6%] top-[4100px]"
      />
      <Constellation
        className="absolute text-mystic-blue opacity-[0.07] w-[280px] h-[112px] right-[12%] top-[4400px]"
      />

      {/* ~4900px — okolo Card of Day */}
      <SacredCircle
        className="absolute text-gold-warm opacity-[0.04] w-[340px] h-[340px] -left-20 top-[5000px]"
        style={{ animation: 'rotate-slow 220s linear infinite' }}
      />

      {/* ~5600px — mezi Testimonials a Numerology */}
      <Elements
        className="absolute text-purple-electric opacity-[0.06] w-[300px] h-[90px] right-[8%] top-[5700px]"
      />
      <Pentagram
        className="absolute text-gold-warm opacity-[0.04] w-[200px] h-[200px] left-[4%] top-[6000px]"
        style={{ animation: 'rotate-slow 160s linear infinite reverse' }}
      />

      {/* ~6500px — okolo Blog */}
      <Hexagram
        className="absolute text-mystic-blue opacity-[0.05] w-[260px] h-[260px] -right-10 top-[6700px]"
        style={{ animation: 'rotate-slow 200s linear infinite' }}
      />
      <MoonPhases
        className="absolute text-gold-warm opacity-[0.05] w-[320px] h-[80px] left-[12%] top-[7000px]"
      />

      {/* ~7400px — okolo Newsletter */}
      <Sun
        className="absolute text-gold-warm opacity-[0.04] w-[220px] h-[220px] left-[6%] top-[7500px]"
        style={{ animation: 'rotate-slow 260s linear infinite reverse' }}
      />
      <Constellation
        className="absolute text-mystic-blue opacity-[0.07] w-[300px] h-[120px] right-[6%] top-[7700px]"
      />
    </div>
  );
};
