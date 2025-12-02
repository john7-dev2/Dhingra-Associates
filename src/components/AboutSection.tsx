import { ArrowRight, CheckCircle2, Award, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  { icon: Award, text: "Expert Industry Professionals" },
  { icon: Shield, text: "Transparent & Honest Dealings" },
  { icon: Users, text: "Wide Network Across West Delhi" },
  { icon: Clock, text: "End-to-End Property Solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1 fade-in-up">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative rounded-3xl md:rounded-4xl overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Dhingra Associates Team"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 via-hero-dark/20 to-transparent" />

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="glass rounded-2xl p-4 md:p-6 border border-gold/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-2xl font-bold text-primary">
                          10+
                        </span>
                      </div>
                      <div>
                        <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                          Years of Excellence
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Building trust since 2014
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-2 border-gold/20 rounded-3xl md:rounded-4xl -z-10" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="fade-in-up">
              <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
                Who We Are
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Your Trusted{" "}
                <span className="text-gradient">Real Estate</span> Partner
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground fade-in-up stagger-1">
              <p className="leading-relaxed text-sm md:text-base">
                Welcome to{" "}
                <strong className="text-foreground">Dhingra Associates</strong>,
                where real estate expertise meets your vision. Based in Tilak
                Nagar, West Delhi, we are passionate about helping families and
                businesses find their perfect properties.
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                With over a decade of experience, we specialize in residential
                flats, plots, and commercial spaces across Delhi. Our commitment
                to transparent dealings and client satisfaction has made us a
                trusted name in the community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 fade-in-up stagger-2">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 sm:gap-3 p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-muted/50 border border-border active:border-gold/30 transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 fade-in-up stagger-3">
              <Button variant="gold" size="lg" className="group w-full sm:w-auto min-h-[48px]">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
