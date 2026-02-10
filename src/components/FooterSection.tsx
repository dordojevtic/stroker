import { Phone, Clock, MapPin, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Potrebna vam <span className="text-gradient">pomoć?</span>
          </h2>

          <a
            href="tel:+38162274049"
            className="inline-flex items-center gap-3 bg-primary px-10 py-5 rounded-lg text-primary-foreground font-heading text-3xl md:text-4xl hover:scale-105 transition-transform shadow-lg shadow-primary/30 mb-10"
          >
            <Phone className="w-8 h-8" />
            +381 62 274 049
          </a>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>24/7 Dostupni</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Srbija & EU</span>
            </div>
            <a
              href="https://www.instagram.com/slep_sluzba_stroker?igsh=MTFoYngzbGQ5Z3diNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@slep_sluzba_stroker</span>
            </a>
          </div>

          <p className="text-muted-foreground/50 text-sm mt-12">
            © 2025 Stroker 24h — Šlep služba i pomoć na putu. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
