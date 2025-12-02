import { useState, useEffect } from "react";
import { Menu, X, Phone, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark py-3 shadow-lg shadow-hero-dark/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group z-50">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-dark group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-1 rounded-full bg-hero flex items-center justify-center">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
                  Dhingra
                </span>
                <span className="block text-[10px] md:text-xs text-gold tracking-[0.2em] uppercase">
                  Associates
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-primary-foreground/80 hover:text-gold font-medium transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+917303139834"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+91 73031 39834</span>
              </a>
              <Button variant="gold" size="lg" className="group">
                Get Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center active:bg-gold/20 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                    isOpen ? "top-3 rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
                    isOpen ? "top-3 -rotate-45" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-hero-dark/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center px-6 sm:px-8">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 md:py-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground active:text-gold transition-all duration-500 transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div
            className={`mt-12 pt-8 border-t border-gold/20 transition-all duration-500 delay-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="tel:+917303139834"
              className="flex items-center gap-4 text-gold text-lg md:text-xl mb-4 active:text-gold-light transition-colors"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              +91 73031 39834
            </a>
            <Button
              variant="gold"
              size="xl"
              className="w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
