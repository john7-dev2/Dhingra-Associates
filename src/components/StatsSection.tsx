import { useEffect, useState, useRef } from "react";
import happyFamily from "@/assets/happy-family.jpg";
import consultation from "@/assets/consultation.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import project1 from "@/assets/project-1.jpg";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Properties Sold",
    image: project1,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    image: happyFamily,
  },
  {
    value: 200,
    suffix: "+",
    label: "Premium Listings",
    image: consultation,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    image: aboutTeam,
  },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Mobile */}
        <div className="text-center mb-8 sm:mb-12 lg:hidden">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Our Achievements
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Numbers That <span className="text-gold">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Container */}
              <div className="relative flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl bg-card border border-border active:border-gold/30 transition-all duration-500 hover-lift">
                {/* Circular Image */}
                <div className="relative mb-3 sm:mb-4 md:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-gold/20 group-hover:border-gold/50 transition-all duration-500">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/20 group-hover:animate-spin-slow" />
                </div>

                {/* Value */}
                <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-1 md:mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-muted-foreground font-medium text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
