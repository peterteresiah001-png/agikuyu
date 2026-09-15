// Central place to edit contact details — used across the whole site.
export const SITE = {
  name: "Agĩkũyũ Women and Men",
  tagline: "Preserving our knowledge. Promoting our language. Connecting generations.",
  phone: "+254700000000", // TODO: replace with real number
  whatsappNumber: "254700000000", // digits only, no + , used for wa.me links
  email: "info@agikuyuwomenandmen.org",
  location: "Kiambu County, Kenya",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
  },
};

// Builds a wa.me link with a prefilled message.
export function whatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}
