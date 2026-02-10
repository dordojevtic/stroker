import slep1 from "@/assets/slep-1.jpeg";
import slep2 from "@/assets/slep-2.jpeg";
import slep3 from "@/assets/slep-3.jpeg";
import slep4 from "@/assets/slep-4.jpeg";
import slep5 from "@/assets/slep-5.jpeg";
import slep6 from "@/assets/slep-6.jpeg";
import slep7 from "@/assets/slep-7.jpeg";
import slep8 from "@/assets/slep-8.jpeg";
import slep9 from "@/assets/slep-9.jpeg";
import slep10 from "@/assets/slep-10.jpeg";

const images = [
  { src: slep1, alt: "Šlep vozilo Stroker 24h na terenu - šlepanje automobila Srbija" },
  { src: slep6, alt: "Profesionalno šlepanje vozila - pomoć na putu 24/7" },
  { src: slep7, alt: "Šlep služba Stroker - utovar vozila na šlep platformu" },
  { src: slep3, alt: "Izvlačenje vozila iz nezgode - brza intervencija" },
  { src: slep4, alt: "Šlepanje teretnog vozila do 3.5t - Stroker tim" },
  { src: slep5, alt: "Noćna intervencija šlep službe - 24h dostupnost" },
  { src: slep2, alt: "Transport vozila šlep službom Stroker - Srbija" },
  { src: slep8, alt: "Pomoć na putu i šlepanje - profesionalna usluga" },
  { src: slep9, alt: "Šlep vozilo na autoputu - brz odziv ekipe" },
  { src: slep10, alt: "Stroker šlep služba - pouzdano šlepanje vozila" },
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-card" id="galerija" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <h2 id="gallery-heading" className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Galerija</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Pogledajte naša vozila i akcije na terenu
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
