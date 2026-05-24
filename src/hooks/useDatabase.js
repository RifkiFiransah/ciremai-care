/**
 * Custom Hook untuk Database
 * Mengelola inisialisasi database dan menyediakan akses ke fungsi query
 */

import { useEffect, useState } from "react";
import { clearDatabase, initDatabase } from "../database/db";
import {
  addPainLog,
  deletePainLog,
  getAllPainLogs,
  getPainLogById,
  getPainStatistics,
  updatePainLog,
} from "../database/painQueries";

export function useDatabase() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  // Inisialisasi database saat aplikasi dimulai
  useEffect(() => {
    (async () => {
      try {
        await initDatabase();
        setIsReady(true);
      } catch (err) {
        setError(err);
        console.error("Database initialization error:", err);
      }
    })();
  }, []);

  return {
    isReady,
    error,
    // Fungsi CRUD
    addPainLog,
    getAllPainLogs,
    getPainLogById,
    updatePainLog,
    deletePainLog,
    getPainStatistics,
    // Fungsi utility
    clearDatabase,
  };
}
