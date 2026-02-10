import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marko Jovanović",
    text: "Pokvario mi se auto na autoputu u 2 ujutru. Pozvao sam Stroker i stigli su za 25 minuta! Profesionalni, brzi i korektni. Svaka preporuka!",
    rating: 5,
  },
  {
    name: "Jelena Petrović",
    text: "Odličan servis, nema šta da se kaže. Imala sam problem sa akumulatorom usred zime, došli su za pola sata i rešili sve na licu mesta. Hvala vam!",
    rating: 5,
  },
  {
    name: "Nikola Đorđević",
    text: "Koristio sam njihov šlep za dovoz auta iz Nemačke. Sve je prošlo glatko, vozilo stiglo bez ikakvih oštećenja. Cena fer, komunikacija odlična.",
    rating: 5,
  },
  {
    name: "Stefan Milić",
    text: "Zaglavio sam se u snegu kod Zlatibora. Došli su brže nego što sam očekivao i izvukli auto za 15 minuta. Stvarno pouzdana ekipa!",
    rating: 5,
  },
  {
    name: "Dragana Stanković",
    text: "Pukla mi guma na putu za Niš. Pozvala Stroker, stigli su brzo i zamenili gumu. Ljubazni i profesionalni. Definitivno ih čuvam u kontaktima!",
    rating: 5,
  },
  {
    name: "Milan Obradović",
    text: "Imao sam udes, bio u šoku, a oni su preuzeli sve — od šlepa do dokumentacije za osiguranje. Olakšali su mi ceo proces. Preporučujem svima.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background" id="recenzije" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <h2 id="reviews-heading" className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
          Šta kažu naši <span className="text-gradient">klijenti</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Stotine zadovoljnih korisnika širom Srbije
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-1 mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={r.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-label="zvezda" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-4 italic" itemProp="reviewBody">
                "{r.text}"
              </p>
              <p className="font-heading text-sm text-primary font-semibold" itemProp="author">{r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
