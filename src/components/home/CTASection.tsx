import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div 
          className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-center"
          style={{ background: 'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)' }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Let's Build Something <span className="opacity-90">Amazing Together</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi — 
              my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group border-0"
                style={{ 
                  background: '#6A11CB',
                  color: 'white',
                  borderRadius: '14px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4C0CA3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#6A11CB';
                }}
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-0"
                style={{ 
                  background: 'rgba(255,255,255,0.25)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  color: 'white',
                  borderRadius: '14px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.40)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
              >
                <a href="mailto:pankaj@pankajkumawat.in" className="flex items-center gap-2">
                  <Mail size={18} />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
