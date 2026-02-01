import { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Sparkles, Calculator, Stars } from 'lucide-react';

const lifePathMeanings: Record<number, { title: string; description: string }> = {
  1: { title: 'Vůdce', description: 'Jste přirozeným vůdcem s silnou intuicí a odhodláním. Vaše cesta je o nezávislosti a originálním přístupu k životu.' },
  2: { title: 'Diplomat', description: 'Máte dar harmonie a spolupráce. Vaše citlivost vám umožňuje vidět obě strany každé situace.' },
  3: { title: 'Tvůrce', description: 'Kreativita a radost jsou vaší esencí. Máte dar inspirovat ostatní svým optimismem a uměleckým vyjádřením.' },
  4: { title: 'Stavitel', description: 'Jste pilířem stability a důvěryhodnosti. Vaše praktičnost a tvrdá práce vedou k trvalým úspěchům.' },
  5: { title: 'Svobodný duch', description: 'Svoboda a dobrodružství jsou vaším životním motorem. Změna je pro vás příležitostí k růstu.' },
  6: { title: 'Pečovatel', description: 'Láska a zodpovědnost definují vaši cestu. Jste přirozeným ochráncem a léčitelem duší.' },
  7: { title: 'Hledač', description: 'Moudrost a duchovní hledání jsou vaším posláním. Máte hluboký vhled do mystérií života.' },
  8: { title: 'Vizionář', description: 'Moc a úspěch jsou vaše domény. Máte schopnost proměnit vize ve skutečnost a dosáhnout velkých cílů.' },
  9: { title: 'Humanista', description: 'Soucit a univerzální láska řídí vaše kroky. Jste zde, abyste pomáhali a inspirovali lidstvo.' },
};

const calculateLifePath = (dateString: string): number => {
  const digits = dateString.replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  
  // Reduce to single digit (except master numbers 11, 22, 33 - simplified to single for this demo)
  while (sum > 9) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  
  return sum || 1;
};

export const NumerologySection = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(1);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    if (!birthDate) return;
    
    setIsCalculating(true);
    setResult(null);
    
    // Animated number spinning effect
    let iterations = 0;
    const maxIterations = 20;
    const interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 9) + 1);
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        const lifePathNumber = calculateLifePath(birthDate);
        setDisplayNumber(lifePathNumber);
        setResult(lifePathNumber);
        setIsCalculating(false);
        
        // Scroll to result
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }, 80);
  };

  return (
    <section className="relative py-24 overflow-hidden section-vignette">
      {/* Background sacred geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold-warm" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-purple-electric" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold-warm" />
          {[...Array(9)].map((_, i) => {
            const angle = (i * 40 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 90 * Math.cos(angle)}
                y2={100 + 90 * Math.sin(angle)}
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-mystic-blue"
              />
            );
          })}
        </svg>
      </div>

      {/* Purple ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-electric/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold-warm font-body text-sm tracking-widest uppercase mb-4 block flex items-center justify-center gap-2">
              <Stars className="w-4 h-4" strokeWidth={1.5} />
              Interaktivní kalkulačka
              <Stars className="w-4 h-4" strokeWidth={1.5} />
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-moon-white mb-4 text-glow-purple">
              Rychlá <span className="text-gradient-purple">numerologie</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto text-lg">
              Objevte své životní číslo a jeho skrytý význam. Zadejte datum narození a odhalte svou životní cestu.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-xl mx-auto">
            {/* Calculator Card */}
            <div className="glass-card p-8 md:p-10 relative overflow-hidden">
              {/* Decorative corner sparkles */}
              <div className="absolute top-4 right-4 text-gold-warm/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 left-4 text-purple-electric/20">
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Input area */}
              <div className="mb-8">
                <label className="block font-heading text-lg text-moon-white mb-3">
                  Datum narození
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-cosmic-deep/80 border border-gold-warm/30 text-moon-white font-body text-lg focus:outline-none focus:border-gold-warm focus:ring-2 focus:ring-gold-warm/20 transition-all duration-300"
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Calculate Button */}
              <Button
                variant="gold"
                size="xl"
                className="w-full group"
                onClick={handleCalculate}
                disabled={!birthDate || isCalculating}
              >
                <Calculator className="w-5 h-5 transition-transform group-hover:rotate-12" strokeWidth={2} />
                {isCalculating ? 'Počítám...' : 'Vypočítat mé číslo'}
              </Button>

              {/* Result Display */}
              {(result !== null || isCalculating) && (
                <div 
                  ref={resultRef}
                  className="mt-10 text-center"
                >
                  {/* Animated Number Display */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    {/* Glow rings */}
                    <div className={`absolute inset-0 w-32 h-32 rounded-full ${isCalculating ? 'animate-spin' : ''}`} style={{
                      background: 'conic-gradient(from 0deg, hsl(32 100% 64% / 0.3), hsl(270 90% 68% / 0.3), hsl(32 100% 64% / 0.3))',
                      filter: 'blur(15px)',
                    }} />
                    <div className="absolute inset-2 w-28 h-28 rounded-full bg-cosmic-deep/90" />
                    
                    {/* Number */}
                    <div 
                      className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center border-2 ${
                        isCalculating ? 'border-purple-electric' : 'border-gold-warm'
                      } transition-colors duration-300`}
                      style={{
                        boxShadow: isCalculating 
                          ? '0 0 30px hsl(270 90% 68% / 0.5), inset 0 0 20px hsl(270 90% 68% / 0.2)'
                          : '0 0 40px hsl(32 100% 64% / 0.5), inset 0 0 20px hsl(32 100% 64% / 0.2)',
                      }}
                    >
                      <span 
                        className={`font-heading text-6xl ${
                          isCalculating ? 'text-purple-electric' : 'text-gold-warm'
                        } transition-colors duration-300`}
                        style={{
                          textShadow: isCalculating
                            ? '0 0 20px hsl(270 90% 68% / 0.8)'
                            : '0 0 30px hsl(32 100% 64% / 0.8)',
                        }}
                      >
                        {displayNumber}
                      </span>
                    </div>
                  </div>

                  {/* Meaning */}
                  {result !== null && !isCalculating && (
                    <div className="animate-fade-in">
                      <h3 className="font-heading text-2xl text-gold-warm mb-3">
                        {lifePathMeanings[result]?.title}
                      </h3>
                      <p className="font-body text-mystic-blue leading-relaxed max-w-md mx-auto">
                        {lifePathMeanings[result]?.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="mt-8 pt-6 border-t border-border/30">
                        <p className="font-body text-sm text-mystic-blue/70 mb-3">
                          Chcete podrobnější numerologický rozbor?
                        </p>
                        <Button variant="purple" size="default">
                          <Sparkles className="w-4 h-4" />
                          Konzultace s odborníkem
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
