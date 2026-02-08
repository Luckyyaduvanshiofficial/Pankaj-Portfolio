import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import heroImage from "@/assets/Main-Profile.webp";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = `https://pankajkumawat.in/blog/${post.slug}`;

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        type="article"
        url={shareUrl}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} className="bg-primary/20 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <img
                  src={heroImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm">Python Developer & Backend Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-muted/50">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Share2 size={16} />
                Share this article:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div
                className="text-foreground [&>h1]:text-3xl [&>h1]:font-heading [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-heading [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:text-muted-foreground [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:text-muted-foreground [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2 [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4 [&>code]:font-mono [&>code]:text-sm [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code>$1</code>')
                    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
                    .replace(/^- (.*$)/gm, '<li>$1</li>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^(?!<[hpuol])/gm, '<p>')
                }}
              />
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 glass-card rounded-2xl">
              <div className="flex items-start gap-4">
                <img
                  src={heroImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading font-semibold mb-1">Written by {post.author}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Python Developer | Django Developer | Passionate about building responsive web applications,
                    scalable backend systems, and user-centric solutions.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/pankajkumawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a
                      href="https://github.com/pankajkumawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Back to All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
