import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StrokerLogo from "@/assets/Stroker_Logo.svg";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#galerija", label: "Galerija" },
  { href: "#instagram", label: "Instagram" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center bg-yellow-400 hover:bg-yellow-500 transition-colors px-4 py-2 rounded-lg shadow-md"
            >
              <img 
                src={StrokerLogo} 
                alt="Šlep Stroker Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
              <a href="tel:+381622740496">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Pozovi nas</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        style={{ top: "80px" }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "font-heading text-2xl font-semibold text-foreground hover:text-primary transition-all py-3 border-b border-border/50",
                  "animate-in slide-in-from-right"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+381622740496"
              className="mt-4 animate-in slide-in-from-right"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              <Button className="w-full gap-2 text-lg py-6">
                <Phone className="w-5 h-5" />
                Pozovi nas: +381 62 274 049
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
