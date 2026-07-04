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
      'Classic, hybrid, volume, and mega volume sets — each lash placed individually for a look that’s full, feather-light, and unmistakably yours. Whether you want everyday definition or full-glam drama, your set is mapped to your eye shape and lifestyle, with fills to keep it flawless.',
    tags: ['Classic', 'Hybrid', 'Volume', 'Mega Volume', 'Fills'],
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
    tags: ['Brow Shaping', 'Brow Wax', 'Threading', 'Facial Wax'],
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Client receiving a brow and facial beauty treatment',
  },
]

export const menu = [
  {
    category: 'Hair',
    items: [
      { name: 'Women’s Haircut' },
      { name: 'Men’s Haircut' },
      { name: 'Kids’ Haircut' },
      { name: 'All-Over Color' },
      { name: 'Root Touch-Up' },
      { name: 'Partial Highlights' },
      { name: 'Full Highlights' },
      { name: 'Balayage' },
      { name: 'Deep-Conditioning Treatment' },
      { name: 'Blowout & Style' },
      { name: 'Special-Occasion Style' },
    ],
  },
  {
    category: 'Lashes',
    items: [
      { name: 'Classic Full Set' },
      { name: 'Hybrid Full Set' },
      { name: 'Volume Full Set' },
      { name: 'Mega Volume Full Set' },
      { name: 'Lash Fill', note: '2 or 3 week' },
      { name: 'Lash Removal' },
    ],
  },
  {
    category: 'Waxing & Threading',
    items: [
      { name: 'Brow Wax & Shape' },
      { name: 'Brow Threading' },
      { name: 'Upper Lip Wax' },
      { name: 'Lip Threading' },
      { name: 'Chin Wax' },
      { name: 'Full-Face Wax' },
    ],
  },
]
