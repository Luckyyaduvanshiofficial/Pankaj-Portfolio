import { Github, Linkedin, Instagram, Globe, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/pankaj-kumawat",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    description: "Connect on GitHub",
    href: "https://github.com/pankajkumawat",
    Icon: Github,
  },
  {
    name: "Instagram",
    description: "Connect on Instagram",
    href: "https://www.instagram.com/pankajkumawat",
    Icon: Instagram,
  },
  {
    name: "Portfolio",
    description: "Visit my portfolio",
    href: "https://pankajkumawat.in",
    Icon: Globe,
  },
];

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '20px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
};

const cardHoverStyle = {
  background: 'rgba(255, 255, 255, 0.12)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.25), 0 0 12px rgba(138, 43, 226, 0.35)',
};

const iconGradient = {
  background: 'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)',
};

export const SocialHub = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className="font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)',
              color: 'white'
            }}
          >
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-4 text-white">
            Find Me <span className="gradient-text">Everywhere Online</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let's connect! Follow my journey across platforms where I share insights,
            projects, and thoughts on technology and career growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 transition-all duration-300 animate-fade-up"
              style={{
                ...cardStyle,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, cardStyle);
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={iconGradient}
              >
                <link.Icon size={28} className="text-white" />
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-heading font-semibold text-white">{link.name}</h3>
                <ExternalLink size={16} className="text-white/50 group-hover:text-white/80 transition-colors" />
              </div>

              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{link.description}</p>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">
            Prefer email? Let's talk directly.
          </p>
          <Button
            size="lg"
            className="border-0"
            style={{
              background: 'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)',
              color: 'white'
            }}
          >
            <a href="mailto:pankaj@pankajkumawat.in" className="flex items-center gap-2">
              <Mail size={18} />
              pankaj@pankajkumawat.in
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
