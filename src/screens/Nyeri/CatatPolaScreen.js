/**
 * Catat Pola Nyeri Screen
 * Form untuk mencatat pola nyeri dan menyimpan ke SQLite
 */

import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useDatabase } from "../../hooks/useDatabase";
import { theme } from "../../utils/theme";

export default function CatatPolaScreen({ route, navigation }) {
  const { initialPainScale } = route.params || { initialPainScale: null };

  const [painScale, setPainScale] = useState(initialPainScale || "");
  const [waktuMuncul, setWaktuMuncul] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [pemicu, setPemicu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addPainLog, isReady } = useDatabase();

  const handleSave = async () => {
    // Validasi form
    if (!painScale || !waktuMuncul || !lokasi || !pemicu) {
      Alert.alert(
        "Data Tidak Lengkap",
        "Silakan isi semua field sebelum menyimpan.",
      );
      return;
    }

    // Validasi pain scale (harus angka genap 0-10)
    const scale = parseInt(painScale, 10);
    if (isNaN(scale) || scale < 0 || scale > 10 || scale % 2 !== 0) {
      Alert.alert(
        "Skala Nyeri Tidak Valid",
        "Gunakan nilai genap: 0, 2, 4, 6, 8, atau 10.",
      );
      return;
    }

    try {
      setIsLoading(true);
      await addPainLog(scale, waktuMuncul, lokasi, pemicu);
      Alert.alert("Berhasil!", "Data pola nyeri telah disimpan.", [
        {
          text: "OK",
          onPress: () => {
            // Reset form
            setPainScale("");
            setWaktuMuncul("");
            setLokasi("");
            setPemicu("");
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Gagal menyimpan data. Silakan coba lagi.");
      console.error("Save error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title="Catat Pola Nyeri"
        subtitle="Simpan Riwayat Nyeri Anda"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Field: Skala Nyeri */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Skala Nyeri (0-10) *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan angka genap (0, 2, 4, 6, 8, 10)"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              keyboardType="numeric"
              value={painScale}
              onChangeText={setPainScale}
            />
          </View>

          {/* Field: Waktu Muncul */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Kapan Nyeri Muncul? *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Misal: Pagi hari, setelah makan, saat beraktivitas"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={waktuMuncul}
              onChangeText={setWaktuMuncul}
              multiline
            />
          </View>

          {/* Field: Lokasi Nyeri */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Lokasi Nyeri *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Misal: Kepala, tangan, perut, kaki"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={lokasi}
              onChangeText={setLokasi}
            />
          </View>

          {/* Field: Pemicu/Peredan */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Pemicu/Peredan Nyeri *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Deskripsi kondisi memburuk atau membaik"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={pemicu}
              onChangeText={setPemicu}
              multiline
            />
          </View>

          {/* Tips Box */}
          <View style={styles.tipsBox}>
            <Image
              source={require("../../../assets/images/pengukuran-tingkat-nyeri/catat.png")}
              style={styles.tipsIconImage}
              resizeMode="contain"
            />
            <View style={styles.tipsContent}>
              <Text
                style={[
                  styles.tipsTitle,
                  { fontFamily: theme.typography.labelMd.fontFamily },
                ]}
              >
                Tips Pencatatan:
              </Text>
              <Text
                style={[
                  styles.tipsText,
                  { fontFamily: theme.typography.bodyMd.fontFamily },
                ]}
              >
                Catat dengan detail agar dokter dapat memahami pola nyeri Anda
                dengan baik.
              </Text>
            </View>
          </View>

          {/* Button Container */}
          <View style={styles.buttonContainer}>
            <CustomButton
              title={isLoading ? "Menyimpan..." : "Simpan Catatan"}
              onPress={handleSave}
              disabled={isLoading}
              loading={isLoading}
              variant="primary"
              size="lg"
            />
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingVertical: theme.spacing.lg,
  },
  formGroup: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontSize: theme.typography.labelMd.fontSize,
    fontWeight: theme.typography.labelMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.rounded.DEFAULT,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceContainerLowest,
    color: theme.colors.onSurface,
    fontFamily: theme.typography.bodyMd.fontFamily,
    fontSize: theme.typography.bodyMd.fontSize,
  },
  tipsBox: {
    flexDirection: "row",
    backgroundColor: theme.colors.secondaryContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.lg,
  },
  tipsIconImage: {
    width: 24,
    height: 24,
    marginRight: theme.spacing.md,
  },
  tipsContent: {
    flex: 1,
  },
  tipsTitle: {
    fontSize: theme.typography.labelMd.fontSize,
    fontWeight: theme.typography.labelMd.fontWeight,
    color: theme.colors.onSecondaryContainer,
    marginBottom: theme.spacing.xs,
  },
  tipsText: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSecondaryContainer,
  },
  buttonContainer: {
    marginVertical: theme.spacing.lg,
  },
});
