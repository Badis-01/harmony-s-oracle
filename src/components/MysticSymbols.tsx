/**
 * MysticSymbols
 * Velké, propracované magické symboly v bílé barvě s vysokou opacity.
 * Slouží jako dramatické pozadí mezi sekcemi.
 */

type SymbolProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Propracovaná Mandala — vícevrstvá, s lotosovými okvětními lístky
const ElaborateMandala = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
    {/* Vnější kruhy */}
    <circle cx="200" cy="200" r="195" strokeWidth="0.8" />
    <circle cx="200" cy="200" r="180" strokeWidth="0.5" strokeDasharray="2 6" />
    <circle cx="200" cy="200" r="165" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="140" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="115" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="90" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="60" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="30" strokeWidth="0.7" />
    <circle cx="200" cy="200" r="8" fill="currentColor" />

    {/* 24 paprsků */}
    {Array.from({ length: 24 }, (_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      return (
        <line
          key={`r-${i}`}
          x1={200 + 30 * Math.cos(a)}
          y1={200 + 30 * Math.sin(a)}
          x2={200 + 195 * Math.cos(a)}
          y2={200 + 195 * Math.sin(a)}
          strokeWidth="0.4"
        />
      );
    })}

    {/* Lotosové okvětní lístky — 12 ks */}
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const cx = 200 + 115 * Math.cos(a);
      const cy = 200 + 115 * Math.sin(a);
      return (
        <g key={`p-${i}`} transform={`rotate(${i * 30} 200 200)`}>
          <path
            d="M200,85 Q220,140 200,165 Q180,140 200,85 Z"
            strokeWidth="0.7"
          />
        </g>
      );
    })}

    {/* Vnitřní hvězda — 8cípá */}
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={`s-${i}`}
          x1={200 + 8 * Math.cos(a)}
          y1={200 + 8 * Math.sin(a)}
          x2={200 + 60 * Math.cos(a)}
          y2={200 + 60 * Math.sin(a)}
          strokeWidth="0.6"
        />
      );
    })}

    {/* Hexagram uvnitř */}
    <polygon points="200,110 278,245 122,245" strokeWidth="0.6" />
    <polygon points="200,290 122,155 278,155" strokeWidth="0.6" />

    {/* Drobné kuličky na vnějším kruhu */}
    {Array.from({ length: 24 }, (_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      return (
        <circle
          key={`d-${i}`}
          cx={200 + 195 * Math.cos(a)}
          cy={200 + 195 * Math.sin(a)}
          r="2"
          fill="currentColor"
        />
      );
    })}
  </svg>
);

// Sri Yantra (zjednodušená, ale propracovaná)
const SriYantra = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
    {/* Vnější čtverec s "branami" */}
    <rect x="20" y="20" width="360" height="360" strokeWidth="0.7" />
    <rect x="35" y="35" width="330" height="330" strokeWidth="0.4" />

    {/* Brány — T tvary na 4 stranách */}
    {[
      { x: 200, y: 20, r: 0 },
      { x: 380, y: 200, r: 90 },
      { x: 200, y: 380, r: 180 },
      { x: 20, y: 200, r: 270 },
    ].map((g, i) => (
      <g key={i} transform={`translate(${g.x} ${g.y}) rotate(${g.r})`}>
        <path d="M-30,0 L-30,-15 L30,-15 L30,0" strokeWidth="0.6" />
        <path d="M-15,-15 L-15,-30 L15,-30 L15,-15" strokeWidth="0.6" />
      </g>
    ))}

    {/* 16-petalový lotos */}
    {Array.from({ length: 16 }, (_, i) => (
      <g key={`l16-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
        <path d="M200,60 Q210,100 200,140 Q190,100 200,60 Z" strokeWidth="0.5" />
      </g>
    ))}

    {/* 8-petalový lotos */}
    {Array.from({ length: 8 }, (_, i) => (
      <g key={`l8-${i}`} transform={`rotate(${i * 45} 200 200)`}>
        <path d="M200,95 Q215,135 200,165 Q185,135 200,95 Z" strokeWidth="0.6" />
      </g>
    ))}

    {/* Vnitřní kruhy */}
    <circle cx="200" cy="200" r="140" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="105" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="78" strokeWidth="0.6" />

    {/* 9 propletených trojúhelníků (4 nahoru, 5 dolů — Sri Yantra) */}
    <polygon points="200,130 285,255 115,255" strokeWidth="0.7" />
    <polygon points="200,150 270,245 130,245" strokeWidth="0.6" />
    <polygon points="200,170 255,235 145,235" strokeWidth="0.5" />
    <polygon points="200,190 240,225 160,225" strokeWidth="0.5" />

    <polygon points="200,270 115,145 285,145" strokeWidth="0.7" />
    <polygon points="200,255 130,160 270,160" strokeWidth="0.6" />
    <polygon points="200,240 145,175 255,175" strokeWidth="0.5" />
    <polygon points="200,225 160,190 240,190" strokeWidth="0.5" />
    <polygon points="200,210 175,195 225,195" strokeWidth="0.5" />

    {/* Bindu — centrální bod */}
    <circle cx="200" cy="200" r="4" fill="currentColor" />
  </svg>
);

// Květ života (Flower of Life) — propracovaný
const FlowerOfLife = ({ className, style }: SymbolProps) => {
  const r = 40;
  const cx = 200;
  const cy = 200;
  const circles: Array<[number, number]> = [[cx, cy]];
  // První prstenec — 6 kruhů
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    circles.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  // Druhý prstenec — 12 kruhů
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    circles.push([cx + 2 * r * Math.cos(a), cy + 2 * r * Math.sin(a)]);
    const a2 = ((i * 60 + 30) * Math.PI) / 180;
    circles.push([cx + r * Math.sqrt(3) * Math.cos(a2), cy + r * Math.sqrt(3) * Math.sin(a2)]);
  }
  // Třetí prstenec
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    circles.push([cx + 3 * r * Math.cos(a), cy + 3 * r * Math.sin(a)]);
  }

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
      <circle cx={cx} cy={cy} r={r * 3.5} strokeWidth="0.9" />
      <circle cx={cx} cy={cy} r={r * 3.2} strokeWidth="0.5" strokeDasharray="3 5" />
      {circles.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={r} strokeWidth="0.7" />
      ))}
    </svg>
  );
};

// Metatronova kostka
const MetatronCube = ({ className, style }: SymbolProps) => {
  const cx = 200;
  const cy = 200;
  const r = 70;
  const points: Array<[number, number]> = [[cx, cy]];
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180 - Math.PI / 2;
    points.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180 - Math.PI / 2;
    points.push([cx + 2 * r * Math.cos(a), cy + 2 * r * Math.sin(a)]);
  }

  // Spojit všechny body se všemi
  const lines: Array<[number, number]> = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      lines.push([i, j]);
    }
  }

  return (
    <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
      <circle cx={cx} cy={cy} r={r * 2.3} strokeWidth="0.8" />
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          strokeWidth="0.4"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="14" strokeWidth="0.7" />
      ))}
      {points.map(([x, y], i) => (
        <circle key={`d-${i}`} cx={x} cy={y} r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
};

// Velký zodiakální kruh s glyfy (zjednodušené značky)
const ZodiacWheel = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
    <circle cx="200" cy="200" r="195" strokeWidth="0.8" />
    <circle cx="200" cy="200" r="170" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="140" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="60" strokeWidth="0.5" />

    {/* 12 segmentů */}
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return (
        <line
          key={`seg-${i}`}
          x1={200 + 60 * Math.cos(a)}
          y1={200 + 60 * Math.sin(a)}
          x2={200 + 195 * Math.cos(a)}
          y2={200 + 195 * Math.sin(a)}
          strokeWidth="0.5"
        />
      );
    })}

    {/* Drobné značky každých 6° */}
    {Array.from({ length: 60 }, (_, i) => {
      const a = (i * 6 * Math.PI) / 180;
      return (
        <line
          key={`t-${i}`}
          x1={200 + 170 * Math.cos(a)}
          y1={200 + 170 * Math.sin(a)}
          x2={200 + 178 * Math.cos(a)}
          y2={200 + 178 * Math.sin(a)}
          strokeWidth="0.4"
        />
      );
    })}

    {/* Body souhvězdí v segmentech */}
    {Array.from({ length: 12 }, (_, i) => {
      const a = ((i * 30 + 15) * Math.PI) / 180;
      const px = 200 + 155 * Math.cos(a);
      const py = 200 + 155 * Math.sin(a);
      return (
        <g key={`g-${i}`}>
          <circle cx={px} cy={py} r="3" fill="currentColor" />
          <circle cx={px + 12} cy={py - 8} r="1.5" fill="currentColor" />
          <circle cx={px - 10} cy={py + 6} r="1.5" fill="currentColor" />
          <line x1={px} y1={py} x2={px + 12} y2={py - 8} strokeWidth="0.3" />
          <line x1={px} y1={py} x2={px - 10} y2={py + 6} strokeWidth="0.3" />
        </g>
      );
    })}

    {/* Centrální symbol */}
    <polygon points="200,165 230,215 170,215" strokeWidth="0.6" />
    <polygon points="200,235 170,185 230,185" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="5" fill="currentColor" />
  </svg>
);

// Velké propracované souhvězdí
const BigConstellation = ({ className, style }: SymbolProps) => {
  const points: Array<[number, number, number]> = [
    [40, 80, 3], [110, 50, 2], [180, 90, 4], [240, 60, 2.5],
    [320, 110, 3], [380, 70, 2], [450, 130, 3.5], [520, 90, 2],
    [570, 160, 3], [80, 200, 2.5], [160, 230, 3], [240, 200, 2],
    [320, 250, 3.5], [400, 220, 2.5], [480, 270, 3], [560, 240, 2],
  ];
  const lines: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
    [2, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
    [4, 12], [6, 14],
  ];
  return (
    <svg viewBox="0 0 600 320" className={className} style={style} fill="none" stroke="currentColor">
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          strokeWidth="0.5"
        />
      ))}
      {points.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r * 2.5} fill="currentColor" opacity="0.15" />
          <circle cx={x} cy={y} r={r} fill="currentColor" />
        </g>
      ))}
    </svg>
  );
};

// Velký Sun s detailními paprsky
const ElaborateSun = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
    <circle cx="200" cy="200" r="80" strokeWidth="0.9" />
    <circle cx="200" cy="200" r="65" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="50" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="12" fill="currentColor" />

    {/* Dlouhé a krátké paprsky střídavě */}
    {Array.from({ length: 32 }, (_, i) => {
      const a = (i * 11.25 * Math.PI) / 180;
      const long = i % 2 === 0;
      const start = long ? 90 : 95;
      const end = long ? 180 : 140;
      return (
        <line
          key={i}
          x1={200 + start * Math.cos(a)}
          y1={200 + start * Math.sin(a)}
          x2={200 + end * Math.cos(a)}
          y2={200 + end * Math.sin(a)}
          strokeWidth={long ? 0.7 : 0.4}
          strokeLinecap="round"
        />
      );
    })}

    {/* Vnější tečkovaný kruh */}
    {Array.from({ length: 48 }, (_, i) => {
      const a = (i * 7.5 * Math.PI) / 180;
      return (
        <circle
          key={`d-${i}`}
          cx={200 + 195 * Math.cos(a)}
          cy={200 + 195 * Math.sin(a)}
          r="1.5"
          fill="currentColor"
        />
      );
    })}
  </svg>
);

export const MysticSymbols = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* Mezi Hero a Advisors */}
      <ElaborateMandala
        className="absolute text-moon-white opacity-[0.55] w-[700px] h-[700px] -left-40 top-[600px]"
        style={{ animation: 'rotate-slow 220s linear infinite' }}
      />

      {/* Konstelace přes celou šířku */}
      <BigConstellation
        className="absolute text-moon-white opacity-[0.5] w-[900px] h-[480px] -right-20 top-[1400px]"
      />

      {/* Sri Yantra */}
      <SriYantra
        className="absolute text-moon-white opacity-[0.5] w-[680px] h-[680px] -right-32 top-[2200px]"
        style={{ animation: 'rotate-slow 320s linear infinite reverse' }}
      />

      {/* Květ života */}
      <FlowerOfLife
        className="absolute text-moon-white opacity-[0.55] w-[750px] h-[750px] -left-48 top-[3100px]"
        style={{ animation: 'rotate-slow 280s linear infinite' }}
      />

      {/* Zodiakální kruh */}
      <ZodiacWheel
        className="absolute text-moon-white opacity-[0.5] w-[720px] h-[720px] -right-40 top-[4000px]"
        style={{ animation: 'rotate-slow 360s linear infinite' }}
      />

      {/* Metatronova kostka */}
      <MetatronCube
        className="absolute text-moon-white opacity-[0.55] w-[700px] h-[700px] -left-44 top-[4900px]"
        style={{ animation: 'rotate-slow 300s linear infinite reverse' }}
      />

      {/* Velké slunce */}
      <ElaborateSun
        className="absolute text-moon-white opacity-[0.5] w-[660px] h-[660px] -right-36 top-[5800px]"
        style={{ animation: 'rotate-slow 240s linear infinite' }}
      />

      {/* Druhá konstelace */}
      <BigConstellation
        className="absolute text-moon-white opacity-[0.45] w-[850px] h-[450px] -left-24 top-[6700px]"
      />

      {/* Druhá mandala */}
      <ElaborateMandala
        className="absolute text-moon-white opacity-[0.5] w-[640px] h-[640px] -right-32 top-[7400px]"
        style={{ animation: 'rotate-slow 260s linear infinite reverse' }}
      />
    </div>
  );
};
