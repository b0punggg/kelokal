export type LandingNavItem = { label: string; href: string };

export type LandingFeature = {
  title: string;
  description: string;
  href: string;
};

export type LandingHeroSlide = {
  src: string;
  alt: string;
  caption?: string;
};

/** Teks hero bertingkat (sebelum slideshow) */
export type LandingHeroIntro = {
  line1Word: string;
  line1Tagline: string;
  line2Word: string;
  line3Tagline: string;
  line3Word: string;
};

export type LandingTestimonial = {
  name: string;
  role: string;
  quote: string;
};

export type LandingPricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export type LandingFaqItem = {
  question: string;
  answer: string;
};

export type LandingNewsItem = {
  title: string;
  /** URL lengkap posting Blogspot (dipakai sebagai src iframe) */
  blogUrl: string;
};

export type LandingStatItem = {
  value: string;
  label: string;
};

export type LandingAboutUs = {
  title: string;
  description: string;
  badge: string;
  images: { src: string; alt: string }[];
};

export const landingContent = {
  brand: "Kelokal",
  tagline: "Kelola komunitas & event lokal lebih rapi.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Doodle Art", href: "#doodle-art" },
    { label: "Lomba", href: "#lomba" },
    { label: "Community Sport Day", href: "#community-sport-day" },
    { label: "About Us", href: "#about-us" },
  ] satisfies LandingNavItem[],

  hero: {
    headline: "Landing page modern untuk produk lokalmu.",
    subheadline:
      "Bangun kepercayaan dengan tampilan bersih, cepat, dan responsif. Konten mudah diganti dari satu file.",
    primaryCta: { label: "Mulai Sekarang", href: "#harga" },
    secondaryCta: { label: "Lihat Demo", href: "#fitur" },
    intro: {
      line1Word: "Explore",
      line1Tagline: "Creating experience, Building connection.",
      line2Word: "Experience",
      line3Tagline: "With us",
      line3Word: "Enjoy",
    } satisfies LandingHeroIntro,
    slides: [
      {
        src: "/slides/slides-4.jpeg",
        alt: "Hero slide 1",
      },
      {
        src: "/slides/slide-2.jpg",
        alt: "Hero slide 2",
      },
      {
        src: "/slides/slide-3.jpg",
        alt: "Hero slide 3",
      },
    ] satisfies LandingHeroSlide[],
  },

  statsBar: [
    { value: "2000+", label: "Company" },
    { value: "10+", label: "Years Exp." },
    { value: "800+", label: "Hours of Digital" },
    { value: "150M+", label: "In Tracked Revenue" },
  ] satisfies LandingStatItem[],

  aboutUs: {
    title: "Kenal lebih dekat dengan Kelokal",
    description:
      "Perjalanan ini bukan hanya tentang menjalankan proyek, tetapi tentang mengalami, memahami, dan terlibat langsung di dalamnya. Kami hadir di berbagai ruang, mulai dari workshop kecil yang intim, event komunitas yang hidup, hingga kolaborasi dengan brand dan institusi.",
    badge: "Baca Selengkapnya →",
    images: [
      { src: "/public/abtiimg2.png", alt: "About image 1" },
      { src: "/public/abtimg3.png", alt: "About image 2" },
    ],
  } satisfies LandingAboutUs,

  logos: {
    title: "Dipercaya oleh tim yang bergerak cepat",
    items: ["KomunitasA", "BrandB", "StartupC", "UMKMD", "EventE"],
  },

  features: {
    title: "DAFTAR SEKARANG",
    eventDate: "12 April 2026",
    eventLocation: "The Alana\nYogyakarta",
    countdown: {
      label: "Countdown To Kelokal Event",
      target: "2026-04-12T17:00:00+07:00", // ganti ke tanggal event asli
    },
    items: [
      {
        title: "Tenant",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://forms.gle/link-doodle-art",
      },
      {
        title: "Walking Tour",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://forms.gle/link-lomba",
      },
      {
        title: "Fun Run",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://forms.gle/link-community-sport-day",
      },
    ] satisfies LandingFeature[],
  },

  testimonials: {
    title: "Yang mereka bilang",
    subtitle: "Placeholder testimoni — tinggal ganti nama & kutipannya.",
    items: [
      {
        name: "Alya",
        role: "Founder komunitas",
        quote:
          "Tampilan landing page-nya rapi dan langsung bikin orang percaya.",
      },
      {
        name: "Rafi",
        role: "Event organizer",
        quote:
          "CTA jelas, mobile-nya enak, dan tinggal edit konten tanpa pusing.",
      },
      {
        name: "Nina",
        role: "Marketing",
        quote: "Strukturnya modular, gampang dikembangkan jadi website penuh.",
      },
    ] satisfies LandingTestimonial[],
  },

  pricing: {
    title: "Harga yang masuk akal",
    subtitle: "Mulai gratis, upgrade saat butuh lebih.",
    plans: [
      {
        name: "Starter",
        price: "Gratis",
        description: "Untuk coba-coba dan validasi ide.",
        features: [
          "1 halaman landing",
          "Konten mudah diganti",
          "Deploy mandiri",
        ],
        ctaLabel: "Pakai Starter",
      },
      {
        name: "Pro",
        price: "Rp199k/bln",
        description: "Untuk tim kecil yang mau lebih serius.",
        features: [
          "Semua di Starter",
          "Section tambahan",
          "Optimasi SEO basic",
        ],
        ctaLabel: "Pilih Pro",
        highlighted: true,
      },
      {
        name: "Business",
        price: "Custom",
        description: "Untuk kebutuhan khusus dan integrasi.",
        features: ["Desain custom", "Integrasi form/CRM", "Support prioritas"],
        ctaLabel: "Hubungi Kami",
      },
    ] satisfies LandingPricingPlan[],
  },

  news: {
    title: "News Article",
    items: [
      {
        title: "Berita 1",
        blogUrl: "https://kelokal.blogspot.com/2024/08/grojogan%20sewu.html",
      },
      {
        title: "Berita 2",
        blogUrl:
          "https://kelokal.blogspot.com/2025/01/kuliner-jogja-yang-wajib-dicoba-selain.html",
      },
      {
        title: "Berita 3",
        blogUrl: "https://kelokal.blogspot.com/2024/08/candiprambanan.html",
      },
    ] satisfies LandingNewsItem[],
  },

  faq: {
    title: "Pertanyaan yang sering muncul",
    items: [
      {
        question: "Bisa ganti warna dan font?",
        answer:
          "Bisa. Tailwind memudahkan untuk atur tema lewat class dan config.",
      },
      {
        question: "Kontennya diedit di mana?",
        answer:
          "Di `src/content/landing.ts`. Komponen mengambil data dari sana.",
      },
      {
        question: "Bisa ditambah form kontak?",
        answer:
          "Bisa. Tinggal tambah section baru dan integrasikan API/form service.",
      },
    ] satisfies LandingFaqItem[],
  },

  cta: {
    title: "Siap mulai?",
    subtitle: "Pakai template ini, ganti konten, lalu deploy.",
    button: { label: "Lihat Harga", href: "#harga" },
    note: "Tidak perlu kartu kredit untuk mulai.",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Kelokal. All rights reserved.`,
    links: [
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Kontak", href: "#faq" },
    ] satisfies LandingNavItem[],
  },
} as const;
