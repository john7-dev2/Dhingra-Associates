import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 73031 39834",
    link: "tel:+917303139834",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@dhingraassociates.com",
    link: "mailto:info@dhingraassociates.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Tilak Nagar, West Delhi, Delhi 110018",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    link: null,
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Ready to find your dream property? Reach out to us and let's make it
            happen together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-muted/50 border border-border active:border-gold/30 transition-all duration-300 group fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-medium text-foreground active:text-gold transition-colors text-xs sm:text-sm md:text-base truncate block min-h-[44px] flex items-center"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground text-sm md:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 fade-in-up stagger-4">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with us
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://instagram.com/dhingra_associates_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-primary-foreground px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://wa.me/917303139834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-primary-foreground px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3 fade-in-up stagger-2">
            <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-border">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground text-sm md:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground text-sm md:text-base"
                      placeholder="+91 73031 39834"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground text-sm md:text-base"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none text-foreground text-sm md:text-base"
                    placeholder="I'm looking for a 2BHK flat in..."
                    required
                  />
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
