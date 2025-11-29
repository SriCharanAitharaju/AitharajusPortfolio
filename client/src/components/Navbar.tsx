import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location === "/";
  // Use white text on home page with dark background
  const useWhiteText = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/">
          <div className={`text-xl md:text-2xl font-extrabold font-heading tracking-tight cursor-pointer hover:scale-105 transition-transform ${
            useWhiteText ? "text-white" : "text-primary"
          }`}>
            Aitharaju.
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path}>
              <div className={`text-sm font-bold cursor-pointer transition-colors relative group ${
                location === item.path 
                  ? (useWhiteText ? "text-white" : "text-primary")
                  : (useWhiteText ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-primary")
              }`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                  useWhiteText ? "bg-white" : "bg-primary"
                } ${
                  location === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${useWhiteText ? "text-white" : "text-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.path}>
                <div 
                  className={`text-left text-lg font-bold py-2 border-b border-border/50 last:border-0 ${
                     location === item.path ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
