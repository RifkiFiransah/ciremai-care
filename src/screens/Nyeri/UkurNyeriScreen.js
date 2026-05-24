/**
 * Ukur Nyeri Screen
 * Menggunakan Wong-Baker Scale untuk mengukur tingkat nyeri
 */

import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { WongBakerScale } from "../../components/WongBakerScale";
import { theme } from "../../utils/theme";

export default function UkurNyeriScreen({ navigation }) {
  const [painScale, setPainScale] = useState(null);

  const handleContinue = () => {
    if (painScale !== null) {
      navigation.navigate("CatatPola", { initialPainScale: painScale });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Ukur Nyerimu"
        subtitle="Gunakan Skala Wong-Baker"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <WongBakerScale
            value={painScale}
            onChange={setPainScale}
            showAlert={true}
          />

          <View style={styles.infoBox}>
            <Text
              style={[
                styles.infoTitle,
                { fontFamily: theme.typography.labelMd.fontFamily },
              ]}
            >
              Cara Penggunaan:
            </Text>
            <Text
              style={[
                styles.infoText,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
            >
              Pilih wajah yang paling sesuai dengan perasaan nyeri Anda saat
              ini.
            </Text>
          </View>

          {painScale !== null && (
            <View style={styles.resultBox}>
              <Text
                style={[
                  styles.resultTitle,
                  { fontFamily: theme.typography.headlineMd.fontFamily },
                ]}
              >
                Hasil Pengukuran
              </Text>
              <View style={styles.resultContent}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultLabel}>Skala Nyeri:</Text>
                  <Text style={styles.resultValue}>{painScale}</Text>
                </View>
              </View>
              {painScale >= 8 && (
                <View style={styles.warningContainer}>
                  <Image
                    source={require("../../../assets/images/pengukuran-tingkat-nyeri/warning.png")}
                    style={styles.warningIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.warningText}>
                    Segera laporkan kepada dokter atau perawat!
                  </Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.buttonContainer}>
            <CustomButton
              title={
                painScale !== null
                  ? "Lanjut Catat Pola Nyeri"
                  : "Pilih Skala Terlebih Dahulu"
              }
              onPress={handleContinue}
              disabled={painScale === null}
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
  content: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingVertical: theme.spacing.lg,
  },
  infoBox: {
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.lg,
  },
  infoTitle: {
    fontSize: theme.typography.labelMd.fontSize,
    fontWeight: theme.typography.labelMd.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  infoText: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
  },
  resultBox: {
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.lg,
  },
  resultTitle: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onPrimaryContainer,
    marginBottom: theme.spacing.md,
  },
  resultContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  resultItem: {
    alignItems: "center",
  },
  resultLabel: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onPrimaryContainer,
    marginBottom: theme.spacing.sm,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.onPrimaryContainer,
  },
  warningContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.errorContainer,
    padding: theme.spacing.md,
    borderRadius: theme.rounded.md,
    marginTop: theme.spacing.md,
  },
  warningIcon: {
    width: 24,
    height: 24,
    marginRight: theme.spacing.sm,
  },
  warningText: {
    flex: 1,
    color: theme.colors.onErrorContainer,
    fontSize: theme.typography.bodyMd.fontSize,
    fontFamily: theme.typography.bodyMd.fontFamily,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginVertical: theme.spacing.lg,
  },
});
