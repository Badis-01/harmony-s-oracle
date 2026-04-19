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

// Nebeská sféra — koncentrické kruhy s orbitálními body (kosmické, kulaté)
const CelestialSphere = ({ className, style }: SymbolProps) => (
  <svg viewBox="0 0 400 400" className={className} style={style} fill="none" stroke="currentColor">
    {/* Vnější jemné kruhy */}
    <circle cx="200" cy="200" r="195" strokeWidth="0.8" />
    <circle cx="200" cy="200" r="180" strokeWidth="0.4" strokeDasharray="1 5" />
    <circle cx="200" cy="200" r="160" strokeWidth="0.5" />

    {/* Eliptické orbity — různé sklony */}
    {[0, 30, 60, 90, 120, 150].map((rot, i) => (
      <ellipse
        key={`orb-${i}`}
        cx="200"
        cy="200"
        rx="150"
        ry="55"
        strokeWidth="0.6"
        transform={`rotate(${rot} 200 200)`}
      />
    ))}

    {/* Vnitřní kruhy */}
    <circle cx="200" cy="200" r="90" strokeWidth="0.6" />
    <circle cx="200" cy="200" r="60" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="35" strokeWidth="0.7" />

    {/* Centrální slunce */}
    <circle cx="200" cy="200" r="14" fill="currentColor" />
    <circle cx="200" cy="200" r="22" strokeWidth="0.5" />

    {/* Krátké paprsky ze středu */}
    {Array.from({ length: 24 }, (_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      return (
        <line
          key={`ray-${i}`}
          x1={200 + 26 * Math.cos(a)}
          y1={200 + 26 * Math.sin(a)}
          x2={200 + 34 * Math.cos(a)}
          y2={200 + 34 * Math.sin(a)}
          strokeWidth="0.5"
        />
      );
    })}

    {/* Planety / body na orbitách */}
    {[
      [350, 200], [50, 200], [200, 50], [200, 350],
      [310, 110], [90, 290], [310, 290], [90, 110],
      [275, 145], [125, 255], [275, 255], [125, 145],
    ].map(([x, y], i) => (
      <g key={`p-${i}`}>
        <circle cx={x} cy={y} r="8" fill="currentColor" opacity="0.2" />
        <circle cx={x} cy={y} r="3.5" fill="currentColor" />
      </g>
    ))}

    {/* Drobné hvězdy v pozadí */}
    {[
      [60, 60], [340, 80], [70, 340], [330, 320],
      [200, 30], [30, 200], [370, 200], [200, 370],
    ].map(([x, y], i) => (
      <circle key={`s-${i}`} cx={x} cy={y} r="1.5" fill="currentColor" />
    ))}
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
        className="absolute text-moon-white opacity-[0.3] w-[700px] h-[700px] -left-40 top-[600px]"
        style={{ animation: 'rotate-slow 220s linear infinite' }}
      />

      {/* Konstelace přes celou šířku */}
      <BigConstellation
        className="absolute text-moon-white opacity-[0.3] w-[900px] h-[480px] -right-20 top-[1400px]"
      />

      {/* Nebeská sféra (nahradila Sri Yantru — kulatější, ne hranatá) */}
      <CelestialSphere
        className="absolute text-moon-white opacity-[0.3] w-[680px] h-[680px] -right-32 top-[2200px]"
        style={{ animation: 'rotate-slow 320s linear infinite reverse' }}
      />

      {/* Květ života */}
      <FlowerOfLife
        className="absolute text-moon-white opacity-[0.3] w-[750px] h-[750px] -left-48 top-[3100px]"
        style={{ animation: 'rotate-slow 280s linear infinite' }}
      />

      {/* Zodiakální kruh */}
      <ZodiacWheel
        className="absolute text-moon-white opacity-[0.3] w-[720px] h-[720px] -right-40 top-[4000px]"
        style={{ animation: 'rotate-slow 360s linear infinite' }}
      />

      {/* Metatronova kostka */}
      <MetatronCube
        className="absolute text-moon-white opacity-[0.3] w-[700px] h-[700px] -left-44 top-[4900px]"
        style={{ animation: 'rotate-slow 300s linear infinite reverse' }}
      />

      {/* Velké slunce */}
      <ElaborateSun
        className="absolute text-moon-white opacity-[0.3] w-[660px] h-[660px] -right-36 top-[5800px]"
        style={{ animation: 'rotate-slow 240s linear infinite' }}
      />

      {/* Druhá konstelace */}
      <BigConstellation
        className="absolute text-moon-white opacity-[0.3] w-[850px] h-[450px] -left-24 top-[6700px]"
      />

      {/* Druhá mandala */}
      <ElaborateMandala
        className="absolute text-moon-white opacity-[0.3] w-[640px] h-[640px] -right-32 top-[7400px]"
        style={{ animation: 'rotate-slow 260s linear infinite reverse' }}
      />
    </div>
  );
};
