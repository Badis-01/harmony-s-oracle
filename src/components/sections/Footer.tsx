import { Sparkles, Phone, Mail, MapPin, Star, Facebook, Instagram, Twitter, Youtube, CreditCard, Smartphone, Compass } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border/20 overflow-hidden">
      {/* Magical map background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        {/* Compass rose */}
        <svg className="absolute top-10 left-10 w-[200px] h-[200px]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-warm" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold-warm" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1="50"
                y1="50"
                x2={50 + 40 * Math.cos(rad)}
                y2={50 + 40 * Math.sin(rad)}
                stroke="currentColor"
                strokeWidth={angle % 90 === 0 ? '0.5' : '0.2'}
                className="text-gold-warm"
              />
            );
          })}
          <text x="50" y="12" textAnchor="middle" className="fill-gold-warm text-[8px] font-heading">N</text>
          <text x="50" y="95" textAnchor="middle" className="fill-gold-warm text-[8px] font-heading">S</text>
          <text x="8" y="52" textAnchor="middle" className="fill-gold-warm text-[8px] font-heading">W</text>
          <text x="92" y="52" textAnchor="middle" className="fill-gold-warm text-[8px] font-heading">E</text>
        </svg>

        {/* Latitude/longitude grid lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M0,${(i + 1) * 12.5}% Q25%,${(i + 1) * 12.5 - 2}% 50%,${(i + 1) * 12.5}% T100%,${(i + 1) * 12.5}%`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-gold-warm"
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i + 1) * 8}%`}
              y1="0"
              x2={`${(i + 1) * 8}%`}
              y2="100%"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-purple-electric"
            />
          ))}
        </svg>

        {/* Decorative stars */}
        {[[80, 20], [90, 60], [15, 80], [70, 90], [30, 30]].map(([x, y], i) => (
          <Star 
            key={i}
            className="absolute text-gold-warm"
            style={{ left: `${x}%`, top: `${y}%`, width: 12, height: 12 }}
            strokeWidth={1}
          />
        ))}
      </div>

      {/* Concentric circles pattern */}
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
              <Sparkles className="w-7 h-7 text-gold-warm" strokeWidth={1.5} />
              <span className="font-heading text-2xl text-moon-white">Věštírna Harmonie</span>
            </div>
            <p className="font-body text-sm text-mystic-blue leading-relaxed mb-6">
              Profesionální věštění a poradenství online. Spojte se s ověřenými věštkyněmi 24 hodin denně, 7 dní v týdnu.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-warm text-gold-warm" strokeWidth={1.5} />
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
                  <Phone className="w-4 h-4 text-gold-warm" strokeWidth={2} />
                </div>
                <div>
                  <span className="font-body text-sm text-moon-white">+420 123 456 789</span>
                  <p className="font-body text-xs text-mystic-blue/60">Nonstop linka</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-gold-warm" strokeWidth={2} />
                </div>
                <span className="font-body text-sm text-mystic-blue">info@vestirnharmonie.cz</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-gold-warm/50 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-gold-warm" strokeWidth={2} />
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
          
          {/* Social links with Lucide icons */}
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Youtube, label: 'YouTube' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-mystic-blue/50 hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" strokeWidth={2} />
              </a>
            ))}
          </div>
          
          {/* Payment methods with icons */}
          <div className="flex items-center gap-3 text-mystic-blue/40">
            <span className="text-xs font-body">Bezpečné platby:</span>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-xs font-body">Visa</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-xs font-body">Mastercard</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-xs font-body">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
