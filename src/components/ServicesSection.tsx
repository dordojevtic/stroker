import { Truck, Wrench, Battery, CircleDot, AlertTriangle, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Šlep vozila do 3.5t",
    desc: "Profesionalan šlep putničkih automobila, SUV, kombi i manjih dostavnih vozila. Siguran utovar i transport bez oštećenja.",
  },
  {
    icon: Wrench,
    title: "Pomoć na putu",
    desc: "Pokretanje vozila, manji popravci na licu mesta, dijagnostika kvarova i organizacija daljeg šlepa.",
  },
  {
    icon: Battery,
    title: "Akumulator",
    desc: "Startovanje praznog akumulatora, provera stanja, zamena na licu mesta. Brzo rešenje bez čekanja.",
  },
  {
    icon: CircleDot,
    title: "Zamena gume",
    desc: "Zamena gume na licu mesta, pomoć kod sklanjanja vozila, transport do vulkanizera.",
  },
  {
    icon: AlertTriangle,
    title: "Izvlačenje vozila",
    desc: "Izvlačenje iz nezgoda, kanala, blata, snega ili nepristupačnog terena. Stručno i pažljivo.",
  },
  {
    icon: FileText,
    title: "Naplata od osiguranja",
    desc: "Pomoć oko dokumentacije i naplate štete od osiguravajućih kuća. Brza i jasna procedura.",
  },
  {
    icon: Globe,
    title: "Dovoz iz EU",
    desc: "Organizovani transport vozila iz EU i van EU. Individualni i grupni transporti sa kompletnom logistikom.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card" id="usluge" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <h2 id="services-heading" className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
          Naše <span className="text-gradient">Usluge</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Kompletna pomoć na putu — od šlepanja do naplate osiguranja
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
