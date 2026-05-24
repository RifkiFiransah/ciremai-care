/**
 * Konstanta Global Aplikasi Ciremai Care
 */

// export const VIDEO_LINKS = {
//   // Ganti FILE_ID dengan ID file Google Drive Anda
//   // Gunakan format /preview untuk WebView
//   WELCOME_KUNINGAN: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
// };

export const VIDEO_LINKS = {
  WELCOME_KUNINGAN: process.env.EXPO_PUBLIC_VIDEO_WELCOME_KUNINGAN,
};

export const WONG_BAKER_SCALE = {
  0: {
    label: "Tidak Nyeri",
    description: "Saya tidak merasa nyeri sama sekali",
  },
  2: { label: "Nyeri Ringan", description: "Saya merasa nyeri sedikit saja" },
  4: {
    label: "Nyeri Sedikit Mengganggu",
    description: "Nyeri terasa tetapi belum terlalu mengganggu aktivitas",
  },
  6: {
    label: "Nyeri Sedang",
    description: "Nyeri mulai mengganggu aktivitas saya",
  },
  8: {
    label: "Nyeri Berat",
    description: "Nyeri sangat mengganggu dan sulit melakukan aktivitas",
  },
  10: {
    label: "Nyeri Sangat Berat",
    description: "Saya tidak bisa berbuat apa-apa karena nyeri",
  },
};

export const PAIN_TRIGGERS = {
  CAUSES: [
    {
      id: "fall",
      label: "Jatuh atau Luka",
      description: "Cedera akibat jatuh, terbentur, atau luka terbuka",
      image: require("../../assets/images/edukasi/kenali/penyebab/jatuh.png"),
    },
    {
      id: "infection",
      label: "Infeksi",
      description: "Sakit gigi, sakit perut, radang tenggorokan, dll",
      image: require("../../assets/images/edukasi/kenali/penyebab/infeksi.png"),
    },
    {
      id: "medical",
      label: "Tindakan Medis",
      description: "Disuntik, operasi, perawatan luka, dll",
      image: require("../../assets/images/edukasi/kenali/penyebab/suntik.png"),
    },
  ],
  PERIODS: [
    {
      id: "acute",
      label: "Akut",
      description: "Nyeri yang berlangsung kurang dari 3 bulan",
      image: require("../../assets/images/edukasi/kenali/periode/calendar.png"),
    },
    {
      id: "chronic",
      label: "Kronis",
      description: "Nyeri yang berlangsung lebih dari 3 bulan",
      image: require("../../assets/images/edukasi/kenali/periode/calendar.png"),
    },
  ],
  TRIGGERS: [
    {
      label: "Gerakan mendadak",
      image: require("../../assets/images/edukasi/kenali/pemicu/gerakan.png"),
    },
    {
      label: "Suhu dingin atau panas",
      image: require("../../assets/images/edukasi/kenali/pemicu/suhu.png"),
    },
    {
      label: "Cemas atau takut",
      image: require("../../assets/images/edukasi/kenali/pemicu/cemas.png"),
    },
    {
      label: "Kelelahan",
      image: require("../../assets/images/edukasi/kenali/pemicu/kelelahan.png"),
    },
    {
      label: "Tekanan pada area nyeri",
      image: null,
    },
    {
      label: "Aktivitas fisik",
      image: null,
    },
  ],
};

export const ALERT_MESSAGES = {
  PAIN_INCREASE:
    "Segera beri tahu dokter atau perawat jika skala nyeri anak meningkat atau tidak kunjung membaik",
};

export const INSTITUTION = "Universitas Bhakti Husada Indonesia";
