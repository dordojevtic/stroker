import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-20 bg-card" id="instagram" aria-labelledby="instagram-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="instagram-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Pratite nas na <span className="text-gradient">Instagramu</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Pogledajte naše akcije, vozila i svakodnevni rad na terenu
        </p>

        <a
          href="https://www.instagram.com/slep_sluzba_stroker?igsh=MTFoYngzbGQ5Z3diNQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 py-4 rounded-lg text-white font-heading text-xl md:text-2xl hover:scale-105 transition-transform shadow-lg mb-10"
        >
          <Instagram className="w-7 h-7" />
          @slep_sluzba_stroker
        </a>

        <div className="max-w-lg mx-auto rounded-lg overflow-hidden border border-border bg-background">
          <iframe
            src="https://www.instagram.com/slep_sluzba_stroker/embed"
            className="w-full h-[500px] border-0"
            allowTransparency
            allow="encrypted-media"
            title="Instagram profil Stroker 24h"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
