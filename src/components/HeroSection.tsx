import { ArrowRight, Play, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHouse from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen hero-gradient overflow-hidden noise"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl floating-animation-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>

      {/* Decorative dots */}
      <div className="absolute top-32 left-8 w-2 h-2 bg-gold rounded-full animate-pulse" />
      <div className="absolute top-48 right-16 w-3 h-3 bg-gold/50 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-48 left-1/4 w-2 h-2 bg-gold/30 rounded-full animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gold/10 border border-gold/20 fade-in-up">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-gold" />
              <span className="text-xs sm:text-sm text-gold font-medium">
                Trusted Real Estate Partner Since 2014
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2 md:space-y-4 fade-in-up stagger-1">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.9] text-shadow">
                Where
              </h1>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.9] text-shadow">
                Dreams
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
                <div className="h-0.5 sm:h-1 w-10 sm:w-12 md:w-20 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-animated leading-[0.9]">
                  Take Shape
                </h2>
              </div>
            </div>

            {/* Description Box */}
            <div className="glass-dark rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 max-w-md border border-gold/10 fade-in-up stagger-2">
              <p className="text-primary-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">
                Welcome to Dhingra Associates — your gateway to finding the
                perfect property in West Delhi. From residential flats to
                commercial spaces, we make your real estate journey seamless.
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-gold/70">Call Us Now</span>
                  <a
                    href="tel:+917303139834"
                    className="font-semibold text-sm sm:text-base text-gold active:text-gold-light transition-colors"
                  >
                    +91 73031 39834
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up stagger-3">
              <Button variant="heroSolid" size="xl" className="group w-full sm:w-auto min-h-[48px]">
                Explore Properties
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="xl" className="w-full sm:w-auto min-h-[48px]">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - House Image */}
          <div className="relative order-1 lg:order-2 fade-in-up">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative rounded-3xl md:rounded-4xl overflow-hidden border-gradient">
                <img
                  src={heroHouse}
                  alt="Modern luxury house at night"
                  className="w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-2 sm:left-4 md:-left-6 glass rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-gold/10 animate-fade-in">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-xs sm:text-sm md:text-base">
                      DA
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Trusted by</p>
                    <p className="font-semibold text-foreground text-xs sm:text-sm md:text-base">
                      500+ Families
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Badge - Top Right */}
              <div className="absolute -top-2 sm:-top-2 md:-top-4 right-2 sm:right-4 md:-right-4 glass rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-gold/10 animate-fade-in delay-200">
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gold">
                  10+
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Years Exp.</p>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-32 md:w-48 h-32 md:h-48 bg-gold/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
