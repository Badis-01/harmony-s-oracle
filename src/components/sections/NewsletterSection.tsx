import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Mail, CheckCircle } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background - prominent */}
      <div className="absolute inset-0 bg-gradient-newsletter" />
      
      {/* Additional purple glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-electric/20 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-warm/10 rounded-full blur-[150px]" />
      
      {/* Sacred geometry pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              cx="80"
              cy="20"
              r={10 + i * 8}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              className="text-gold-warm"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold-warm" />
              <span className="text-sm font-body text-mystic-blue">Zůstaňte v obraze</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4 text-glow-gold">
              Získejte <span className="text-gradient-gold">magické tipy</span>
              <br />do emailu
            </h2>
            <p className="font-body text-mystic-blue mb-10 text-lg">
              Horoskopy, tipy na výklady a speciální nabídky přímo do vaší schránky. Buďte první, kdo se dozví o novinkách.
            </p>

            {/* Form - Pill shaped */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <Mail className="w-5 h-5 text-mystic-blue/50" />
                  </div>
                  <input
                    type="email"
                    placeholder="Váš email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-14 pl-14 pr-36 rounded-full glass-card bg-cosmic-deep/50 border border-mystic-blue/20 text-moon-white placeholder:text-mystic-blue/50 font-body focus:outline-none focus:border-gold-warm/50 transition-colors duration-300"
                  />
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                    <Button 
                      type="submit"
                      variant="gold" 
                      className="rounded-full h-11 px-6"
                    >
                      Odebírat
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 glass-card py-4 px-6 rounded-full max-w-md mx-auto">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-body text-moon-white">Děkujeme za přihlášení!</span>
              </div>
            )}

            <p className="font-body text-xs text-mystic-blue/50 mt-6">
              🔒 Žádný spam. Ochrana soukromí. Odhlášení kdykoliv.
            </p>

            {/* Trust badges */}
            <div className="flex justify-center gap-6 mt-8">
              {['2,500+ odběratelů', 'Týdenní tipy', 'Exkluzivní nabídky'].map((text, i) => (
                <span key={i} className="font-body text-xs text-mystic-blue/60">
                  ✓ {text}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
