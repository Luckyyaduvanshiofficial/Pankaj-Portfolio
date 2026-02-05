import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TechStack } from "@/components/TechStack";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { SocialHub } from "@/components/home/SocialHub";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead />
      <HeroSection />
      <div className="relative z-10 -mt-10 mb-20">
        <TechStack />
      </div>
      <AboutPreview />
      <SkillsSection />
      <ProjectsPreview />
      <SocialHub />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
