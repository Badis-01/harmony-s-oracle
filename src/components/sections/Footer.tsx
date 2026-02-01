import { Sparkles, Phone, Mail, MapPin, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={10 + i * 6}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-gold-warm"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-7 h-7 text-gold-warm" />
              <span className="font-heading text-2xl text-moon-white">Věštírna Harmonie</span>
            </div>
            <p className="font-body text-sm text-mystic-blue leading-relaxed mb-6">
              Profesionální věštění a poradenství online. Spojte se s ověřenými věštkyněmi 24 hodin denně, 7 dní v týdnu.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-warm text-gold-warm" />
                ))}
              </div>
              <span className="font-body text-sm text-mystic-blue">4.9/5 (2,847 recenzí)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3">
              {['Naši poradci', 'Horoskopy', 'Tarot online', 'Ceník', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-mystic-blue hover:text-gold-warm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-warm/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-6">Podpora</h4>
            <ul className="space-y-3">
              {['Jak to funguje', 'FAQ', 'Obchodní podmínky', 'Ochrana soukromí', 'Kontakt'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-mystic-blue hover:text-gold-warm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-purple-electric/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-gold-warm" />
                </div>
                <div>
                  <span className="font-body text-sm text-moon-white">+420 123 456 789</span>
                  <p className="font-body text-xs text-mystic-blue/60">Nonstop linka</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-gold-warm" />
                </div>
                <span className="font-body text-sm text-mystic-blue">info@vestirnharmonie.cz</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-gold-warm" />
                </div>
                <span className="font-body text-sm text-mystic-blue">Praha, Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-mystic-blue/50">
            © 2026 Věštírna Harmonie. Všechna práva vyhrazena.
          </p>
          
          {/* Social links */}
          <div className="flex gap-4">
            {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-mystic-blue/50 hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
              >
                <span className="text-xs font-body">{social[0]}</span>
              </a>
            ))}
          </div>
          
          {/* Payment methods hint */}
          <div className="flex items-center gap-2 text-mystic-blue/30 text-xs font-body">
            <span>Bezpečné platby:</span>
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>📱 Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
