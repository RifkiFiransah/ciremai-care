import { getDatabase } from "./db";

/**
 * Mengambil data profil user
 */
export async function getProfile() {
  try {
    const db = await getDatabase();
    const result = await db.getAllAsync("SELECT * FROM user_profile WHERE id = 1");
    if (result.length > 0) {
      return result[0];
    }
    return null;
  } catch (error) {
    console.error("Error mengambil profil:", error);
    throw error;
  }
}

/**
 * Mengupdate data profil user
 */
export async function updateProfile(name, role, email, photoUri) {
  try {
    const db = await getDatabase();
    await db.runAsync(
      "UPDATE user_profile SET name = ?, role = ?, email = ?, photo_uri = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1",
      name,
      role,
      email,
      photoUri
    );
    console.log("✓ Profil berhasil diupdate");
    return true;
  } catch (error) {
    console.error("Error update profil:", error);
    throw error;
  }
}
