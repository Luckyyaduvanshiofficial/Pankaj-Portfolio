import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Pankaj
          </span>
          <span className="text-2xl font-heading font-light text-foreground">
            Kumawat
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle />

          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
            <a href="https://www.linkedin.com/in/pankaj-kumawat" target="_blank" rel="noopener noreferrer">
              Let's Connect
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-card/95 backdrop-blur-lg mt-2 mx-4 rounded-xl p-4 animate-fade-up border border-border shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 text-base font-medium transition-colors ${location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <a href="https://www.linkedin.com/in/pankaj-kumawat" target="_blank" rel="noopener noreferrer">
              Let's Connect
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};