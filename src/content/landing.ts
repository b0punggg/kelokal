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
  /** URL lengkap posting Blogspot (dibuka saat klik) */
  blogUrl: string;
  /** Cover image untuk card news */
  coverSrc: string;
};

export type LandingStatItem = {
  value: string;
  label: string;
};

export type LandingAboutUs = {
  title: string;
  descriptionShort: string;
  descriptionLong: string[];
  cardText: string[];
  cardBullets: string[];
  cardTextAfterBullets: string[];
  badge: string;
  images: { src: string; alt: string }[];
};

export type LandingFooter = {
  brand: string;
  description: string;
  socials: { label: string; href: string }[];
  extraLinks: LandingNavItem[];
  contact: {
    addressLines: string[];
    email: string;
    phone: string;
  };
  copyright: string;
};

export const landingContent = {
  brand: "Kelokal",
  tagline: "Kelola komunitas & event lokal lebih rapi.",
  nav: [
    { label: "Home", href: "/home" },
    { label: "Services", href: "/#services" },
    { label: "News", href: "/#news" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/#contact" },
  ] satisfies LandingNavItem[],

  hero: {
    headline: "Landing page modern untuk produk lokalmu.",
    subheadline:
      "Bangun kepercayaan dengan tampilan bersih, cepat, dan responsif. Konten mudah diganti dari satu file.",
    primaryCta: { label: "Mulai Sekarang", href: "#harga" },
    secondaryCta: { label: "Lihat Demo", href: "#fitur" },
    intro: {
      line1Word: "Explore",
      line1Tagline: "Creating experience",
      line2Word: "Experience",
      line3Tagline: "Building connection",
      line3Word: "Enjoy",
    } satisfies LandingHeroIntro,
    slides: [
      {
        src: "/slides/slides-4.jpeg",
        alt: "Hero slide 1",
      },
      {
        src: "/slides/sld1.png",
        alt: "Hero slide 2",
      },
      {
        src: "/slides/sld2.png",
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
    descriptionShort:
      "Perjalanan ini bukan hanya tentang menjalankan proyek, tetapi tentang mengalami, memahami, dan terlibat langsung di dalamnya.",
    descriptionLong: [
      "Selama lebih dari 8 tahun, Kelokal tumbuh dari sebuah inisiatif sederhana menjadi sebuah perjalanan panjang di dunia hospitality, pariwisata, dan industri kreatif. Perjalanan ini bukan hanya tentang menjalankan proyek, tetapi tentang mengalami, memahami, dan terlibat langsung di dalamnya.",
      "Kami hadir di berbagai ruang, mulai dari workshop kecil yang intim, event komunitas yang hidup, hingga kolaborasi dengan brand dan institusi.",
      "Kami belajar satu hal penting: setiap pengalaman memiliki cerita, dan setiap cerita memiliki kekuatan untuk menghubungkan.",
    ],
    cardText: [
      "Selama 8 tahun ini, kami tidak hanya bekerja di balik layar, Kami berada di lapangan, berinteraksi dengan manusia, memahami perilaku audiens, dan merasakan langsung dinamika sebuah pengalaman. Dari sinilah Kelokal berkembang, bukan hanya sebagai penyelenggara kegiatan, tetapi sebagai pihak yang mengerti bagaimana sebuah pengalaman dibentuk dan dirasakan.",
      "Pengalaman inilah yang menjadi fondasi kami hari ini. Melalui perjalanan tersebut, kami memahami bahwa keberhasilan sebuah project tidak hanya ditentukan oleh eksekusi, tetapi oleh pemahaman yang dalam terhadap konteks, audience, dan tujuan brand.",
      "Kini, bersama Experiola Group, pengalaman yang kami bangun selama bertahun-tahun tidak berhenti sebagai aktivitas, tetapi kami terjemahkan menjadi insight, strategi, dan pendekatan kreatif yang lebih terarah.",
      "Kami membawa pengalaman itu untuk:",
    ],
    cardBullets: [
      "membantu brand menjadi lebih relevan",
      "menciptakan koneksi yang lebih kuat dengan audiens",
      "dan menghadirkan project yang tidak hanya berjalan, tetapi berhasil",
    ],
    cardTextAfterBullets: [
      "Karena bagi kami, pengalaman bukan hanya sesuatu yang terjadi di masa lalu, tetapi bekal untuk menciptakan keberhasilan di masa depan.",
    ],
    badge: "Baca Selengkapnya →",
    images: [
      { src: "/public/abtiimg2.png", alt: "About image 1" },
      { src: "/public/abtimg3.png", alt: "About image 2" },
      { src: "#", alt: "About image 3" },
      { src: "#", alt: "About image 4" },
      { src: "/public/abt7.png", alt: "About image 5" },
    ],
  } satisfies LandingAboutUs,

  logos: {
    title: "Dipercaya oleh tim yang bergerak cepat",
    items: ["KomunitasA", "BrandB", "StartupC", "UMKMD", "EventE"],
  },

  features: {
    title: "DAFTAR SEKARANG",
    eventDate: "12 April 2026",
    eventLocation: "The Alana Malioboro Yogyakarta",
    countdown: {
      label: "Countdown To Kelokal Event",
      target: "2026-04-12T17:00:00+07:00", // ganti ke tanggal event asli
    },
    items: [
      {
        title: "Tenant",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://bit.ly/PendaftaranTenantElevateTheEnergy2026",
      },
      {
        title: "Walking Tour",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://forms.gle/link-lomba",
      },
      {
        title: "Fun Run",
        description: "Daftar sekarang dan dapatkan diskon 10%",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfYfvXg5kHE4AINyWrZbkOUfxeWZ5akKTyrIzQp9vMyLG9SJg/viewform?usp=sharing&ouid=111255964124994562681",
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
        title:
          "Menyusuri Keindahan dan Mitologi Air Terjun Grojogan Sewu di Tawangmangu",
        blogUrl: "https://kelokal.blogspot.com/2024/08/grojogan%20sewu.html",
        coverSrc:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5oHDwjxBN8nHc4fQL0KnZUBmTfB_Ei_cdWAt9Z1WmOfSnh366nK0wL2VmyUo6dvuwBs_v6xkMcNk7wWHAje34tLiNl6BAW2f4CCXtqz8wuEYeA6grm-Oj1mvHeLz29gDCLdCkfqx1b8I0uiy_cdQGpZJXruFK5Nsm6d_9_VhDNSLFffFN_TQ84p32CvRq/s960/grojogan-sewu-tawangmangu-3.jpg",
      },
      {
        title:
          "Kuliner Jogja yang Wajib Dicoba Selain Gudeg: Referensi Libur Tahun Baru",
        blogUrl:
          "https://kelokal.blogspot.com/2025/01/kuliner-jogja-yang-wajib-dicoba-selain.html",
        coverSrc:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjApDdKb4m0HFvJQLIwTMyvvgLe_2_6wiH54nLCPaN2w6Z8P_mqU2rWIP5F-40lwIZcn4UlFkOxV1nqT49dei1bMhAD_WlH1oQeFGa9vWA7_wVTwLmm06qDHrWrEWiTUNAM8u9ySwKHGp_zqIv66yBoBQ32-aptABXexQ6kAe5UHDkF-20C7xQGnmRC3bPL/s700/sate-klatak-2.jpg",
      },
      {
        title: "Candi Prambanan, Candi Hindu Terbesar di Indonesia",
        blogUrl: "https://kelokal.blogspot.com/2024/08/candiprambanan.html",
        coverSrc:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2dOaVc92eaReci0CwkPjaZ1sEXe7lod_aqIIXDWLMieGiEqo75dOXQf1IRjoqS5drG1eLW6vgCXs31Y0xVz1FY83rC6Y1E1_6zAsY2RF83YCI_HvEOqy6RzpqhX10y-SsfqY35_Bpozz9RrROzz2ixysV6miPVR3lo1P22M7-pPY86Icuw2XhbbyQ9sTI/s612/Legenda-Candi-Prambanan-dan-5-Mitosnya.jpg",
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
    brand: "Kelokal",
    description:
      "Kelokal adalah experience lab yang mengeksplorasi budaya, manusia, dan ruang untuk menciptakan pengalaman yang bermakna.",
    socials: [
      { label: "Instagram", href: "https://instagram.com/kelokal.id" },
      { label: "WhatsApp", href: "https://wa.me/6281329409971" },
    ],
    extraLinks: [
      { label: "Home", href: "/home" },
      { label: "Services", href: "#" },
      { label: "News", href: "/#news" },
      { label: "Contact", href: "/#contact" },
      { label: "About Us", href: "/#about-us" },
    ] satisfies LandingNavItem[],
    contact: {
      addressLines: [
        "Kelokal Experience Lab Office",
        "Nglanjaran RT006/RW016, Sardonoharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta 55581",
      ],
      email: "kelokal.idn@gmail.com",
      phone: "(+62) 8132-9409-971",
    },
    copyright: `© ${new Date().getFullYear()} Kelokal. All rights reserved.`,
  } satisfies LandingFooter,
} as const;
