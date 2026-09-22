// Tout le contenu texte et les chemins d'images/vidéos du presskit sont
// centralisés ici. Modifiez ce fichier pour changer les textes, chiffres,
// liens, etc. sans avoir à toucher aux composants React.
//
// ⚠️ Champs marqués PLACEHOLDER : à remplacer par les vraies infos de Julia.

export const brand = {
  name: "Julia",
  tagline: "Créatrice de contenu & UGC",
};

export const seo = {
  description:
    "Presskit de Julia, créatrice de contenu & UGC polyvalente — beauté, mode, lifestyle, food, voyage — basée à Paris et en région parisienne.",
};

export const hero = {
  video: "/assets/hero.mp4",
  poster: "/assets/hero-poster.jpg",
  tagline: "Créatrice de contenu & UGC — Paris & région parisienne",
  description:
    "Véritable couteau suisse, la polyvalence de mes centres d'intérêt me permet de partager et de faire jaillir le plaisir de la découverte : des idées, des sorties, mais surtout des expériences.",
  ctas: [
    { label: "Voir le portfolio", href: "#portfolio", variant: "primary" },
    { label: "Contact", href: "#contact", variant: "ghost" },
  ],
};

export const socialLinks = {
  instagram: {
    url: "https://www.instagram.com/_julia.elina",
    label: "Instagram — @_julia.elina",
  },
  tiktok: {
    url: "https://www.tiktok.com/@juliaelina_mum",
    label: "TikTok — @juliaelina_mum",
  },
  email: {
    url: "mailto:Julia.ugc.pro@gmail.com",
    label: "Julia.ugc.pro@gmail.com",
    address: "Julia.ugc.pro@gmail.com",
  },
};

export const stats = [
  { value: "7 380", label: "Abonnés\nsur TikTok" },
  { value: "11,5%", label: "Taux d'engagement\n(sept. 2026)" },
  { value: "5 univers", label: "Beauté, mode, lifestyle,\nfood, voyage", small: true },
];

export const bio = {
  eyebrow: "Mon parcours",
  title: "De la copine qui filme tout à créatrice de contenu",
  photo: { src: "/assets/bio.jpg", alt: "Julia, créatrice de contenu & UGC" },
  paragraphs: [
    "J'ai toujours été la copine qui « filme tout », tout le temps : immortaliser les souvenirs a toujours fait partie de moi.",
    "Recommander des lieux, des produits m'a fait connaître le milieu de la création de contenu, et j'ai décidé d'y prendre ma place. Je me suis élargie en passant par des start-up, puis en évoluant avec des marques plus connues.",
    "Aujourd'hui, je touche différents univers — toujours porté par mon naturel.",
  ],
  signature: "Julia",
};

export const quote = {
  text: "Une approche authentique, une pointe d'humour et une bonne dose de proximité — dans un smoothie de créativité.",
};

export const universe = {
  eyebrow: "Univers",
  title: "Des contenus polyvalents",
  intro:
    "Beauté, mode, lifestyle, food, voyage… je navigue entre plusieurs univers, toujours avec la même envie : partager des expériences plutôt que de simples publications.",
  items: [
    { label: "Beauté" },
    { label: "Mode" },
    { label: "Lifestyle" },
    { label: "Food" },
    { label: "Voyage" },
  ],
};

// Pas de fichiers logo fournis pour l'instant : affichés en typographie.
// Pour passer en vrais logos, déposer les fichiers dans public/assets/brands/
// puis ajouter un champ `logo` à chaque entrée et adapter components/Brands.tsx.
export const brands = {
  eyebrow: "Références",
  title: "Elles m'ont fait confiance",
  items: [
    "Garnier",
    "Lustucru",
    "L'Oréal",
    "Pacha",
    "NYX",
    "Dr Pepper",
    "CeraVe",
    "Conforama",
    "Mixa",
    "Fleury Michon",
    "La Roche-Posay",
    "Pranarôm",
  ],
};

export const portfolio = {
  eyebrow: "Portfolio",
  title: "Exemples de contenu",
  intro: "Quelques extraits vidéo, format vertical, prêts pour Reels & TikTok.",
  items: [
    {
      video: "/assets/portfolio-1.mp4",
      poster: "/assets/portfolio-1-poster.jpg",
      // PLACEHOLDER — préciser la marque/le contexte de cet extrait si besoin.
      alt: "Extrait vidéo UGC réalisé par Julia",
    },
    {
      video: "/assets/portfolio-2.mp4",
      poster: "/assets/portfolio-2-poster.jpg",
      alt: "Extrait vidéo UGC réalisé par Julia",
    },
    {
      video: "/assets/portfolio-3.mp4",
      poster: "/assets/portfolio-3-poster.jpg",
      alt: "Extrait vidéo UGC réalisé par Julia",
    },
    {
      video: "/assets/portfolio-4.mp4",
      poster: "/assets/portfolio-4-poster.jpg",
      alt: "Extrait vidéo UGC réalisé par Julia",
    },
  ],
};

export const contact = {
  eyebrow: "Collaborations & contact",
  title: "Parlons de votre prochaine collab",
  description:
    "Presse, collaborations, partenariats de marque : je suis ouverte aux échanges. Retrouvez-moi sur les réseaux ou écrivez-moi directement.",
  photo: {
    src: "/assets/contact.jpg",
    alt: "Julia, créatrice de contenu & UGC",
  },
};

// Utilisé à la fois par le header (desktop + mobile) et le footer.
export const navLinks = [
  { label: "Parcours", href: "#parcours" },
  { label: "Univers", href: "#univers" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
