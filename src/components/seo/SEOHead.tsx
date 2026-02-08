import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  googleSiteVerification?: string;
}

const defaultSEO = {
  title: "Pankaj Kumawat - Software Engineer | Official Portfolio",
  description: "Official Portfolio of Pankaj Kumawat. Software Engineer specializing in AI/ML Engineering, Data Science, Machine Learning, Python, and Backend Development. Building intelligent and scalable systems.",
  image: "https://pankajkumawat.in/pankaj-profile.jpg",
  url: "https://pankajkumawat.in",
  keywords: "Pankaj Kumawat, Software Engineer, AI Engineer, ML Engineer, Data Scientist, Machine Learning, Data Analytics, Python Developer, Backend Engineer, Artificial Intelligence, Software Developer India",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pankaj Kumawat",
  "alternateName": ["Pankaj Kumawat Python Developer", "Pankaj Kumawat Official"],
  "url": "https://pankajkumawat.in",
  "image": {
    "@type": "ImageObject",
    "url": "https://pankajkumawat.in/pankaj-profile.jpg",
    "caption": "Pankaj Kumawat - Python Developer",
    "width": "800",
    "height": "800"
  },
  "jobTitle": ["Software Engineer", "AI/ML Engineer", "Data Scientist", "Backend Engineer"],
  "description": "Software Engineer with a BCA degree specializing in AI/ML Engineering, Data Science, Machine Learning, and Backend Systems. Experienced in building intelligent applications and data-driven solutions.",
  "sameAs": [
    "https://www.linkedin.com/in/pankajkumawat9950/",
    "https://github.com/pankajkumawat",
    "https://www.instagram.com/pankajkumawat",
    "https://pankajkumawat.in",
  ],
  "knowsAbout": [
    "Python Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Data Analytics",
    "AI/ML Engineering",
    "Backend Development",
    "MySQL",
    "REST APIs",
    "Git/GitHub",
    "Software Engineering"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "occupationLocation": {
      "@type": "Country",
      "name": "India"
    },
    "skills": "Python, Machine Learning, AI/ML Engineering, Data Science, Data Analytics, Backend Development, MySQL, Git/GitHub"
  }
};

const professionalSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2024-01-01T00:00:00+00:00",
  "dateModified": "2026-02-05T00:00:00+00:00",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://pankajkumawat.in/#person",
    "name": "Pankaj Kumawat",
    "image": "https://pankajkumawat.in/pankaj-profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/pankajkumawat9950/",
      "https://github.com/pankajkumawat",
      "https://www.instagram.com/pankajkumawat",
      "https://pankajkumawat.in"
    ]
  }
};

export const SEOHead = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = "website",
  keywords = defaultSEO.keywords,
  googleSiteVerification,
}: SEOHeadProps) => {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Pankaj Kumawat`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pankaj Kumawat" />
      <link rel="canonical" href={url} />

      {/* Google Search Console Verification */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Pankaj Kumawat Official" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="Pankaj Kumawat - Python Developer" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Image SEO */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Pankaj Kumawat - Python Developer" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Additional Profile Links for Search Engines */}
      <link rel="me" href="https://www.linkedin.com/in/pankajkumawat9950/" />
      <link rel="me" href="https://github.com/pankajkumawat" />
      <link rel="author" href="https://pankajkumawat.in" />

      {/* JSON-LD Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      {/* JSON-LD Professional Profile Schema */}
      <script type="application/ld+json">
        {JSON.stringify(professionalSchema)}
      </script>
    </Helmet>
  );
};