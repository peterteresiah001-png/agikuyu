# Agĩkũyũ Women and Men — Astro MVP

Functionality-only build (no CSS/design system yet). All pages from the proposal are wired up:
Home, About Us, Bookshop, Our Work, Programmes, Research & Publications, Partner With Us, Contact.

## Key behavior

- **Bookshop = no online payment.** Every book has an "Order via WhatsApp" button
  (`src/components/WhatsAppButton.astro`) that opens `wa.me` with a prefilled message
  containing the book title and price. No cart, no checkout.
- **Contact form** and **Partnership enquiry form** work the same way: on submit they build
  a message and open WhatsApp instead of posting to a server.
- **Newsletter form** in the footer is a placeholder — wire it to Mailchimp/Buttondown/etc.
- Images are all `picsum.photos` placeholders (seeded, so they stay consistent) — swap for
  real photos before launch.
- Edit `src/data/site.js` to set the real WhatsApp number, phone, email, and social links.
- Book, publication and programme content lives in `src/data/*.js` — edit those arrays to
  add/remove real content, no page code changes needed.

## Run it

```bash
npm install
npm run dev
```

## Next steps (post-MVP)

- Add real branding/CSS (colors, logo, typography) per the shared brand visuals.
- Replace placeholder images with real photography.
- Hook the newsletter form to an email provider.
- Add real publication PDFs to `public/publications/`.
