import { en } from "./en.js";

export const id = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "Lewati ke konten", primaryNavigation: "Navigasi utama", language: "Bahasa", openMenu: "Buka menu", closeMenu: "Tutup menu" },
  theme: { toggle: "Ganti tema", toLight: "Gunakan mode terang", toDark: "Gunakan mode gelap" },
  language: { choose: "Pilih bahasa" },
  meta: { title: "PDownloader — Pengelola unduhan untuk Windows", description: "Unduhan paralel, pelanjutan tugas, dan integrasi browser dalam aplikasi Windows native." },
  nav: { features: "Fitur", architecture: "Arsitektur", extension: "Ekstensi", docs: "Dokumentasi", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "Pengelola unduhan multisegmen · Windows", titlePrefix: "Bagi berkasnya.", titleGrad: "Bukan kesabaran Anda.", subtitle: "PDownloader membagi berkas besar menjadi segmen paralel, melanjutkan tugas yang terputus, dan menerima tautan media dari browser.", ctaPrimary: "Unduh untuk Windows", ctaSecondary: "Lihat sumber di GitHub", ctaExtension: "Pasang ekstensi browser" },
  features: { ...en.features, eyebrow: "Fitur", title: "Satu mesin untuk semua unduhan", subtitle: "Berkas, koneksi terputus, dan media daring dikelola dalam satu aplikasi." },
  architecture: { ...en.architecture, eyebrow: "Cara kerja", title: "Empat proses kecil, satu jembatan lokal", subtitle: "Ekstensi browser berkomunikasi dengan jembatan HTTP lokal; PDownloader meneruskan sisanya melalui CFS." },
  extension: { ...en.extension, eyebrow: "Ekstensi browser", title: "Tangkap tautan tanpa meninggalkan halaman", subtitle: "Tersedia resmi di Chrome Web Store untuk browser berbasis Chromium." },
  cta: { ...en.cta, eyebrow: "Mulai", title: "Pasang aplikasi atau bangun dari sumber", primary: "Unduh versi terbaru", secondary: "Jelajahi kode sumber" },
  footer: { tagline: "Pengelola unduhan multisegmen untuk Windows.", source: "Kode sumber", releases: "Rilis", license: "Lisensi (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "Dokumentasi PDownloader", eyebrow: "Dokumentasi", title: "Panduan PDownloader", intro: "Pilih topik tentang pemasangan, integrasi browser, atau pemecahan masalah.", menu: "Menu dokumentasi", loading: "Memuat artikel…", loadError: "Artikel ini tidak dapat dimuat.", retry: "Coba lagi", fallbackTitle: "Menampilkan versi bahasa Inggris", fallbackDesc: "Artikel ini belum tersedia dalam bahasa yang dipilih.", backHome: "Kembali ke beranda", categories: { gettingStarted: "Memulai", integration: "Integrasi browser", support: "Dukungan" }, articles: { introduction: "Pengantar", installation: "Pemasangan", browserExtension: "Ekstensi browser", troubleshooting: "Pemecahan masalah", uninstallation: "Penghapusan" } },
};
