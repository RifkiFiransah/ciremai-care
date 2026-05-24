/**
 * Pantau Nyeri Screen
 * Modul edukasi tentang cara memantau skala nyeri
 */

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { theme } from "../../utils/theme";

export default function PantauNyeriScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        title="Pantau Nyeri"
        subtitle="Mengenali Skala Nyeri"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.headerContainer}>
              <Image
                source={require("../../../assets/images/edukasi/pantaunyeri/wong-baker.png")}
                style={styles.wongBakerImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  { fontFamily: theme.typography.headlineMd.fontFamily },
                ]}
              >
                Skala Wajah Wong-Baker
              </Text>
              <Text
                style={[
                  styles.description,
                  { fontFamily: theme.typography.bodyMd.fontFamily },
                ]}
              >
                Metode pengukuran intensitas nyeri pada anak-anak menggunakan
                ekspresi wajah. Anak diminta menunjuk wajah yang paling sesuai
                dengan rasa nyeri yang sedang dialaminya.
              </Text>

              <View style={styles.detailsContainer}>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 0: tidak ada rasa
                  nyeri.
                </Text>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 2: nyeri ringan.
                </Text>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 4: nyeri sedikit
                  mengganggu.
                </Text>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 6: nyeri sedang.
                </Text>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 8: nyeri berat.
                </Text>
                <Text
                  style={[
                    styles.itemText,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  <Text style={styles.bullet}>•</Text> Wajah 10: nyeri sangat
                  berat.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Image
              source={require("../../../assets/images/edukasi/pantaunyeri/icon-pantau.png")}
              style={styles.infoIconImage}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.infoText,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
            >
              Pantau secara rutin untuk mengetahui apakah tindakan pereda nyeri
              atau obat yang diberikan berhasil meredakan keluhan anak.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Praktikkan Sekarang"
              onPress={() => navigation.navigate("UkurNyeri")}
              variant="primary"
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
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    ...theme.shadows.sm,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  wongBakerImage: {
    width: "100%",
    height: 120,
  },
  textContainer: {
    paddingTop: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
    lineHeight: 22,
  },
  detailsContainer: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  itemText: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
    marginBottom: theme.spacing.sm,
  },
  bullet: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    alignItems: "center",
    marginTop: theme.spacing.md,
  },
  infoIconImage: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.md,
  },
  infoText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onPrimaryContainer,
    lineHeight: 22,
  },
  buttonContainer: {
    marginTop: theme.spacing.xl,
  },
});
