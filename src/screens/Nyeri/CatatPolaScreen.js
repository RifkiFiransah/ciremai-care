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
  TouchableOpacity,
  View,
} from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useDatabase } from "../../hooks/useDatabase";
import { WONG_BAKER_SCALE } from "../../utils/constants";
import { theme } from "../../utils/theme";

export default function CatatPolaScreen({ route, navigation }) {
  const { initialPainScale } = route.params || { initialPainScale: null };

  const [namaAnak, setNamaAnak] = useState("");
  const [usia, setUsia] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [pengalamanDirawat, setPengalamanDirawat] = useState("");
  const [tindakanInvasif, setTindakanInvasif] = useState("");

  const [painScale, setPainScale] = useState(initialPainScale || "");
  const [waktuPengukuran, setWaktuPengukuran] = useState("");
  const [waktuMuncul, setWaktuMuncul] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [pemicu, setPemicu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addPainLog, isReady } = useDatabase();

  const handleSave = async () => {
    // Validasi form
    if (
      !namaAnak ||
      !usia ||
      !jenisKelamin ||
      !pengalamanDirawat ||
      !tindakanInvasif ||
      !painScale ||
      !waktuPengukuran ||
      !waktuMuncul ||
      !lokasi ||
      !pemicu
    ) {
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

      const keteranganSkalaNyeri =
        WONG_BAKER_SCALE[scale]?.label || "Tidak Diketahui";

      // 1. Simpan ke lokal database (SQLite)
      await addPainLog(
        scale,
        waktuMuncul,
        lokasi,
        pemicu,
        namaAnak,
        usia,
        jenisKelamin,
        pengalamanDirawat,
        tindakanInvasif,
        waktuPengukuran,
        keteranganSkalaNyeri,
      );

      // 2. Simpan ke Spreadsheet
      const payloadData = {
        namaAnak,
        usia,
        jenisKelamin,
        pengalamanDirawat,
        tindakanInvasif,
        painScale: scale,
        keteranganSkalaNyeri,
        waktuPengukuran,
        waktuMuncul,
        lokasi,
        pemicu,
      };

      // Gunakan URL dari .env jika ada, atau gunakan URL placeholder (GANTI URL INI)
      const URL_SCRIPT = process.env.EXPO_PUBLIC_GOOGLE_SCRIPT_URL || "";

      try {
        await fetch(URL_SCRIPT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadData),
        });

        // Tergantung response dari Google Apps Script, jika return JSON:
        // const result = await response.json();
        // if (result.status !== 'success') {
        //   console.warn("Gagal simpan ke spreadsheet:", result.message);
        // }
      } catch (sheetError) {
        console.error("Error mengirim ke spreadsheet:", sheetError);
        // Kita tidak block alert berhasil agar user tahu data lokal tetap aman
      }

      Alert.alert("Berhasil!", "Data pola nyeri telah disimpan.", [
        {
          text: "OK",
          onPress: () => {
            // Reset form
            setNamaAnak("");
            setUsia("");
            setJenisKelamin("");
            setPengalamanDirawat("");
            setTindakanInvasif("");
            setPainScale("");
            setWaktuPengukuran("");
            setWaktuMuncul("");
            setLokasi("");
            setPemicu("");
            navigation.navigate("Menu");
            setIsLoading(false);
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

  const renderSelectionButtons = (options, selectedValue, onSelect) => (
    <View style={styles.buttonGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.selectionButton,
            selectedValue === option && styles.selectionButtonActive,
          ]}
          onPress={() => onSelect(option)}
        >
          <Text
            style={[
              styles.selectionButtonText,
              selectedValue === option && styles.selectionButtonTextActive,
              { fontFamily: theme.typography.labelMd.fontFamily },
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

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
          {/* Section: Data Diri Anak */}
          <Text style={styles.sectionTitle}>Data Diri Anak</Text>

          {/* Field: Nama Anak */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Nama Anak *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama anak"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={namaAnak}
              onChangeText={setNamaAnak}
            />
          </View>

          {/* Field: Usia */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Usia (Tahun / Bulan) *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Misal: 5 Tahun"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={usia}
              onChangeText={setUsia}
            />
          </View>

          {/* Field: Jenis Kelamin */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Jenis Kelamin *
            </Text>
            {renderSelectionButtons(
              ["Laki-laki", "Perempuan"],
              jenisKelamin,
              setJenisKelamin,
            )}
          </View>

          {/* Section: Pengalaman Medis */}
          <Text style={styles.sectionTitle}>Pengalaman Medis</Text>

          {/* Field: Pengalaman Dirawat */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Apakah sebelumnya pernah dirawat? *
            </Text>
            {renderSelectionButtons(
              ["Ya", "Tidak"],
              pengalamanDirawat,
              setPengalamanDirawat,
            )}
          </View>

          {/* Field: Jenis Tindakan Invasif */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Rencana/Jenis Tindakan Invasif *
            </Text>
            {renderSelectionButtons(
              ["Injeksi", "Infus", "Pengambilan Darah"],
              tindakanInvasif,
              setTindakanInvasif,
            )}
          </View>

          <View style={styles.divider} />

          {/* Section: Data Nyeri */}
          <Text style={styles.sectionTitle}>Data Nyeri</Text>

          {/* Field: Waktu Pengukuran */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Waktu Pengukuran *
            </Text>
            {renderSelectionButtons(
              ["Sebelum Tindakan", "Selama Tindakan", "Sesudah Tindakan"],
              waktuPengukuran,
              setWaktuPengukuran,
            )}
          </View>

          {/* Field: Skala Nyeri */}
          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Skala Nyeri (0, 2, 4, 6, 8, atau 10) *
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
              Perkembangan Kondisi *
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
              size="md"
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
  sectionTitle: {
    fontSize: theme.typography.headlineSm?.fontSize || 18,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.lg,
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
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  selectionButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.rounded.full,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    backgroundColor: theme.colors.surfaceContainerLowest,
  },
  selectionButtonActive: {
    backgroundColor: theme.colors.primaryContainer,
    borderColor: theme.colors.primary,
  },
  selectionButtonText: {
    color: theme.colors.onSurfaceVariant,
    fontSize: theme.typography.bodyMd.fontSize,
  },
  selectionButtonTextActive: {
    color: theme.colors.onPrimaryContainer,
    fontWeight: "bold",
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
