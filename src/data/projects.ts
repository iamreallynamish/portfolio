
import p1img1 from './images/project1/p1img1.jpg';
import p1img2 from './images/project1/p1img2.jpg';

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  date: string;
  description: string;
  details: string;
  categories: string[];
  software: string;
  camera?: {
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
    focalLength?: string;
  };
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Cigarette DayDreams",
    thumbnail:p1img1,
    images: [
      p1img1,
      p1img2
    ],
    date: "March 2025",
    description: "Modern identity system for an innovative tech startup",
    details: "A man in a suit sits on a burning couch in an open field, representing inner turmoil or transformation. The contrast between fire and calm surroundings makes it visually striking. The text 'burn it up' appears on the couch, emphasizing destruction or release. A cigarette box nearby adds to the theme of recklessness and contemplation. The 'Cigarette Daydreams' reference enhances the nostalgic, reflective mood.",
    categories: ["Branding", "Identity", "Logo Design"],
    software: "Adobe Photoshop 2025",
    camera: {
      aperture: "f/1.5",
      shutterSpeed: "1/200s",
      iso: "100",
      focalLength: "24mm"
    }
  },
  {
    id: "02",
    title: "Editorial Layout",
    thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543002663-34f4b3f7405e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543002592-9d3b14e5c834?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "March 2023",
    description: "Magazine design exploring minimalist aesthetics",
    details: "Developed a clean and sophisticated editorial design for a print and digital magazine. The project focused on creating a harmonious balance between typography, whitespace, and visual elements to enhance readability while maintaining a strong aesthetic appeal. Special attention was paid to grid systems and typographic hierarchy.",
    categories: ["Editorial", "Print", "Typography"],
    software: "Adobe InDesign, Adobe Photoshop, Adobe Illustrator",
    camera: {
      aperture: "f/1.8",
      shutterSpeed: "1/125s",
      iso: "200",
      focalLength: "35mm"
    }
  },
  {
    id: "03",
    title: "Packaging Design",
    thumbnail: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1636622433557-f966ca9c8456?q=80&w=2032&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1636622433578-03af0c0f2e38?q=80&w=2032&auto=format&fit=crop"
    ],
    date: "June 2023",
    description: "Sustainable packaging for premium cosmetics",
    details: "Designed eco-friendly packaging for a premium cosmetic brand that balances sustainability with luxury aesthetics. The design incorporates recycled materials with a sophisticated finish, showcasing how sustainable choices can enhance rather than compromise brand positioning. The project included designing the primary packaging, outer box, and supporting materials.",
    categories: ["Packaging", "Sustainable Design", "Luxury"],
    software: "Adobe Dimension, Adobe Illustrator, Blender",
    camera: {
      aperture: "f/2.0",
      shutterSpeed: "1/100s",
      iso: "400",
      focalLength: "50mm"
    }
  },
  {
    id: "04",
    title: "UI/UX Design System",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "August 2023",
    description: "Comprehensive design system for a finance app",
    details: "Created a scalable design system for a financial technology application that improves user experience while maintaining brand consistency. The system includes component libraries, interaction patterns, and accessibility guidelines. The project involved extensive user research and testing to ensure the design solutions addressed real user needs and pain points.",
    categories: ["UI/UX", "Design System", "Digital"],
    software: "Figma, Principle, Adobe XD",
    camera: {
      aperture: "f/2.8",
      shutterSpeed: "1/60s",
      iso: "800",
      focalLength: "28mm"
    }
  },
  {
    id: "05",
    title: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745168-4894a8c4934f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-b2a84d2dbf17?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "October 2023",
    description: "Animated explainer video for tech product",
    details: "Developed concept, storyboard, and animation for a product explainer video that simplifies complex technological concepts. The animation style uses minimalist design elements with strategic motion to guide viewer attention and enhance understanding. The project required close collaboration with copywriters to align visual storytelling with verbal messaging.",
    categories: ["Motion Graphics", "Animation", "Explainer"],
    software: "Adobe After Effects, Cinema 4D, Adobe Premiere Pro",
    camera: {
      aperture: "f/1.4",
      shutterSpeed: "1/250s",
      iso: "100",
      focalLength: "20mm"
    }
  },
  {
    id: "06",
    title: "Website Redesign",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "December 2023",
    description: "Modern, responsive website for architecture firm",
    details: "Redesigned the online presence for a leading architecture firm, focusing on creating an immersive digital showcase for their portfolio. The website features a minimalist design with thoughtful interactions and transitions that enhance the user experience without distracting from the architectural work. The responsive design ensures optimal viewing across all devices.",
    categories: ["Web Design", "Responsive", "Portfolio"],
    software: "Figma, VS Code, Webflow",
    camera: {
      aperture: "f/2.5",
      shutterSpeed: "1/125s",
      iso: "200",
      focalLength: "35mm"
    }
  }
];
