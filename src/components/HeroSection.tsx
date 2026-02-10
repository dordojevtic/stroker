import { Phone } from "lucide-react";
import heroImg from "@/assets/slep-1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero sekcija">
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          alt="Šlep služba Stroker 24h - profesionalno šlepanje vozila i pomoć na putu u Srbiji" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="mb-6">
          <a
            href="tel:+381622740496"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-lg text-primary-foreground font-heading text-2xl md:text-3xl hover:scale-105 transition-transform shadow-lg shadow-primary/30"
          >
            <Phone className="w-7 h-7 animate-pulse" />
            +381 62 274 049
          </a>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Šlep Služba</span>
          <br />
          <span className="text-foreground">Stroker 24h</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Brzo, pouzdano, 24/7 — Pomoć na putu, šlepanje, izvlačenje vozila i transport iz inostranstva
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-heading tracking-wider text-muted-foreground">
          {["24/7 Dostupnost", "Brz Dolazak", "Fer Cene", "Cela Srbija + EU"].map((item) => (
            <span key={item} className="border border-border px-4 py-2 rounded-md bg-card/50 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
