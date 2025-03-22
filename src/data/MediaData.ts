
export interface MediaItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  projectDetails: {
    software: string;
    // Removed other EXIF fields
  };
  aboutProject: string;
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "MORNING LIGHT",
    date: "2023-06-15",
    description: "Early morning light through urban architecture creates dramatic shadows and highlights.",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Photoshop CC 2023",
    },
    aboutProject: "This project explores the interplay of light and shadow in urban environments. The early morning sun creates dramatic contrasts that highlight architectural elements often overlooked during regular daylight hours.",
    tags: ["architecture", "morning", "urban", "light"]
  },
  {
    id: 2,
    title: "URBAN GEOMETRY",
    date: "2023-07-22",
    description: "Geometric patterns in contemporary architecture with strong contrast.",
    imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2071&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Photoshop",
    },
    aboutProject: "Urban Geometry focuses on the abstract patterns found within modern city architecture. The high contrast processing emphasizes the geometric shapes that form the visual language of contemporary urban design.",
    tags: ["architecture", "geometry", "urban", "contrast"]
  },
  {
    id: 3,
    title: "DESERT VISTA",
    date: "2023-05-03",
    description: "Minimalist landscape of desert formations at dusk.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop",
    projectDetails: {
      software: "Capture One Pro & Affinity Photo",
    },
    aboutProject: "Desert Vista captures the serene simplicity of arid landscapes as daylight fades. The minimalist approach highlights the subtle textures and shapes that define these seemingly barren but visually rich environments.",
    tags: ["landscape", "desert", "minimalist", "dusk"]
  },
  {
    id: 4,
    title: "NEON CITY",
    date: "2023-08-14",
    description: "Vibrant nightlife captured through reflections and neon lights.",
    imageUrl: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Luminar AI",
    },
    aboutProject: "Neon City explores the electric energy of urban nightlife, capturing the pulsing lights and reflective surfaces that define metropolitan evenings. The deliberate color processing enhances the otherworldly quality of city nights.",
    tags: ["urban", "night", "neon", "reflections"]
  },
  {
    id: 5,
    title: "MINIMAL PORTRAIT",
    date: "2023-09-10",
    description: "Studio portrait with minimal styling and natural lighting.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop",
    projectDetails: {
      software: "Capture One Pro & Photoshop",
    },
    aboutProject: "This portrait series strips away excessive styling to focus on the subject's natural features. Using soft, directional lighting and a neutral backdrop, the images highlight the subject's inherent character and expressions.",
    tags: ["portrait", "studio", "minimal", "lighting"]
  },
  {
    id: 6,
    title: "ABSTRACT FORMS",
    date: "2023-10-05",
    description: "Exploration of shape, texture, and form through architectural details.",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Photoshop & Illustrator",
    },
    aboutProject: "Abstract Forms investigates the intersection of design and photography, isolating architectural elements to create compositions that challenge the viewer's perception of space and dimension.",
    tags: ["abstract", "architecture", "form", "minimal"]
  },
  {
    id: 7,
    title: "COASTAL HORIZON",
    date: "2023-11-12",
    description: "Seascape photography with emphasis on horizon lines and tonal gradients.",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2057&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Nik Collection",
    },
    aboutProject: "Coastal Horizon explores the meeting point of sea and sky, focusing on the subtle color variations and textural contrasts that define this boundary. Long exposures create ethereal representations of time's passage at the water's edge.",
    tags: ["seascape", "horizon", "minimal", "longexposure"]
  },
  {
    id: 8,
    title: "URBAN WILDLIFE",
    date: "2023-12-02",
    description: "Documentary series on animals adapting to urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2089&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Photoshop",
    },
    aboutProject: "Urban Wildlife documents the fascinating adaptation of animal species to human-dominated landscapes. This ongoing series highlights the resilience of nature and raises questions about coexistence in increasingly urbanized worlds.",
    tags: ["wildlife", "urban", "documentary", "nature"]
  },
  {
    id: 9,
    title: "TEXTILE PATTERNS",
    date: "2024-01-18",
    description: "Close-up studies of fabric textures and weaving techniques.",
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2112&auto=format&fit=crop",
    projectDetails: {
      software: "Capture One Pro & Photoshop",
    },
    aboutProject: "Textile Patterns examines the intricate world of fabric construction, highlighting the artistry in everyday materials. Macro photography reveals the complex intersections of threads and fibers that we often overlook.",
    tags: ["textile", "macro", "pattern", "texture"]
  },
  {
    id: 10,
    title: "INDUSTRIAL SPACES",
    date: "2024-02-09",
    description: "Documentation of abandoned factories and industrial zones.",
    imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Nik Collection",
    },
    aboutProject: "Industrial Spaces explores the hauntingly beautiful decay of former manufacturing sites. The series documents these transitional spaces, capturing the tension between human creation and nature's reclamation.",
    tags: ["industrial", "abandoned", "urban", "documentary"]
  },
  {
    id: 11,
    title: "BOTANICAL STUDIES",
    date: "2024-03-14",
    description: "Minimalist compositions featuring plant forms and structures.",
    imageUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop",
    projectDetails: {
      software: "Capture One Pro & Photoshop",
    },
    aboutProject: "Botanical Studies presents plants as sculptural forms, emphasizing their architectural qualities through careful lighting and composition. The series highlights the mathematical precision and design excellence found in natural structures.",
    tags: ["botanical", "minimal", "nature", "structure"]
  },
  {
    id: 12,
    title: "STREET MOMENTS",
    date: "2024-04-05",
    description: "Candid street photography capturing fleeting human interactions.",
    imageUrl: "https://images.unsplash.com/photo-1601196723498-74c20cc21c24?q=80&w=2071&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Silver Efex Pro",
    },
    aboutProject: "Street Moments observes the small, often unnoticed interactions that make up urban life. The black and white treatment emphasizes gesture, expression, and composition while giving the images a timeless quality.",
    tags: ["street", "documentary", "human", "blackandwhite"]
  }
];
