export interface TravelPost {
  id: number;
  title: string;
  image: string;
  alt: string;
  content: string;
  link: string;
}

export const BeforeTravel = [
  {
    id: 1,
    title: "How to Pack Like a Pro",
    image: "/BeforeTravel/packing.jpg",
    alt: "Packing Guide",
    content: `
      Packing efficiently can transform your travel experience. Start by making a checklist of essentials to avoid overpacking. 
      Roll your clothes instead of folding to save space and prevent wrinkles. Utilize packing cubes to organize your items and separate 
      categories like clothes, toiletries, and electronics. Always keep important documents, medications, and valuables in your carry-on bag. 
      Remember to check the weather and pack versatile outfits for any conditions.
    `,
    link: "https://example.com/related-article",
  },
  {
    id: 2,
    title: "Essential Travel Documents You Need",
    image: "/BeforeTravel/documents.jpg",
    alt: "Travel Documents",
    content: `
      Having the right documents is crucial for a hassle-free trip. Ensure your passport is valid for at least six months beyond your travel dates. 
      Check visa requirements for your destination and apply well in advance. Carry printed and digital copies of essential documents like flight tickets, 
      hotel bookings, and travel insurance. Don’t forget to include a copy of your identification and emergency contacts. Keeping these documents in 
      an organized travel wallet can make them easily accessible.
    `,
    link: "https://example.com/related-article",
  },
  {
    id: 3,
    title: "Pre-Travel Health & Safety Tips",
    image: "/BeforeTravel/health.jpg",
    alt: "Health and Safety",
    content: `
      Staying healthy while traveling starts before you leave. Schedule a visit to your doctor to ensure you’re up to date on vaccinations and address any 
      health concerns. Pack a personal health kit with essentials like medications, bandages, and antiseptic wipes. Research your destination for any 
      specific health risks or precautions. Be cautious about food and water safety, and always have travel insurance to cover unexpected medical emergencies.
    `,
    link: "https://example.com/related-article",
  },
  {
    id: 4,
    title: "Travel Budget Planning",
    image: "/BeforeTravel/budgets.jpg",
    alt: "Travel Budget Planning",
    content: `
      Creating a budget ensures you won’t overspend during your travels. Research costs for accommodation, food, activities, and transportation at your 
      destination. Allocate funds for essentials and set aside an emergency fund. Use travel budgeting apps or spreadsheets to track your expenses. Lastly, 
      research currency exchange rates to avoid surprises.
    `,
    link: "https://example.com/related-article",
  },
  {
    id: 5,
    title: "Environmental Responsibility",
    image: "/BeforeTravel/plastics.jpg",
    alt: "Environmental Responsibility",
    content: `
      Traveling responsibly is essential for preserving our planet. Carry reusable water bottles, avoid single-use plastics, and choose eco-friendly accommodations. 
      Respect local wildlife and avoid activities that exploit animals or harm the environment. Support local businesses and conservation projects whenever possible.
    `,
    link: "", // Assuming no link here for the fifth item.
  },
  {
    id: 6,
    title: "Emergency Contacts & Backup Plans",
    image: "/BeforeTravel/backup.jpg",
    alt: "Emergency Contacts",
    content: `
      Always be prepared for the unexpected. Create a list of emergency contacts, including local embassy details and your country's helpline. Save important 
      numbers in your phone and on paper as a backup. Share your travel itinerary with friends or family. If something goes wrong, having a solid backup plan 
      will make all the difference.
    `,
    link: "https://example.com/related-article",
  },
];
