# Portfolio Backlog - Future Features

## High Priority

### Blog/Articles Section
**Goal:** Demonstrate expertise and thought leadership through technical writing

**Requirements:**
- Markdown-based blog posts with frontmatter
- Use Astro Content Collections for type-safe blog data
- Blog listing page with pagination
- Individual blog post pages with syntax highlighting
- Categories/tags for organization
- Reading time estimate
- Bilingual support (EN/ES articles)
- RSS feed generation
- Social share buttons

**Structure:**
```
src/
├── content/
│   ├── blog/
│   │   ├── en/
│   │   │   └── post-slug.md
│   │   └── es/
│   │       └── post-slug.md
│   └── config.ts  # Define blog collection schema
├── pages/
│   ├── blog/
│   │   ├── index.astro      # Blog listing
│   │   └── [slug].astro     # Blog post page
│   └── en/
│       └── blog/
│           ├── index.astro
│           └── [slug].astro
```

**Estimated Effort:** Medium
**Dependencies:** None

---

## Medium Priority

### Individual Project Detail Pages
**Goal:** Provide in-depth case studies for featured projects

**Requirements:**
- Dynamic routes from projects.json
- Detailed project description
- Challenge/Solution sections
- Technology deep-dive
- Screenshots/demo videos
- Link to live demo and GitHub
- Related projects section

**Structure:**
```
src/pages/
├── projects/
│   └── [slug].astro
└── en/
    └── projects/
        └── [slug].astro
```

**Estimated Effort:** Small
**Dependencies:** None

---

### Testimonials Section
**Goal:** Build credibility with client/colleague recommendations

**Requirements:**
- Testimonials data file (JSON)
- Component to display testimonials
- Photo + name + role + company
- Rotation/carousel for multiple testimonials
- Link to LinkedIn recommendations (optional)

**Data Structure:**
```json
{
  "testimonials": [
    {
      "name": "Carlos Eduardo Garzón",
      "role": "Senior Developer",
      "company": "Opitech",
      "photo": "/images/testimonials/carlos.jpg",
      "text": {
        "en": "Testimonial text...",
        "es": "Texto del testimonio..."
      }
    }
  ]
}
```

**Estimated Effort:** Small
**Dependencies:** Need to collect testimonials

---

## Low Priority / Future Enhancements

### Contact Form Backend
**Goal:** Functional contact form with email delivery

**Options:**
1. Formspree/Getform (third-party service)
2. Netlify Forms
3. Custom serverless function (AWS Lambda, Vercel Functions)
4. EmailJS (client-side email sending)

**Requirements:**
- Form validation
- Spam protection (honeypot or reCAPTCHA)
- Success/error messages
- Email notification to hernandounez13@gmail.com
- Auto-reply to sender

**Estimated Effort:** Small
**Dependencies:** Choose email service provider

---

### CMS Integration
**Goal:** Non-technical content updates

**Options:**
- Decap CMS (formerly Netlify CMS)
- Sanity
- Contentful
- Strapi

**Requirements:**
- Admin interface for content editing
- Preview functionality
- Git-based workflow (for static hosting)

**Estimated Effort:** Medium
**Dependencies:** Choose CMS platform

---

### Analytics Integration
**Goal:** Track visitor engagement and portfolio performance

**Options:**
- Google Analytics 4
- Plausible (privacy-friendly)
- Umami (self-hosted, privacy-friendly)
- Simple Analytics

**Requirements:**
- Page view tracking
- Event tracking (CV downloads, project link clicks)
- Privacy-compliant (GDPR)
- Dashboard for insights

**Estimated Effort:** Small
**Dependencies:** Choose analytics platform

---

### Performance Optimizations
**Goal:** Achieve perfect Lighthouse scores

**Tasks:**
- Image optimization (WebP/AVIF formats)
- Implement preloading for critical assets
- Add service worker for offline support
- Optimize font loading
- Implement view transitions API
- Code splitting for larger pages

**Estimated Effort:** Medium
**Dependencies:** Baseline implementation complete

---

### Advanced Features

#### Project Filtering/Search
- Filter projects by technology
- Search functionality
- Sort by date, name, or featured status

#### Newsletter Subscription
- Collect emails for blog updates
- Integration with Mailchimp, ConvertKit, or Buttondown

#### Code Snippet Sharing
- Interactive code examples
- Live code playground (CodeSandbox embeds)

#### Dark Mode Enhancements
- Multiple theme options (not just light/dark)
- System preference detection
- Smooth theme transitions

---

## Technical Debt / Improvements

- [ ] Add E2E tests (Playwright)
- [ ] Set up CI/CD pipeline
- [ ] Add sitemap.xml generation
- [ ] Implement structured data (Schema.org)
- [ ] Add Open Graph images
- [ ] Set up internationalization routing with automatic redirects
- [ ] Optimize bundle size
- [ ] Add error boundaries
- [ ] Implement 404 page
- [ ] Add loading states for dynamic content

---

## Ideas / Brainstorming

- Interactive resume timeline
- Skills endorsement gamification
- GitHub contribution graph integration
- Real-time "currently learning" section
- Integration with dev.to or Medium articles
- Code challenges/puzzles section
- Easter eggs for curious visitors
- Animated project showcases with 3D effects

---

**Last Updated:** 2026-01-09
