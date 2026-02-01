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
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-warm/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Denní <span className="text-gradient-purple">horoskopy</span>
            </h2>
            <p className="font-body text-mystic-blue max-w-2xl mx-auto">
              Vyberte své znamení a zjistěte, co vám hvězdy přináší
            </p>
          </div>
        </ScrollReveal>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {zodiacSigns.map((sign, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group glass-card p-4 aspect-square flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-purple-electric/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-purple">
                <span className="text-4xl md:text-5xl text-gold-warm group-hover:text-purple-electric transition-colors duration-300 group-hover:scale-110 transform mb-2">
                  {sign.symbol}
                </span>
                <h3 className="font-heading text-sm text-moon-white mb-1">{sign.name}</h3>
                <p className="font-body text-xs text-mystic-blue/70">{sign.dates}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
