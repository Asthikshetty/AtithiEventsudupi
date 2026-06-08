import djlightImg from "../assets/djlights.jpg";
import makeoverImg from "../assets/makeover.jpg";
import logo from "../assets/logo1.jpeg";


export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  category: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "catering",
    title: "Catering [Veg & Non-Veg]",
    shortDesc: "Authentic coastal Udupi veg feasts and mouth-watering Kundapura style non-veg delicacies.",
    longDesc: "Atithi Catering brings you the finest culinary experiences on the coast. From traditional Udupi Brahmin style meals served on plantain leaves (featuring Gulla Huli, Payasa, and Rasam) to spicy Kundapura style delicacies like Chicken Ghee Roast, Fish Fry, and Biryani. We source fresh, local ingredients and ensure extreme hygiene and premium presentation for your guests.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80",
    category: "Catering",
    features: ["Traditional Banana Leaf Meals", "Kundapura Chicken Ghee Roast Specialties", "Fresh Coastal Seafood Live Counters", "Live Chaat & Dessert Stations"]
  },
  {
    id: "dj-sound",
    title: "DJ Sound & Audio",
    shortDesc: "High-end sound systems and professional DJs to set the perfect beat for your celebrations.",
    longDesc: "Power up your dance floor with our professional JBL/RCF line array sound systems, concert-grade bass setups, and dynamic lighting. Our highly experienced DJs mix the latest Bollywood, Kannada, Tulu, and international tracks, tailoring the vibe specifically to your guests' energy.",
    image: djlightImg,
    category: "Entertainment",
    features: ["Line Array Sound Systems", "Intelligent Stage Lighting", "Professional Bilingual DJs", "Wireless Mic & Mixer Setup"]
  },
  {
    id: "cultural-events",
    title: "Cultural Events & Choreography",
    shortDesc: "Spectacular traditional art forms like Yakshagana, Pili Vesha, and modern dance entries.",
    longDesc: "Celebrate the rich heritage of coastal Karnataka with traditional art forms. We organize grand Yakshagana performances, energetic Tiger Dance (Pili Vesha) troupes, and cinematic bridal entries. Our professional choreographers also plan and direct family sangeet dances and modern performances.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    category: "Cultural",
    features: ["Cinematic Couple Entry Designs", "Traditional Pili Vesha Troupes", "Yakshagana & Dollu Kunitha Acts", "Sangeet Choreography Experts"]
  },
  {
    id: "decoration",
    title: "Shamiyana and Decoration",
    shortDesc: "Exquisite stage decorations, floral arrangements, and premium waterproof German tents.",
    longDesc: "Transform your venue into a dream palace. We offer royal floral mandaps, modern glass stages, theme-based background panels, and ambient fairy light installations. For outdoor events, we provide premium waterproof German tents and elegant Shamiyana structures with plush seating.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    features: ["Premium Fresh Flower Mandaps", "Waterproof German Tents & Shamiyana", "Thematic Backdrop & Walkway Design", "Luxury Seating & Couch Rentals"]
  },
  {
    id: "youtube-live",
    title: "YouTube Live Streaming",
    shortDesc: "High-definition multi-camera live streaming to share your joy with loved ones globally.",
    longDesc: "Don't let distance keep your family away. Our live streaming service uses advanced multi-camera angles, wireless video transmitters, and dedicated internet bonding setups to stream your wedding in crystal clear 1080p HD on YouTube, Facebook, or private links with zero lag.",
    image: "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    features: ["Multi-Camera 1080p Setup", "Crystal Clear Audio Integration", "Instant Playbacks & Graphic Overlays", "Reliable Internet Bonding Systems"]
  },
  {
    id: "photography",
    title: "Cinematic Photography",
    shortDesc: "Capturing your precious moments with cinematic precision, candids, and drone shoots.",
    longDesc: "Our team of award-winning photographers and videographers specializes in capturing emotions. From romantic pre-wedding shoots on Udupi's pristine beaches (Malpe, Kapu) to candid wedding clicks, emotional highlights, and sweeping aerial drone shots that document every second beautifully.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "Media",
    features: ["Candid & Traditional Photography", "Pre-Wedding Beach Shoots", "Cinematic Wedding Films & Reels", "4K Drone Aerial Videography"]
  },
  {
    id: "makeup",
    title: "Bridal MakeUp & Styling",
    shortDesc: "HD and airbrush makeovers by professional artists to make you look radiant on your big day.",
    longDesc: "Look breathtaking on your wedding day with professional styling tailored to your skin tone and features. We offer HD Makeup, Airbrush Makeup, traditional South Indian bridal hairstyling (with jasmine and gold ornaments), and flawless saree draping services.",
    image: makeoverImg,
    category: "Styling",
    features: ["HD & Airbrush Bridal Makeup", "Traditional Saree Draping", "Jasmine Hair Styling (Jadai)", "Groom Grooming Packages"]
  },
  {
    id: "led-screen",
    title: "LED Screen & Video Walls",
    shortDesc: "High-brightness indoor and outdoor LED walls for live feeds and video presentations.",
    longDesc: "Bring dynamic visuals to your event with our ultra-bright P2.5 and P3 outdoor and indoor LED screens. Perfect for showcasing live video feeds, pre-wedding couple films, interactive slideshows, and vibrant background visualizers for musical nights.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    features: ["High-Definition P2.5/P3 Panels", "Custom Size Configurations", "Live Feed Integration", "Interactive Visual Backdrops"]
  },
  {
    id: "invitation",
    title: "Invitation & Card Design",
    shortDesc: "Traditional printed cards, elegant box invitations, and creative digital video invites.",
    longDesc: "Set the perfect first impression. We design and print premium traditional invitation cards, modern wooden/laser-cut box invites with dry fruit compartments, and highly creative animated digital video invites that you can easily share over WhatsApp.",
    image:logo,
    category: "Decor",
    features: ["Premium Box Invitations", "Digital Video & PDF Invites", "Traditional Kannada/English Card Printing", "Eco-friendly Seed Cards"]
  },
  {
    id: "vehicles",
    title: "Luxury Wedding Vehicles",
    shortDesc: "Fully decorated luxury and vintage cars to make your bridal entry and sendoff majestic.",
    longDesc: "Arrive in style. Choose from our fleet of decorated luxury sedans, open-roof convertibles, vintage classic cars, or grand SUVs. We also offer fully managed air-conditioned buses and traveller vans to transport your guests smoothly between hotels and the venue.",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=800&q=80",
    category: "Logistics",
    features: ["Luxury Cars (Audi, BMW, Benz)", "Vintage Bridal Cars", "Beautiful Flower Decoration", "Guest Transport Management"]
  },
  {
    id: "stage-lighting",
    title: "Sound & Stage Lightings",
    shortDesc: "Professional trusses, ambient lighting, smoke effects, and grand concert stage light designs.",
    longDesc: "Create a magical theatrical experience. We provide heavy-duty aluminum trusses, moving-head beam lights, warm ambient par-lights, dry-ice low fog machines for couple dances, and customized lighting scripts to elevate the visual appeal of your venue.",
    image:djlightImg,
    category: "Tech",
    features: ["Heavy Duty Stage Trusses", "Moving Heads & Sharpy Lights", "Dry Ice Low Fog (Cloud Dance)", "Co2 Jets & Cold Fire Sparklers"]
  }
];
