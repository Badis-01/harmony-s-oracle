import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Mail } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-newsletter" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-electric/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-warm/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold-warm" />
              <span className="text-sm font-body text-mystic-blue">Zůstaňte v obraze</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-moon-white mb-4">
              Získejte <span className="text-gradient-gold">magické tipy</span> do emailu
            </h2>
            <p className="font-body text-mystic-blue mb-8">
              Horoskopy, tipy na výklady a speciální nabídky přímo do vaší schránky.
            </p>

            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mystic-blue/50" />
                <input
                  type="email"
                  placeholder="Váš email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-lg glass-card bg-cosmic-deep/50 border border-mystic-blue/20 text-moon-white placeholder:text-mystic-blue/50 font-body focus:outline-none focus:border-gold-warm/50 transition-colors duration-300"
                />
              </div>
              <Button variant="gold" size="lg">
                Odebírat
              </Button>
            </form>

            <p className="font-body text-xs text-mystic-blue/50 mt-4">
              Žádný spam. Odhlášení kdykoliv.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
