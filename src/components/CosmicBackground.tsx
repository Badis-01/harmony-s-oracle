import { useEffect, useState } from 'react';

export const CosmicBackground = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-moon-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `star-twinkle ${3 + star.delay}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Sacred Geometry - Mandala SVG */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        {/* Large central mandala */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
          viewBox="0 0 400 400"
          style={{ animation: 'rotate-slow 120s linear infinite' }}
        >
          {/* Outer circles */}
          {[180, 160, 140, 120].map((r, i) => (
            <circle
              key={`outer-${i}`}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gold-warm"
            />
          ))}
          {/* Radial lines */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={`line-${i}`}
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos(angle)}
                y2={200 + 180 * Math.sin(angle)}
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-purple-electric"
              />
            );
          })}
          {/* Inner geometric pattern */}
          <polygon
            points="200,80 280,160 280,240 200,320 120,240 120,160"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gold-warm"
          />
          <polygon
            points="200,100 260,150 260,250 200,300 140,250 140,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-purple-electric"
          />
        </svg>

        {/* Constellation lines - top right */}
        <svg
          className="absolute -top-20 -right-20 w-[600px] h-[600px]"
          viewBox="0 0 200 200"
        >
          <path
            d="M20,50 L60,30 L100,45 L140,20 L180,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-gold-warm"
          />
          <path
            d="M30,100 L70,80 L110,95 L150,70 L190,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-purple-electric"
          />
          {[
            [20, 50], [60, 30], [100, 45], [140, 20], [180, 40],
            [30, 100], [70, 80], [110, 95], [150, 70], [190, 90],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              fill="currentColor"
              className="text-moon-white"
            />
          ))}
        </svg>

        {/* Bottom left constellation */}
        <svg
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px]"
          viewBox="0 0 200 200"
        >
          <path
            d="M10,150 L50,130 L90,160 L130,140 L170,170"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-purple-electric"
          />
          {[[10, 150], [50, 130], [90, 160], [130, 140], [170, 170]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" className="text-moon-white" />
          ))}
        </svg>
      </div>

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(270 90% 68% / 0.15) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(32 100% 64% / 0.1) 0%, transparent 70%)',
            animation: 'float-reverse 25s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
};
