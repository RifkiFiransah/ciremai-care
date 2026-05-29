# Ciremai Care 🩺

**Ciremai Care** adalah aplikasi mobile berbasis React Native (Expo) yang dikembangkan untuk memantau, mencatat, dan mengelola tingkat nyeri pasien anak, serta memberikan edukasi terkait penanganan nyeri non-farmakologis. Aplikasi ini dipersembahkan untuk **Universitas Bhakti Husada Indonesia**.

## 🚀 Fitur Utama

- **Pengukuran Nyeri**: Menggunakan skala Wong-Baker (Face Pain Scale) interaktif (0-10, angka genap).
- **Pencatatan Nyeri (Local Database)**: Pencatatan rekam medis tingkat nyeri menggunakan SQLite.
- **Modul Edukasi**: Edukasi mengenai penyebab, pemicu, periode nyeri, serta strategi meredakan nyeri tanpa obat.
- **Integrasi Video Berbasis Cloud**: Penayangan video edukasi menggunakan WebView dari instans Google Drive.
- **Sistem Peringatan (Guardrails)**: Jika sistem identifikasi mencatat peningkatan/penetrasi tingkat nyeri berbahaya, peringatan interaktif memberitahu pasien/pengguna agar segera menginformasikan kepada pihak rumah sakit.

## 🛠 Teknologi

- **Framework**: [React Native](https://reactnative.dev/) / [Expo](https://expo.dev/)
- **Navigasi**: [React Navigation](https://reactnavigation.org/)
- **Database**: [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- **UI & Komponen**: Tema Desain Kustom (Design Tokens), dengan komponen mandiri yang re-usable.

## ⚙️ Persyaratan Lingkungan Pengembangan

- **Node.js**: LTS versi terbaru direkomendasikan.
- **Expo CLI** `(npx expo)`.
- **Aplikasi Expo Go** di ponsel cerdas Anda atau setup lokal dengan **Android Simulator**.

## 🏃‍♂️ Menjalankan Aplikasi

1. **Unduh Repositori Project ini** melalui akses Anda.

2. **Instal seluruh Dependensi**:

   ```bash
   npm install
   ```

3. **Jalankan Aplikasi via Expo**:

   ```bash
   npx expo start
   ```

4. **Uji Coba di Perangkat**:
   - Buka **Expo Go** pada Smartphone fisik Anda, dan pastikan WiFi menggunakan network seluler (bridging) yang sama. Silakan pindai QRCode yang muncul.
   - Atau tekan `a` di terminal bar jika ada peramban Android Studio (emulator) yang sedang jalan di mesin lokal Anda.
