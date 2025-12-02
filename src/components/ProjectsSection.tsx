import { ArrowRight, MapPin, Home, Building2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Premium Residential Complex",
    location: "Tilak Nagar, Delhi",
    type: "Residential",
    units: "2BHK, 3BHK Flats",
    year: "2024",
    price: "₹45L - ₹85L",
  },
  {
    image: project2,
    title: "Commercial Office Tower",
    location: "West Delhi",
    type: "Commercial",
    units: "Office Spaces",
    year: "2023",
    price: "₹1.2Cr onwards",
  },
  {
    image: project3,
    title: "Luxury Apartments",
    location: "Rajouri Garden",
    type: "Residential",
    units: "3BHK, 4BHK Flats",
    year: "2024",
    price: "₹95L - ₹1.5Cr",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 card-gradient relative overflow-hidden noise">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
              Our Portfolio
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Latest Projects{" "}
              <span className="text-gradient">We've Worked On</span>
            </h2>
          </div>
          <p className="text-primary-foreground/70 max-w-md text-sm md:text-base">
            Our work has earned us recognition and trust across Delhi's real
            estate market.
          </p>
        </div>

        {/* Projects Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          <div className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-hero/40 backdrop-blur-sm border border-gold/10 active:border-gold/30 transition-all duration-500 hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-dark via-hero-dark/30 to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-gold px-3 py-1.5 rounded-full text-sm font-semibold text-primary">
                    {project.year}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 glass-dark px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground flex items-center gap-1.5">
                    {project.type === "Residential" ? (
                      <Home className="w-3 h-3 text-gold" />
                    ) : (
                      <Building2 className="w-3 h-3 text-gold" />
                    )}
                    {project.type}
                  </div>

                  {/* Hover Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-12 h-12 rounded-full bg-gold flex items-center justify-center hover:bg-gold-light transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-primary-foreground group-hover:text-gold transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gold/10">
                    <div>
                      <p className="text-xs text-primary-foreground/50">
                        Starting from
                      </p>
                      <p className="text-gold font-semibold">{project.price}</p>
                    </div>
                    <span className="text-xs text-primary-foreground/50 bg-gold/10 px-2 py-1 rounded-lg">
                      {project.units}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Mobile */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gold/30"
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[48px]">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
