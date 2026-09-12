# Yousef Alaghehband Personal Website — Master V4

## Editorial photography update
Eight newly supplied photographs are distributed through the landing page as editorial storytelling moments rather than a consecutive album. They are used across School & University Programs, International Coaching, Champions & Athlete Development, Global Experience, Competition Environment, and Athlete Development.

## Responsive image rules
- Content photography uses intrinsic width/height with `height:auto` and `object-fit:contain` so the complete source image stays inside its frame.
- Dedicated rules cover phone portrait, phone landscape, portrait tablet/iPad, landscape tablet/small laptop, and wide desktop.
- Mobile layouts collapse editorial sections to one column and remove fixed-height image crops.
- Hero copy and hero media remain separate so text does not cover faces or bodies.

## FAQ / AEO
The landing page now contains 12 expanded FAQ items prioritizing schools, universities, after-school programs and camps, followed by coach education, private coaching, high performance, fees and contact. FAQ structured data is included in JSON-LD.

## SEO / GEO / AEO foundation
- Updated title and meta description
- Canonical URL
- Robots meta
- Open Graph and Twitter metadata
- Person + WebSite + FAQPage JSON-LD
- Semantic headings and descriptive image alt text
- `robots.txt`
- `sitemap.xml`
- `llms.txt` as an additional machine-readable site summary

## Social/contact update
- Instagram connected: @Youseffencing
- LinkedIn connected to the supplied profile URL
- WhatsApp connected: +1 514 552 4343
- WeChat Channel QR added in a modal opened from Contact and Footer
- Facebook remains unconnected until an exact profile/page URL is supplied

## Deployment note
This package is deploy-ready static HTML/CSS/JS for Vercel. Deploying the ZIP/source does not itself submit the site to Google Search Console; after the live deploy, submit `https://www.youseffencing.org/sitemap.xml` and request indexing for the homepage in Search Console.
