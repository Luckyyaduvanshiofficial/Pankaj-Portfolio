import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/pankajkumawat", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pankajkumawat9950/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/pankajkumawat", icon: Instagram, label: "Instagram" },
  { href: "mailto:pankajkumawat2023@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Pankaj
              </span>
              <span className="text-2xl font-heading font-light text-foreground">
                Kumawat
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Engineer passionate about AI/ML Engineering, Data Science, Machine Learning, and building intelligent software systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              pankajkumawat2023@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pankaj Kumawat. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};