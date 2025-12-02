import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917303139834";
  const message = "Hi! I'm interested in your real estate services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 active:scale-95 sm:group-hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
