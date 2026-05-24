import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { CustomButton } from "../../components/CustomButton";
import { theme } from "../../utils/theme";
import { getProfile, updateProfile } from "../../database/profileQueries";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [photoUri, setPhotoUri] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const profile = await getProfile();
      if (profile) {
        setName(profile.name || "");
        setRole(profile.role || "");
        setEmail(profile.email || "");
        setPhotoUri(profile.photo_uri || null);
      }
    } catch (error) {
      console.error("Failed to load profile:", error);
      Alert.alert("Error", "Gagal memuat data profil");
    } finally {
      setIsLoading(false);
    }
  };

  const pickImage = async () => {
    // Meminta izin akses galeri
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Izin Ditolak", "Anda perlu memberikan izin akses galeri untuk mengunggah foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Peringatan", "Nama lengkap tidak boleh kosong.");
      return;
    }

    setIsLoading(true);
    try {
      await updateProfile(name, role, email, photoUri);
      Alert.alert("Sukses", "Profil berhasil diperbarui", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error("Failed to save profile:", error);
      Alert.alert("Error", "Gagal menyimpan data profil");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ fontFamily: theme.typography.bodyMd.fontFamily }}>Memuat data...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text
              style={[
                styles.sectionTitle,
                { fontFamily: theme.typography.headlineMd.fontFamily },
              ]}
            >
              Informasi Pribadi
            </Text>
            <Text
              style={[
                styles.sectionDesc,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
            >
              Perbarui informasi profil dan foto Anda di bawah ini.
            </Text>
          </View>

          {/* Photo Picker Section */}
          <View style={styles.photoSection}>
            <TouchableOpacity style={styles.photoContainer} onPress={pickImage} activeOpacity={0.8}>
              {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.photo} />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <MaterialCommunityIcons name="camera-plus" size={40} color={theme.colors.primary} />
                </View>
              )}
              <View style={styles.editIconBadge}>
                <MaterialCommunityIcons name="pencil" size={16} color={theme.colors.onPrimary} />
              </View>
            </TouchableOpacity>
            <Text style={[styles.photoHelperText, { fontFamily: theme.typography.caption.fontFamily }]}>
              Ketuk untuk mengubah foto
            </Text>
          </View>

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Nama Lengkap
            </Text>
            <TextInput
              style={[
                styles.input,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
              value={name}
              onChangeText={setName}
              placeholder="Masukkan nama lengkap"
              placeholderTextColor={theme.colors.outline}
            />
          </View>

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Peran
            </Text>
            <TextInput
              style={[
                styles.input,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
              value={role}
              onChangeText={setRole}
              placeholder="Contoh: Pasien / Keluarga"
              placeholderTextColor={theme.colors.outline}
            />
          </View>

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Email (Opsional)
            </Text>
            <TextInput
              style={[
                styles.input,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Masukkan alamat email"
              placeholderTextColor={theme.colors.outline}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Simpan Perubahan" onPress={handleSave} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.marginMobile,
    paddingBottom: theme.spacing.xl,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  sectionDesc: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
  },
  photoSection: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: theme.rounded.full,
    backgroundColor: theme.colors.surfaceContainerHigh,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 2,
    borderColor: theme.colors.surfaceBright,
    elevation: 4,
    shadowColor: theme.colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: theme.rounded.full,
  },
  photoPlaceholder: {
    width: "100%",
    height: "100%",
    borderRadius: theme.rounded.full,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceContainer,
  },
  editIconBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: theme.colors.surfaceBright,
  },
  photoHelperText: {
    marginTop: theme.spacing.sm,
    color: theme.colors.onSurfaceVariant,
  },
  formGroup: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontSize: theme.typography.labelMd.fontSize,
    fontWeight: theme.typography.labelMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  input: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.rounded.DEFAULT,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
  },
  buttonContainer: {
    marginTop: theme.spacing.xl,
  },
});
