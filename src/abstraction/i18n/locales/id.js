import { en } from "./en.js";

export const id = {
  ...en,
  accessibility: {
    ...en.accessibility,
    skipToContent: "Lewati ke konten",
    primaryNavigation: "Navigasi utama",
    language: "Bahasa",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
  },
  theme: {
    toggle: "Ganti tema",
    toLight: "Gunakan mode terang",
    toDark: "Gunakan mode gelap",
  },
  language: { choose: "Pilih bahasa" },
  meta: {
    title: "PDownloader — Pengelola unduhan untuk Windows",
    description:
      "Unduhan paralel, pelanjutan tugas, dan integrasi browser dalam aplikasi Windows native.",
  },
  nav: {
    features: "Fitur",
    architecture: "Arsitektur",
    extension: "Ekstensi",
    docs: "Dokumentasi",
    github: "GitHub",
  },
  hero: {
    ...en.hero,
    eyebrow: "Pengelola unduhan multisegmen · Windows",
    titlePrefix: "Bagi berkasnya.",
    titleGrad: "Bukan kesabaran Anda.",
    subtitle:
      "PDownloader membagi berkas besar menjadi segmen paralel, melanjutkan tugas yang terputus, dan menerima tautan media dari browser.",
    ctaPrimary: "Unduh untuk Windows",
    ctaSecondary: "Lihat sumber di GitHub",
    ctaExtension: "Pasang ekstensi browser",
    metaThreads: "8 segmen paralel secara bawaan",
    metaLicense: "Berlisensi GPL-3.0",
    previewLabel:
      "PDownloader.Runner dalam tiga keadaan: mengunduh, menggabungkan berkas, dan selesai",
    runner: {
      ...en.hero.runner,
      title: "PDownloader — Pengelola unduhan",
      downloading: "Mengunduh",
      merging: "Menggabungkan berkas...",
      completed: "Selesai",
      streamsTitle: "Progres utas unduhan · Berkas",
      thread: "Utas {number}",
      pause: "Jeda",
      cancel: "Batal",
      done: "Selesai",
      openFolder: "Buka folder",
      openFile: "Buka berkas",
    },
  },
  segbar: {
    ...en.segbar,
    statusRunning: "mengunduh — 8 segmen",
    statusMerged: "digabung menjadi 1 berkas",
    caption:
      "Setiap segmen memakai permintaan rentang tersendiri. Segmen yang gagal mencoba lagi dengan jeda bertahap sementara segmen lain tetap berjalan.",
  },
  features: {
    ...en.features,
    eyebrow: "Fitur",
    title: "Satu mesin untuk semua unduhan",
    subtitle:
      "Berkas, koneksi terputus, dan media daring dikelola dalam satu aplikasi.",
    segments: {
      title: "Unduhan multisegmen",
      desc: "Membagi berkas menjadi permintaan rentang byte paralel — 8 utas secara bawaan — lalu otomatis beralih ke satu aliran jika server tidak mendukung rentang.",
    },
    resume: {
      title: "Lanjutkan dan coba lagi",
      desc: "Progres segmen disimpan ke disk, sehingga menutup aplikasi atau crash tidak menghilangkan unduhan. Segmen gagal dicoba lagi dengan jeda eksponensial.",
    },
    hls: {
      title: "Streaming HLS / DASH",
      desc: "Mendeteksi daftar putar .m3u8, mengambil fragmen secara paralel dengan batas aman, lalu menggabungkannya menjadi satu berkas keluaran.",
    },
    ytdlp: {
      title: "YouTube melalui yt-dlp",
      desc: "yt-dlp menentukan format dan URL streaming, termasuk autentikasi cookie untuk melewati pemeriksaan bot; mesin PDownloader menangani transfernya.",
    },
    extension: {
      title: "Ekstensi browser",
      desc: "Ekstensi resmi untuk browser Chromium dan Firefox dengan menu konteks, masukan URL, serta deteksi otomatis tautan unduhan.",
    },
    tray: {
      title: "Baki sistem dan layanan latar",
      desc: "Layanan ringan mengoordinasikan antarmuka utama, jendela unduhan, dan ikon baki melalui IPC lokal, tenang sampai dibutuhkan.",
    },
  },
  architecture: {
    ...en.architecture,
    eyebrow: "Cara kerja",
    title: "Empat proses kecil, satu jembatan lokal",
    subtitle:
      "Ekstensi browser berkomunikasi dengan jembatan HTTP lokal; PDownloader meneruskan sisanya melalui CFS.",
    diagramLabel: "Arsitektur proses PDownloader",
    browser: "Ekstensi browser",
    browserSub: "menu konteks / popup",
    coreSub: "jembatan HTTP + perute CFS",
    mainuiSub: "antarmuka utama, pengaturan",
    traySub: "ikon baki",
    legendTitle: "Jembatan HTTP lokal — localhost:6287",
    legend1v: "pemeriksaan kesehatan",
    legend2v: "antrekan unduhan berkas biasa",
    legend3v: "tentukan format melalui yt-dlp",
    legend4v: "mulai unduhan YouTube/situs yang telah ditentukan",
  },
  extension: {
    ...en.extension,
    eyebrow: "Ekstensi browser",
    title: "Tangkap tautan tanpa meninggalkan halaman",
    subtitle:
      "Tersedia resmi untuk browser berbasis Chromium dan Firefox.",
    storeButton: "Pasang ekstensi browser",
    bridgeOnline: "Jembatan lokal siap",
    item1: "Pilihan menu konteks pada tautan, video, dan halaman.",
    item2:
      "Popup untuk memasukkan URL, memilih folder simpan, dan menampilkan tautan yang dapat diunduh pada halaman.",
    item3: "Menangkap klik secara otomatis pada jenis berkas unduhan umum.",
    item4:
      "Notifikasi desktop saat tugas berhasil masuk antrean atau terjadi galat koneksi.",
    flowStep1: "klik “Unduh dengan PDownloader”",
    flowStep3: "Core mengurai dan meneruskan melalui CFS",
    flowStep4: "Runner memasukkan antrean → DownloadEngine mulai",
    modal: {
      eyebrow: "Ekstensi browser resmi",
      title: "Pilih mesin browser",
      subtitle:
        "Satu paket ekstensi mendukung semua browser yang memakai mesin sama.",
      close: "Tutup",
      available: "Tersedia",
      chromiumTitle: "Mesin Chromium",
      chromiumDesc: "Pasang ekstensi resmi dari Chrome Web Store.",
      chromiumBrowsersLabel: "Browser Chromium yang didukung",
      geckoTitle: "Mesin Firefox (Gecko)",
      geckoDesc: "Pasang ekstensi resmi dari Firefox Add-ons.",
      geckoBrowsersLabel: "Browser Gecko yang didukung",
      openStore: "Buka Chrome Web Store",
      openFirefoxAddons: "Buka Firefox Add-ons",
    },
  },
  cta: {
    ...en.cta,
    eyebrow: "Mulai",
    title: "Bangun dari sumber atau gunakan pemasang",
    subtitle:
      "PDownloader bersumber terbuka di bawah GPL-3.0. Kloning, pelajari mesinnya, atau langsung pasang aplikasinya.",
    primary: "Unduh versi terbaru",
    secondary: "Jelajahi kode sumber",
    req2: "Windows 10 atau lebih baru, x64",
    req3: "yt-dlp untuk menentukan media YouTube/situs",
    copy: "Salin perintah",
    copied: "Disalin",
    copyError: "Gagal menyalin",
    terminalComment1: "# pulihkan dan bangun seluruh solusi",
    terminalComment2: "# memulai layanan latar Core secara otomatis",
  },
  footer: {
    tagline: "Pengelola unduhan multisegmen untuk Windows.",
    source: "Kode sumber",
    releases: "Rilis",
    license: "Lisensi (GPL-3.0)",
  },
  docs: {
    ...en.docs,
    metaTitle: "Dokumentasi PDownloader",
    eyebrow: "Dokumentasi",
    title: "Panduan PDownloader",
    intro:
      "Pilih topik tentang pemasangan, integrasi browser, atau pemecahan masalah.",
    menu: "Menu dokumentasi",
    loading: "Memuat artikel…",
    loadError: "Artikel ini tidak dapat dimuat.",
    retry: "Coba lagi",
    fallbackTitle: "Menampilkan versi bahasa Inggris",
    fallbackDesc: "Artikel ini belum tersedia dalam bahasa yang dipilih.",
    backHome: "Kembali ke beranda",
    categories: {
      gettingStarted: "Memulai",
      integration: "Integrasi browser",
      support: "Dukungan",
    },
    articles: {
      introduction: "Pengantar",
      installation: "Pemasangan",
      browserExtension: "Ekstensi browser",
      troubleshooting: "Pemecahan masalah",
      uninstallation: "Penghapusan",
    },
  },
};

id.docs.metaDescription =
  "Panduan pemasangan, integrasi browser, pemecahan masalah, dan penghapusan PDownloader.";
