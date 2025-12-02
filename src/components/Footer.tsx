import { Home, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Flats",
    "Commercial Spaces",
    "Plots & Land",
    "Property Buying",
    "Property Selling",
    "Rental Services",
  ];

  return (
    <footer className="bg-hero-dark relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 space-y-4 sm:space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-dark" />
                <div className="absolute inset-1 rounded-full bg-hero-dark flex items-center justify-center">
                  <Home className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-primary-foreground">
                  Dhingra Associates
                </span>
                <span className="block text-[10px] text-gold tracking-[0.15em] uppercase">
                  The Real Estate Consultancy
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. Based in Tilak
              Nagar, West Delhi.
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Instagram, href: "https://instagram.com/dhingra_associates_official" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center active:bg-gold/20 transition-colors group min-h-[44px] min-w-[44px]"
                >
                  <social.icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-primary-foreground mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-primary-foreground mb-4 md:mb-6">
              Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/60 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold text-primary-foreground mb-4 md:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">
                  Tilak Nagar, West Delhi, Delhi 110018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+917303139834"
                  className="text-primary-foreground/60 active:text-gold transition-colors text-sm min-h-[44px] flex items-center"
                >
                  +91 73031 39834
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@dhingraassociates.com"
                  className="text-primary-foreground/60 hover:text-gold transition-colors text-sm truncate"
                >
                  info@dhingraassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Dhingra Associates. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-gold transition-colors text-xs md:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-gold transition-colors text-xs md:text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
