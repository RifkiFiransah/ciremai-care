/**
 * Fungsi CRUD untuk Tabel pain_logs (SQLite)
 * Semua query database harus didefinisikan di sini, bukan di dalam UI components
 */

import { getDatabase } from "./db";

/**
 * Menambahkan record nyeri baru ke database
 */
export async function addPainLog(
  wongBakerScale,
  waktuMuncul,
  lokasi,
  pemicu,
  namaAnak,
  usia,
  jenisKelamin,
  pengalamanDirawat,
  tindakanInvasif,
  waktuPengukuran,
  keteranganSkalaNyeri
) {
  try {
    const database = await getDatabase();
    const result = await database.runAsync(
      `INSERT INTO pain_logs (
        wong_baker_scale, waktu_muncul, lokasi_nyeri, pemicu_peredan,
        nama_anak, usia, jenis_kelamin, pengalaman_dirawat, tindakan_invasif,
        waktu_pengukuran, keterangan_skala_nyeri
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        wongBakerScale,
        waktuMuncul,
        lokasi,
        pemicu,
        namaAnak || "",
        usia || "",
        jenisKelamin || "",
        pengalamanDirawat || "",
        tindakanInvasif || "",
        waktuPengukuran || "",
        keteranganSkalaNyeri || ""
      ],
    );
    console.log("✓ Pain log berhasil ditambahkan:", result);
    return result;
  } catch (error) {
    console.error("✗ Error saat menambah pain log:", error);
    throw error;
  }
}

/**
 * Mengambil semua riwayat nyeri dari database
 */
export async function getAllPainLogs() {
  try {
    const database = await getDatabase();
    const result = await database.getAllAsync(
      `SELECT * FROM pain_logs ORDER BY created_at DESC;`,
    );
    console.log("✓ Pain logs berhasil diambil:", result.length, "records");
    return result;
  } catch (error) {
    console.error("✗ Error saat mengambil pain logs:", error);
    throw error;
  }
}

/**
 * Mengambil riwayat nyeri berdasarkan ID
 */
export async function getPainLogById(id) {
  try {
    const database = await getDatabase();
    const result = await database.getFirstAsync(
      `SELECT * FROM pain_logs WHERE id = ?;`,
      [id],
    );
    if (result) {
      console.log("✓ Pain log ditemukan");
      return result;
    } else {
      console.log("⚠ Pain log dengan ID", id, "tidak ditemukan");
      return null;
    }
  } catch (error) {
    console.error("✗ Error saat mengambil pain log:", error);
    throw error;
  }
}

/**
 * Memperbarui record nyeri berdasarkan ID
 */
export async function updatePainLog(
  id,
  wongBakerScale,
  waktuMuncul,
  lokasi,
  pemicu,
  namaAnak,
  usia,
  jenisKelamin,
  pengalamanDirawat,
  tindakanInvasif,
  waktuPengukuran,
  keteranganSkalaNyeri
) {
  try {
    const database = await getDatabase();
    const result = await database.runAsync(
      `UPDATE pain_logs
       SET wong_baker_scale = ?, waktu_muncul = ?, lokasi_nyeri = ?, pemicu_peredan = ?,
           nama_anak = ?, usia = ?, jenis_kelamin = ?, pengalaman_dirawat = ?, tindakan_invasif = ?,
           waktu_pengukuran = ?, keterangan_skala_nyeri = ?
       WHERE id = ?;`,
      [
        wongBakerScale,
        waktuMuncul,
        lokasi,
        pemicu,
        namaAnak || "",
        usia || "",
        jenisKelamin || "",
        pengalamanDirawat || "",
        tindakanInvasif || "",
        waktuPengukuran || "",
        keteranganSkalaNyeri || "",
        id
      ],
    );
    console.log("✓ Pain log berhasil diperbarui");
    return result;
  } catch (error) {
    console.error("✗ Error saat memperbarui pain log:", error);
    throw error;
  }
}

/**
 * Menghapus record nyeri berdasarkan ID
 */
export async function deletePainLog(id) {
  try {
    const database = await getDatabase();
    const result = await database.runAsync(
      `DELETE FROM pain_logs WHERE id = ?;`,
      [id],
    );
    console.log("✓ Pain log berhasil dihapus");
    return result;
  } catch (error) {
    console.error("✗ Error saat menghapus pain log:", error);
    throw error;
  }
}

/**
 * Mengambil statistik nyeri (rata-rata skala, count, dll)
 */
export async function getPainStatistics() {
  try {
    const database = await getDatabase();
    const result = await database.getFirstAsync(
      `SELECT 
        COUNT(*) as total_records,
        AVG(wong_baker_scale) as avg_scale,
        MAX(wong_baker_scale) as max_scale,
        MIN(wong_baker_scale) as min_scale
       FROM pain_logs;`,
    );
    console.log("✓ Statistik nyeri berhasil diambil");
    return result || {};
  } catch (error) {
    console.error("✗ Error saat mengambil statistik:", error);
    throw error;
  }
}
