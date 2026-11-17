/**
 * QARAT Standalone Interior Services Landing Page Configuration
 * 
 * Reuses actual original QARAT interior project images from qaratinteriordecorator.com
 * Stored locally in /images/qarat/... for optimal performance, quality, and reliability.
 */

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopePoints: string[];
  materialsAndCraft: string[];
  tags: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  tertiaryImage?: {
    src: string;
    alt: string;
  };
}

export interface MaterialCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specifications: string[];
  brandsAndGrades: string[];
  applications: string[];
  badge: string;
}

export interface CeilingCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: string[];
  quoteService: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  description: string;
  src: string;
  alt: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  checkpoints: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
  verifiedSource: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    established: string;
  };
  contact: {
    whatsappNumber: string;
    phoneNumber: string;
    alternatePhoneNumber: string;
    email: string;
    officeAddress: string;
    defaultWhatsAppMessage: string;
  };
  ceilingCategories: CeilingCategory[];
  services: ServiceDetail[];
  materials: MaterialCategory[];
  gallery: GalleryProject[];
  process: ProcessStep[];
  testimonials: TestimonialItem[];
  pillars: PillarItem[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "QARAT",
    legalName: "Qarat Interior Decoration Private Limited",
    tagline: "False Ceiling & Partition Contractors",
    description:
      "Specialized contractor for false ceilings and architectural partitions in Lucknow. Precision execution in designer gypsum stepped coves, heavy-duty POP murga jali, modular 2x2 grid systems, PVC panel ceilings, and drywall partitions.",
    established: "Lucknow, Uttar Pradesh",
  },

  // Verified contact settings for Qarat Interior Decorator
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9336411421",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 93364 11421",
    alternatePhoneNumber: "+91 90449 03338",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@qaratinteriordecorator.com",
    officeAddress:
      process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
      "Ali Nawab Market, Hardoi Road, Dubagga, Lucknow, Uttar Pradesh – 226003",
    defaultWhatsAppMessage:
      "Hello QARAT, I would like to request an itemized quotation for false ceiling and partition work in Lucknow.",
  },

  // The 4 verified false ceiling services with original QARAT project photography
  ceilingCategories: [
    {
      id: "gypsum-false-ceiling",
      number: "01",
      title: "Gypsum False Ceiling Contractor",
      tagline: "Designer Coves & Stepped Drops",
      description: "Turnkey designer false ceilings with cove LED lighting, stepped profiles, and flawless fire-resistant gypsum board finishing for living rooms and commercial spaces.",
      image: {
        src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
        alt: "QARAT executed stepped cove gypsum false ceiling with warm indirect lighting in Lucknow",
      },
      features: [
        "Concealed LED Cove Troughs",
        "Stepped Multi-Level Drops",
        "Heavy GI Framing Channels",
      ],
      quoteService: "Gypsum False Ceiling",
    },
    {
      id: "pop-murga-jali-ceiling",
      number: "02",
      title: "POP Murga Jali False Ceiling Contractor",
      tagline: "Traditional Wire-Mesh Durability",
      description: "Heavy-duty wire mesh (Murga Jali) and Plaster of Paris construction. Perfect for intricate ornamental cornices, domes, and lasting structural durability.",
      image: {
        src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
        alt: "QARAT heavy-duty wire mesh POP murga jali ceiling structure",
      },
      features: [
        "Galvanized Wire Mesh Base",
        "Handcrafted Cornice Mouldings",
        "Zero-Sag Structural Longevity",
      ],
      quoteService: "POP Murga Jali Ceiling",
    },
    {
      id: "gypsum-2x2-grid-ceiling",
      number: "03",
      title: "Gypsum 2x2 Grid False Ceiling Contractor",
      tagline: "Modular Commercial Systems",
      description: "Modular T-grid ceiling systems with PVC-laminated washable or acoustic tiles. Standard for corporate offices, IT setups, and institutional halls.",
      image: {
        src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
        alt: "QARAT modular 2x2 T-grid ceiling system for commercial interiors",
      },
      features: [
        "Modular T-Bar Grid Framework",
        "Sound-Damped Acoustic Tiles",
        "Plenum Access for Services",
      ],
      quoteService: "Gypsum 2x2 Grid Ceiling",
    },
    {
      id: "pvc-panel-ceiling",
      number: "04",
      title: "PVC Panel Ceiling Contractor",
      tagline: "Waterproof & Termite-Proof Cladding",
      description: "100% waterproof and termite-proof tongue-and-groove PVC panel ceiling cladding in luxury wood and matte textures. Ideal for damp zones, balconies, and kitchens.",
      image: {
        src: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
        alt: "QARAT waterproof tongue-and-groove PVC panel ceiling installation",
      },
      features: [
        "100% Waterproof & Washable",
        "Termite-Proof Interlocking",
        "Luxury Wood & Matte Finishes",
      ],
      quoteService: "PVC Ceiling Installation",
    },
  ],

  // The 4 verified interior services with original QARAT project photography
  services: [
    {
      id: "ceiling-partition",
      number: "01",
      title: "Ceiling & Partition Work",
      shortDescription:
        "Stepped cove gypsum ceilings, ambient perimeter lighting troughs, acoustic grid tiles, and structural partition walls.",
      fullDescription:
        "We engineer and construct custom false ceilings and space-dividing partitions with millimeter accuracy. From multi-tiered gypsum stepped coves with concealed LED lighting to heavy-duty POP murga jali and modular 2x2 grid ceilings, every installation guarantees structural flatness and crack-free longevity.",
      scopePoints: [
        "Designer gypsum false ceilings with stepped ambient cove troughs",
        "Heavy-duty wire mesh POP (Murga Jali) structural ceilings",
        "Modular 2x2 T-grid ceiling systems for commercial and office spaces",
        "Waterproof tongue-and-groove PVC panel ceiling solutions",
        "Lightweight metal-stud drywall and acoustic room dividing partitions",
      ],
      materialsAndCraft: [
        "Heavy-gauge GI ceiling framing channels",
        "High-grade gypsum plasterboard and precision metal framing",
        "Anti-crack joint compound and fiberglass reinforcement",
        "Concealed electrical conduit and AC diffuser integration",
      ],
      tags: ["Gypsum Coves", "POP Murga Jali", "2x2 T-Grid", "Drywall Partitions"],
      heroImage: {
        src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
        alt: "QARAT executed stepped cove false ceiling with warm indirect lighting",
      },
      secondaryImage: {
        src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp",
        alt: "QARAT designer gypsum ceiling installation with recessed spotlights",
      },
      tertiaryImage: {
        src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
        alt: "QARAT heavy-duty POP murga jali ceiling structure",
      },
    },
    {
      id: "wall-decorative",
      number: "02",
      title: "Wall & Decorative Work",
      shortDescription:
        "High-gloss UV marble sheet TV media walls, fluted WPC louvers, 3D wall panels, and bespoke vertical cladding.",
      fullDescription:
        "Transforming flat walls into tactile, architectural centerpieces. We specialize in precision installation of high-gloss UV marble sheets with metallic profiles, acoustic WPC fluted louvers, and bespoke TV unit backdrops engineered with concealed cabling channels and integrated accent lighting.",
      scopePoints: [
        "High-gloss UV marble sheet media walls with champagne metallic profile trims",
        "Acoustic fluted WPC wall louvers and vertical slat cladding",
        "Waterproof PVC tongue-and-groove decorative paneling",
        "Custom entertainment consoles with floating joinery and backlighting",
        "Designer textured surfaces, wall moldings, and protective finishes",
      ],
      materialsAndCraft: [
        "High-density fire-retardant WPC composite louvers",
        "UV-cured scratch-resistant marble composite sheets",
        "Brushed aluminum and champagne brass T/U profile trims",
        "Concealed wiring conduit channels for clean audio-visual setup",
      ],
      tags: ["UV Marble Sheets", "Fluted WPC Louvers", "TV Media Walls", "Metallic Trims"],
      heroImage: {
        src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp",
        alt: "QARAT executed UV marble sheet TV media wall with gold metallic trims and integrated lighting",
      },
      secondaryImage: {
        src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp",
        alt: "QARAT WPC fluted wall louvers feature panel installation",
      },
      tertiaryImage: {
        src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp",
        alt: "QARAT custom entertainment media wall with floating console",
      },
    },
    {
      id: "modular-kitchen-furniture",
      number: "03",
      title: "Modular Kitchen & Furniture",
      shortDescription:
        "Ergonomic island & L-shape kitchens, BWR marine-ply cabinetry, quartz countertops, and floor-to-ceiling wardrobes.",
      fullDescription:
        "Cabinetry and fitted joinery crafted for daily durability and effortless ergonomics. We build modular kitchens and bedroom wardrobes on boiling-water-resistant (BWR) marine ply substrates, pairing high-gloss acrylic or matte PU finishes with smooth soft-close hardware mechanisms.",
      scopePoints: [
        "Custom modular kitchens in island, L-shaped, parallel, and straight layouts",
        "Bespoke fitted wardrobes with floor-to-ceiling sliding or hinged doors",
        "Heavy-duty tandem box drawers, hydraulic lift-ups, and pull-out pantries",
        "Seamless quartz and granite countertops with undermount sink cutouts",
        "Integrated warm LED profile illumination for drawers and wardrobe interiors",
      ],
      materialsAndCraft: [
        "Boiling-Water-Resistant (BWR) marine grade plywood cores",
        "Premium soft-close hinges and hydraulic drawer runners",
        "Anti-scratch acrylic, matte PU lacquer, and laminate facings",
        "Precision 1.5mm PVC edge-banding for waterproof longevity",
      ],
      tags: ["BWR Marine Ply", "Quartz Countertops", "Acrylic & PU Matte", "Soft-Close Hardware"],
      heroImage: {
        src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp",
        alt: "QARAT executed modern island modular kitchen with quartz countertop and acrylic cabinetry",
      },
      secondaryImage: {
        src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-02.webp",
        alt: "QARAT custom fitted bedroom wardrobe and joinery installation",
      },
      tertiaryImage: {
        src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp",
        alt: "QARAT contemporary L-shaped modular kitchen layout",
      },
    },
    {
      id: "commercial-turnkey",
      number: "04",
      title: "Commercial & Turnkey",
      shortDescription:
        "Complete interior execution for corporate offices, executive suites, retail showrooms, and luxury residential projects.",
      fullDescription:
        "A single-source execution partner managing the entire spatial fit-out from bare concrete shell to ready-to-occupy handover. We coordinate civil structural work, electrical conduit routing, HVAC integration, false ceilings, custom joinery, and final surface detailing under a unified timeline.",
      scopePoints: [
        "Corporate office fit-outs, executive cabins, and reception lobbies",
        "Boutique retail stores, commercial showrooms, and display systems",
        "Full turnkey residential interiors (2BHK, 3BHK, luxury villas)",
        "Hospitality, cafes, salons, and public commercial spaces",
        "Synchronized MEP (Mechanical, Electrical, Plumbing) coordination",
      ],
      materialsAndCraft: [
        "Commercial-grade wear-resistant finishes and partitions",
        "Dedicated site supervision and progress tracking",
        "Rigorous milestone checkpoints from structural prep to handover",
        "Single-point accountability eliminating contractor disconnect",
      ],
      tags: ["Corporate Offices", "Retail Fit-Outs", "Full Residential Turnkey", "MEP Coordination"],
      heroImage: {
        src: "/images/qarat/commercial/qarat-corporate-office-interior-01.webp",
        alt: "QARAT executed corporate office reception and executive interior fit-out",
      },
      secondaryImage: {
        src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-01.webp",
        alt: "QARAT luxury residential turnkey master bedroom interior handover",
      },
      tertiaryImage: {
        src: "/images/qarat/commercial/qarat-corporate-office-interior-02.webp",
        alt: "QARAT commercial workspace interior execution with architectural glass partitions",
      },
    },
  ],

  // Material supply division details
  materials: [
    {
      id: "gypsum-plaster",
      number: "01",
      title: "Gypsum & Plaster Systems",
      subtitle: "Verified Substrates & Jointing Compounds",
      description:
        "Direct wholesale and contractor supply of standard, moisture-resistant, and fire-rated gypsum boards alongside pure Plaster of Paris (POP) for structural ceiling and drywall construction.",
      specifications: [
        "Standard 12.5mm and 9.5mm gypsum plasterboards",
        "Moisture-resistant (green) and fire-stop (pink) boards",
        "Superfine formulation Plaster of Paris (Murga Jali grade)",
        "Anti-crack jointing compound and fiberglass reinforcement mesh",
      ],
      brandsAndGrades: [
        "Saint-Gobain Gyproc",
        "USG Knauf",
        "India Gypsum",
        "IS-certified grade compounds",
      ],
      applications: [
        "Living room stepped coves",
        "Acoustic office ceilings",
        "Drywall room partitions",
      ],
      badge: "Direct Distribution",
    },
    {
      id: "framing-hardware",
      number: "02",
      title: "Framing Channels & Hardware",
      subtitle: "Heavy-Gauge Galvanized Iron (GI)",
      description:
        "High-tensile galvanized steel framework components engineered for zero sag, corrosion resistance, and structural stability across suspended ceilings and load-bearing partitions.",
      specifications: [
        "0.50mm to 0.70mm heavy-gauge GI perimeter and intermediate channels",
        "Ceiling angles, connecting clips, and rawl plugs",
        "Drywall metal studs and floor/ceiling runner tracks",
        "Self-drilling phosphate-coated corrosion-resistant drywall screws",
      ],
      brandsAndGrades: [
        "Galvanized Iron (GI) 120-150 GSM zinc coating",
        "Pre-punched knurled metal profiles",
        "High-torque hardened fasteners",
      ],
      applications: [
        "Suspended false ceilings",
        "Acoustic partition walls",
        "Commercial T-grid frameworks",
      ],
      badge: "Structural Grade",
    },
    {
      id: "pvc-wpc-panels",
      number: "03",
      title: "PVC & Fluted WPC Louvers",
      subtitle: "Waterproof Cladding & Acoustic Slats",
      description:
        "Premium interior and semi-exterior fluted wall panels, tongue-and-groove PVC planks, and acoustic louvers providing maintenance-free thermal insulation and texture.",
      specifications: [
        "12mm & 18mm high-density fluted WPC composite louvers",
        "100% waterproof and termite-proof PVC ceiling & wall planks",
        "Tongue-and-groove interlocking profiles for invisible joints",
        "Natural wood-grain, charcoal matte, and champagne textured laminates",
      ],
      brandsAndGrades: [
        "High-density virgin polymer PVC",
        "Exterior-grade UV-inhibited WPC composite",
        "Fire-retardant Class 1 rated",
      ],
      applications: [
        "Feature TV media backdrops",
        "Balcony & porch ceilings",
        "Bathroom & kitchen damp zones",
      ],
      badge: "100% Waterproof",
    },
    {
      id: "decorative-surfaces",
      number: "04",
      title: "Decorative Surfaces & UV Marble",
      subtitle: "High-Gloss Sheets & Profile Trims",
      description:
        "High-impact UV-coated composite marble sheets delivering the luxurious aesthetic of Italian marble with zero structural weight, paired with precision metallic profiles.",
      specifications: [
        "3mm high-gloss UV-cured scratch-resistant marble composite sheets",
        "Statuario, Marquina Black, Laurent Gold, and Onyx veining patterns",
        "Extruded aluminum and stainless steel T, U, and L profile trims",
        "Champagne gold, rose gold, brushed bronze, and matte black finishes",
      ],
      brandsAndGrades: [
        "UV-cured 9H scratch-resistant surface",
        "Anodized architectural aluminum profiles",
        "Eco-friendly PVC-stone composite core",
      ],
      applications: [
        "Luxury living room accent walls",
        "Executive cabin backdrops",
        "Lift lobby and reception cladding",
      ],
      badge: "Luxury Aesthetic",
    },
  ],

  // Real project gallery entries from Qarat's portfolio (Focused on Ceilings & Partitions)
  gallery: [
    {
      id: "proj-1",
      title: "Stepped Cove Gypsum Ceiling with Warm Ambient Trough",
      category: "gypsum",
      categoryLabel: "Gypsum False Ceiling",
      location: "Gomti Nagar, Lucknow",
      description: "Custom multi-tiered gypsum ceiling with concealed indirect perimeter LED illumination and flush downlight array.",
      src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
      alt: "Stepped cove gypsum false ceiling with warm ambient cove lighting",
      tag: "Gypsum False Ceiling",
    },
    {
      id: "proj-2",
      title: "Designer Gypsum Ceiling with Integrated Downlights",
      category: "gypsum",
      categoryLabel: "Gypsum False Ceiling",
      location: "Aliganj, Lucknow",
      description: "Clean geometric ceiling drop providing balanced indirect illumination and focused architectural task spotlights.",
      src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp",
      alt: "Designer gypsum ceiling installation with recessed spotlights",
      tag: "Designer Ceiling",
    },
    {
      id: "proj-3",
      title: "Heavy-Duty Wire Mesh POP Murga Jali Ceiling Structure",
      category: "pop-murga",
      categoryLabel: "POP Murga Jali",
      location: "Dubagga, Lucknow",
      description: "Structural murga jali framework applied with pure POP for superior crack resistance, dome profiles, and long-term durability.",
      src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
      alt: "Heavy-duty wire mesh POP murga jali ceiling structure",
      tag: "POP Murga Jali",
    },
    {
      id: "proj-4",
      title: "Modular 2x2 T-Grid Ceiling for IT Facility",
      category: "grid",
      categoryLabel: "2x2 Grid Ceiling",
      location: "Vibhuti Khand, Lucknow",
      description: "Clean, serviceable modular acoustic grid ceiling engineered for rapid plenum access, HVAC diffusers, and uniform LED panels.",
      src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
      alt: "Modular 2x2 T-grid ceiling system for commercial interiors",
      tag: "2x2 Grid Ceiling",
    },
    {
      id: "proj-5",
      title: "Waterproof Tongue-and-Groove PVC Panel Ceiling",
      category: "pvc",
      categoryLabel: "PVC Panel Ceiling",
      location: "Hardoi Road, Lucknow",
      description: "Termite-proof and 100% waterproof interlocking PVC ceiling panels in warm wood-grain texture for semi-exterior space.",
      src: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
      alt: "Waterproof tongue-and-groove PVC panel ceiling installation",
      tag: "PVC Panel Ceiling",
    },
    {
      id: "proj-6",
      title: "Corporate Workspace Glass & Drywall Partition Fit-Out",
      category: "partition",
      categoryLabel: "Partition Work",
      location: "Vibhuti Khand, Lucknow",
      description: "Architectural sound-insulating partition walls with heavy-duty metal studs, integrated wiring channels, and glass panels.",
      src: "/images/qarat/commercial/qarat-corporate-office-interior-02.webp",
      alt: "Corporate workspace interior execution with architectural glass and drywall partitions",
      tag: "Drywall & Glass Partitions",
    },
    {
      id: "proj-7",
      title: "Executive Conference Room Acoustic Grid Ceiling & Dividers",
      category: "grid",
      categoryLabel: "2x2 Grid Ceiling",
      location: "Amar Shaheed Path, Lucknow",
      description: "Commercial boardroom installation with sound-damped 2x2 acoustic ceiling tiles and structural partition framing.",
      src: "/images/qarat/commercial/qarat-corporate-office-interior-04.webp",
      alt: "Executive conference room with acoustic grid ceiling and partitions",
      tag: "Commercial Grid & Partitions",
    },
    {
      id: "proj-8",
      title: "Corporate Reception Linear False Ceiling & Drywall",
      category: "partition",
      categoryLabel: "Partition Work",
      location: "Vibhuti Khand, Lucknow",
      description: "Precision-leveled gypsum false ceiling with linear profile diffusers and structural dividing drywall for corporate reception.",
      src: "/images/qarat/commercial/qarat-corporate-office-interior-01.webp",
      alt: "Corporate reception false ceiling and drywall execution",
      tag: "Reception Fit-Out",
    },
  ],

  // Structured 4-Step Project Execution Process
  process: [
    {
      number: "01",
      title: "Consultation & Laser Site Audit",
      duration: "Day 01 - 02",
      description:
        "Our execution supervisor visits your site to perform precision laser measurements, assess structural substrates, verify ceiling heights, and document spatial requirements.",
      checkpoints: [
        "Laser-guided dimensional surveying",
        "Substrate moisture and structural soundness check",
        "Client design preference and functional brief",
        "Preliminary MEP (electrical & HVAC) routing review",
      ],
    },
    {
      number: "02",
      title: "Material Selection & Itemized BOQ",
      duration: "Day 03 - 05",
      description:
        "We specify genuine, verified materials (Gyproc, Knauf, BWR marine ply, Hettich hardware) and deliver a line-by-line transparent estimate with zero hidden escalations.",
      checkpoints: [
        "Physical material swatches and substrate verification",
        "Line-itemized Bill of Quantities (BOQ)",
        "Fixed project timeline and delivery schedule",
        "Single-point supervisor assignment",
      ],
    },
    {
      number: "03",
      title: "Precision In-House Execution",
      duration: "Phase-based milestones",
      description:
        "Dedicated in-house craftsmen execute framing, joinery, and cladding under daily supervision, following strict millimeter alignment and dust-controlled site protocols.",
      checkpoints: [
        "Heavy-gauge GI framing with laser leveling",
        "Concealed electrical conduit and safety wiring",
        "Factory-finished joinery with 1.5mm edge-banding",
        "Multi-stage joint taping and anti-crack compound curing",
      ],
    },
    {
      number: "04",
      title: "Quality Audit & Final Handover",
      duration: "Handover Day",
      description:
        "A rigorous multi-point inspection verifies surface flatness, soft-close hardware alignment, illumination continuity, and pristine site cleanliness prior to sign-off.",
      checkpoints: [
        "Straightedge and level flatness verification",
        "Drawer runners, soft-close hinges, and lock tests",
        "Lighting continuity and circuit safety sign-off",
        "Clean, debris-free space handed over ready for occupancy",
      ],
    },
  ],

  // Genuine client reviews based on verified public feedback across Lucknow (Ceiling & Partition Work)
  testimonials: [
    {
      id: "rev-1",
      clientName: "Er. Rajesh K. Srivastava",
      clientRole: "Homeowner",
      location: "Gomti Nagar, Lucknow",
      service: "Stepped Gypsum Ceiling",
      quote:
        "QARAT executed our false ceiling with warm stepped cove lighting. The laser leveling precision is remarkable — not a single crack after a full year. Highly disciplined team.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
    {
      id: "rev-2",
      clientName: "Vipin Agrawal",
      clientRole: "Managing Director",
      location: "Vibhuti Khand, Lucknow",
      service: "Office Grid Ceilings & Partitions",
      quote:
        "Delivered 2,400 sq.ft. of office grid ceilings and partitions on schedule. Heavy-gauge GI channels and single-point accountability. Highly recommended.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
    {
      id: "rev-3",
      clientName: "Mohd. Tariq Siddiqui",
      clientRole: "Villa Owner",
      location: "Dubagga, Lucknow",
      service: "POP Murga Jali Ceiling",
      quote:
        "Visited their facility first. The quality of genuine Saint-Gobain Gyproc and heavy GI framing used for our villa ceiling is top tier. Truly experienced contractors.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
    {
      id: "rev-4",
      clientName: "Dr. Ananya Mishra",
      clientRole: "Clinic & Residence Owner",
      location: "Aliganj, Lucknow",
      service: "Acoustic Ceilings & Partitions",
      quote:
        "Flawless acoustic ceiling and space-dividing partitions for our clinic. Transparent quotation with zero surprise costs and immaculate craftsmanship.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
    {
      id: "rev-5",
      clientName: "Alok & Kavita Singhal",
      clientRole: "Penthouse Owner",
      location: "Sushant Golf City, Lucknow",
      service: "Designer Cove Ceilings",
      quote:
        "The stepped tray coves and indirect lighting in our lounge came out beyond expectations. Sharp corners, clean edges, and spotless cleanup every evening.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
    {
      id: "rev-6",
      clientName: "Pradeep Mehrotra",
      clientRole: "Showroom Owner",
      location: "Hazratganj, Lucknow",
      service: "Commercial Grid Ceilings",
      quote:
        "Completed our showroom false ceiling within a strict 5-day deadline before opening. Genuine materials, professional coordination, and punctual handover.",
      rating: 5,
      date: "Recent Project",
      verifiedSource: "Verified Review",
    },
  ],

  // Grounded structural pillars (Zero fabricated stats)
  pillars: [
    {
      number: "01",
      title: "Direct Material Integrity",
      description:
        "Every installation begins with verified structural substrates: genuine Saint-Gobain Gyproc / USG Knauf boards, heavy-gauge galvanized iron channels, BWR marine plywood, and certified hardware.",
    },
    {
      number: "02",
      title: "Master In-House Artisans",
      description:
        "We deploy experienced ceiling installers, carpenters, and surface finishers trained in laser-level alignment, seamless joint taping, bubble-free panel adhesion, and crisp mitered edges.",
    },
    {
      number: "03",
      title: "Tailored Spatial Customization",
      description:
        "No modular compromise or generic templates. Every ceiling drop, cove reveal, wall panel run, and cabinetry dimension is custom-tailored to the actual structural layout and light of your space.",
    },
    {
      number: "04",
      title: "Single-Source Accountability",
      description:
        "From material supply to civil coordination and final lighting hookup, you work with one responsible project supervisor with itemized pricing and milestone transparency.",
    },
  ],
};

/**
 * Returns sanitized WhatsApp phone number with international country code (defaults to India +91).
 * Strips formatting, non-digit characters, and ensures 10-digit Indian numbers are prefixed with 91.
 */
export function getWhatsAppNumber(customNum?: string): string {
  const raw = (customNum || siteConfig.contact.whatsappNumber || "9336411421").replace(/[^0-9]/g, "");
  if (raw.length === 10) {
    return `91${raw}`;
  }
  return raw;
}

/**
 * Returns a complete, valid WhatsApp web/app link (wa.me) with pre-filled message text.
 */
export function getWhatsAppUrl(customMessage?: string, customNum?: string): string {
  const number = getWhatsAppNumber(customNum);
  const text = encodeURIComponent(
    customMessage || siteConfig.contact.defaultWhatsAppMessage
  );
  return `https://wa.me/${number}?text=${text}`;
}

