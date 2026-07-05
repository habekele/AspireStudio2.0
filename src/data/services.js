// Service menu for the /services page.
// Edit names, descriptions, and menu items here — no code changes needed.
// Photos are stock imagery; to use your own, drop files in public/assets/
// and set image to `${import.meta.env.BASE_URL}assets/your-photo.jpg`.

export const BOOK_URL = 'https://aspirestudio.square.site/'

export const majorServices = [
  {
    id: 'hair',
    number: '01',
    title: 'Hair Services',
    subtitle: 'Colors & Cuts',
    description:
      'From a fresh trim to a full colour transformation, every hair service starts with a real conversation about your hair — its texture, its history, and where you want it to go. Cuts, dimensional colour, highlights, and restorative treatments are all tailored to you, never one-size-fits-all.',
    tags: ['Haircuts', 'Colour', 'Highlights', 'Balayage', 'Treatments'],
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Stylist cutting and styling a client’s hair in the salon',
  },
  {
    id: 'lashes',
    number: '02',
    title: 'Lash Extensions',
    subtitle: 'Volume & Precision',
    description:
      'Classic, hybrid, and volume sets — each lash placed individually for a look that’s full, feather-light, and unmistakably yours. Whether you want everyday definition or full-glam drama, your set is mapped to your eye shape and lifestyle, with fills to keep it flawless.',
    tags: ['Classic', 'Hybrid', 'Volume', 'Fills'],
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Close-up of long, defined eyelashes',
  },
  {
    id: 'waxing',
    number: '03',
    title: 'Waxing & Threading',
    subtitle: 'Brows & Face',
    description:
      'Clean lines and soft skin, without the guesswork. Brows are shaped to frame your face — not just follow a trend — using precise waxing or traditional threading, whichever suits your skin best. Quick, gentle facial services that finish any look.',
    tags: ['Brow Wax', 'Brow Tint', 'Threading', 'Facial Wax'],
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Client receiving a brow and facial beauty treatment',
  },
]

export const menu = [
  {
    category: 'Cuts & Styling',
    items: [
      { name: 'Women’s Haircut' },
      { name: 'Men’s Haircut' },
      { name: 'Kids Haircut', note: '10 & under' },
      { name: 'Wash & Style' },
      { name: 'Formal Style' },
      { name: 'Wedding Hair' },
    ],
  },
  {
    category: 'Color & Highlights',
    items: [
      { name: 'All Over Color' },
      { name: 'Root Touch Up' },
      { name: 'Gloss' },
      { name: 'Partial Highlight' },
      { name: 'Full Head Highlights' },
      { name: 'Base Color + Partial Highlights' },
      { name: 'Balayage' },
      { name: 'Hair Color Correction' },
      { name: 'Consult' },
    ],
  },
  {
    category: 'Lashes',
    items: [
      { name: 'Classic Lash Full Set' },
      { name: 'Classic Lash Fill' },
      { name: 'Hybrid Lash Full Set' },
      { name: 'Hybrid Lash Fill' },
      { name: 'Volume Lash Full Set' },
      { name: 'Volume Lash Fill' },
    ],
  },
  {
    category: 'Brows & Face',
    items: [
      { name: 'Brow Wax' },
      { name: 'Brow Tint' },
      { name: 'Brow Threading' },
      { name: 'Brow + Lip Wax' },
      { name: 'Lip Threading' },
      { name: 'Lip + Chin Wax' },
      { name: 'Makeup' },
    ],
  },
]
