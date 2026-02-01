import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-gold-warm" />
              <span className="font-heading text-xl text-moon-white">Věštírna Harmonie</span>
            </div>
            <p className="font-body text-sm text-mystic-blue leading-relaxed">
              Profesionální věštění a poradenství online. Spojte se s ověřenými věštkyněmi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              {['Naši poradci', 'Horoskopy', 'Tarot', 'Ceník'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-mystic-blue hover:text-gold-warm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-4">Podpora</h4>
            <ul className="space-y-2">
              {['Jak to funguje', 'FAQ', 'Obchodní podmínky', 'Ochrana soukromí'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-mystic-blue hover:text-gold-warm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-moon-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-warm" />
                <span className="font-body text-sm text-mystic-blue">+420 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-warm" />
                <span className="font-body text-sm text-mystic-blue">info@vestirnharmonie.cz</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-warm" />
                <span className="font-body text-sm text-mystic-blue">Praha, Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-mystic-blue/50">
            © 2026 Věštírna Harmonie. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6">
            {['Facebook', 'Instagram', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-sm text-mystic-blue/50 hover:text-gold-warm transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
