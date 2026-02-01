import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Poradci', href: '#' },
    { label: 'Horoskopy', href: '#' },
    { label: 'Techniky', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-gold-warm group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-heading text-xl text-moon-white">Věštírna Harmonie</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-mystic-blue hover:text-gold-warm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold" size="sm">
              <Sparkles className="w-4 h-4" />
              Začít věštění
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-moon-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 glass-card p-6 rounded-2xl animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-lg text-mystic-blue hover:text-gold-warm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" className="mt-4">
                <Sparkles className="w-4 h-4" />
                Začít věštění
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
