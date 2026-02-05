# Google Search Console Setup Guide

This guide will help you complete the Google Search Console setup for your portfolio website.

## What's Already Done ✅

1. **Sitemap Created**: A sitemap.xml file has been created at `/public/sitemap.xml`
2. **Robots.txt Updated**: The robots.txt file now references your sitemap
3. **SEO Component Enhanced**: Added support for Google Search Console verification meta tag
4. **Structured Data**: JSON-LD schema for Person is already implemented

## Steps to Complete Setup

### 1. Verify Your Site with Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" and enter your domain: `https://luckylabs.tech`
3. Choose the **HTML tag** verification method
4. Copy the verification code (the content value from the meta tag)
   - Example: `<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />`
5. Add the verification code to your site in one of two ways:

#### Option A: Using the SEOHead Component (Recommended)
Add the verification prop to your SEOHead component in your pages:

```tsx
<SEOHead 
  googleSiteVerification="YOUR_VERIFICATION_CODE_HERE"
/>
```

#### Option B: Add to index.html
Add this line in the `<head>` section of `/index.html`:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

6. Deploy your site with the verification code
7. Return to Google Search Console and click "Verify"

### 2. Submit Your Sitemap

Once your site is verified:

1. In Google Search Console, go to **Sitemaps** (in the left sidebar)
2. Enter your sitemap URL: `https://luckylabs.tech/sitemap.xml`
3. Click "Submit"

### 3. Monitor Your Site

After verification and sitemap submission:

- **Coverage**: Check which pages are indexed
- **Performance**: View search queries, clicks, and impressions
- **Enhancements**: See mobile usability and Core Web Vitals
- **URL Inspection**: Test individual URLs for indexing issues

### 4. Update Sitemap for Blog Posts (Future)

When you add blog posts, update the sitemap to include them:

```xml
<url>
  <loc>https://luckylabs.tech/blog/your-blog-post-slug</loc>
  <lastmod>2026-01-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

## Additional Tips

### Improve SEO
- Ensure all pages have unique titles and descriptions
- Use the SEOHead component on every page
- Add alt text to all images
- Optimize page load speed

### Structured Data
Your site already includes Person schema. Consider adding:
- BreadcrumbList schema for navigation
- Article schema for blog posts
- Project/CreativeWork schema for portfolio items

### Regular Maintenance
- Check Search Console weekly for errors
- Update sitemap when adding new pages
- Monitor search performance and adjust keywords
- Fix any coverage or mobile usability issues

## Important Files

- **Sitemap**: `/public/sitemap.xml`
- **Robots.txt**: `/public/robots.txt`
- **SEO Component**: `/src/components/seo/SEOHead.tsx`

## Need Help?

If you encounter issues:
1. Check the [Google Search Console Help Center](https://support.google.com/webmasters)
2. Use the URL Inspection tool to diagnose specific pages
3. Verify your site is accessible and not blocked by robots.txt

---

**Note**: It can take 24-48 hours for Google to start indexing your site after verification. Be patient and monitor the Search Console for updates.
