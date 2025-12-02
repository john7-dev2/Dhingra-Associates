import { Home, Building2, Key, FileText, Handshake, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Find your dream home from our extensive collection of flats, apartments, and independent houses.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Premium office spaces, retail shops, and commercial properties for your business needs.",
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    icon: Key,
    title: "Property Buying",
    description: "Expert guidance through the entire property buying process with transparent dealings.",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    icon: FileText,
    title: "Property Selling",
    description: "Get the best value for your property with our strategic marketing and wide network.",
    color: "from-rose-500/20 to-rose-600/20",
  },
  {
    icon: Handshake,
    title: "Rental Services",
    description: "Quality rental properties and tenant verification services for landlords.",
    color: "from-violet-500/20 to-violet-600/20",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic real estate investment advice to maximize your returns.",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 card-gradient relative overflow-hidden noise">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            What We Offer
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Services We <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-primary-foreground/70 text-sm md:text-base">
            We strive to exceed your expectations with every transaction,
            delivering results that speak to our dedication and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 bg-hero/40 backdrop-blur-sm border border-gold/10 active:border-gold/30 transition-all duration-500 hover-lift overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </div>

                {/* Title with arrow */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gold opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
