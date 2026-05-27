/**
 * Inisialisasi Database SQLite untuk Ciremai Care
 */

import * as SQLite from "expo-sqlite";

// Nama database
const DATABASE_NAME = "ciremai_care.db";

// Inisialisasi koneksi database
let db = null;

export async function getDatabase() {
  if (!db) {
    db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  }
  return db;
}

/**
 * Fungsi untuk menginisialisasi tabel-tabel di database
 */
export async function initDatabase() {
  try {
    const database = await getDatabase();
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS pain_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        wong_baker_scale INTEGER NOT NULL,
        waktu_muncul TEXT,
        lokasi_nyeri TEXT,
        pemicu_peredan TEXT,
        nama_anak TEXT,
        usia TEXT,
        jenis_kelamin TEXT,
        pengalaman_dirawat TEXT,
        tindakan_invasif TEXT,
        waktu_pengukuran TEXT,
        keterangan_skala_nyeri TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS user_profile (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        name TEXT,
        role TEXT,
        email TEXT,
        photo_uri TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    // Migrations for existing databases to add new columns
    const columnsToAdd = [
      'nama_anak TEXT',
      'usia TEXT',
      'jenis_kelamin TEXT',
      'pengalaman_dirawat TEXT',
      'tindakan_invasif TEXT',
      'waktu_pengukuran TEXT',
      'keterangan_skala_nyeri TEXT'
    ];
    
    for (const column of columnsToAdd) {
      try {
        await database.execAsync(`ALTER TABLE pain_logs ADD COLUMN ${column};`);
      } catch (_err) {
        // Ignore error if column already exists
      }
    }

    // Inisialisasi profile default jika belum ada
    const result = await database.getAllAsync('SELECT * FROM user_profile WHERE id = 1');
    if (result.length === 0) {
      await database.runAsync(
        'INSERT INTO user_profile (id, name, role, email, photo_uri) VALUES (?, ?, ?, ?, ?)',
        1, 'Pengguna Ciremai Care', 'Pasien / Keluarga', '', null
      );
      console.log("✓ Profile default berhasil dibuat");
    }

    console.log("✓ Database dan tabel berhasil dibuat/dimuat");
    return true;
  } catch (error) {
    console.error("✗ Error saat inisialisasi database:", error);
    throw error;
  }
}

/**
 * Fungsi untuk menghapus semua data (debugging/testing)
 */
export async function clearDatabase() {
  try {
    const database = await getDatabase();
    await database.execAsync("DELETE FROM pain_logs;");
    console.log("✓ Data pain_logs berhasil dihapus");
    return true;
  } catch (error) {
    console.error("✗ Error saat menghapus data:", error);
    throw error;
  }
}
