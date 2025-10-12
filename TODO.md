# TODO: Improve Blog HTML

## Information Gathered
- The HTML is a static blog page in Portuguese, titled "O Blog do Macho".
- Structure includes header with nav and search, main with 25 articles, gallery, testimonials, sidebar with widgets, and footer with social links and video.
- Uses basic semantic elements but can be enhanced for better accessibility, SEO, and semantics.
- Images are present but some sources may be missing (e.g., gal1.png etc., but focus on HTML).
- No JavaScript, pure HTML/CSS.

## Plan
- Enhance semantics: Add <time> for dates, <figure> for images, proper roles.
- Improve accessibility: Add skip links, better alt texts, ARIA labels.
- Boost SEO: Add meta description, keywords, Open Graph tags.
- Clean code: Remove redundant comments, standardize indentation, improve link texts.

## Dependent Files to be edited
- index.html (only file)

## Followup steps
- Open index.html in browser to verify rendering and accessibility.
- Check with tools like WAVE or Lighthouse for improvements.

## Steps
- [ ] Update <head> with SEO meta tags (description, keywords, Open Graph).
- [ ] Add skip to main content link in header.
- [ ] Wrap each article image in <figure> and add <figcaption> with alt text.
- [ ] Replace publication date paragraphs with <time> elements.
- [ ] Add schema.org microdata (itemprop) for blog posts.
- [ ] Improve link accessibility: Add titles, better anchor texts.
- [ ] Clean up redundant comments and standardize code.
- [ ] Ensure proper heading hierarchy (h1, h2, h3).
- [ ] Add role="main" to main, role="complementary" to aside.
- [ ] Update footer with better structure.
