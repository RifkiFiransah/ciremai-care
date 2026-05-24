/**
 * Bijak Pereda Nyeri Screen
 * Modul edukasi tentang penggunaan obat-obatan
 */

import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { theme } from "../../utils/theme";

const guidelines = [
  {
    image: require('../../../assets/images/edukasi/bijakperedanyeri/jadwal-minumobat.png'),
    title: "Sesuai Jadwal",
    description: "Patuhi jadwal dan dosis yang diberikan",
    details: [
      { text: "Jangan mengubah dosis tanpa seizin dokter atau perawat." },
      { text: "Pemberian obat pereda nyeri harus teratur sesuai instruksi agar efektif." },
    ],
  },
  {
    image: require('../../../assets/images/edukasi/bijakperedanyeri/efek-samping.png'),
    title: "Kenali Efek Samping",
    description: "Amati respon anak setelah minum obat",
    details: [
      { text: "Beberapa obat mungkin menyebabkan kantuk ringan atau mual." },
      { text: "Pastikan anak tetap terhidrasi dengan baik." },
    ],
  },
  {
    image: require('../../../assets/images/edukasi/bijakperedanyeri/dokter.png'),
    title: "Konsultasi Dokter",
    description: "Selalu laporkan perkembangan nyeri anak",
    details: [
      { text: "Hubungi petugas medis jika nyeri tidak berkurang setelah pemberian obat." },
      { text: "Segera laporkan jika terjadi efek samping yang tidak biasa seperti ruam atau kesulitan bernapas." },
    ],
  },
];

export default function BijakPeredaNyeriScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Bijak Gunakan Obat"
        subtitle="Farmakologis"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {guidelines.map((guide, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.headerContainer}>
                <Image source={guide.image} style={styles.headerImage} resizeMode="contain" />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.title,
                      { fontFamily: theme.typography.headlineMd.fontFamily },
                    ]}
                  >
                    {guide.title}
                  </Text>
                  <Text
                    style={[
                      styles.description,
                      { fontFamily: theme.typography.bodyMd.fontFamily },
                    ]}
                  >
                    {guide.description}
                  </Text>
                </View>
              </View>

              <View style={styles.detailsContainer}>
                <View style={styles.itemsList}>
                  {guide.details.map((detail, idx) => (
                    <View key={idx} style={styles.listItem}>
                      <Text
                        style={[
                          styles.itemText,
                          { fontFamily: theme.typography.bodyMd.fontFamily },
                        ]}
                      >
                        <Text style={styles.bullet}>•</Text> {detail.text}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  headerImage: {
    width: 56,
    height: 56,
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
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
  },
  detailsContainer: {
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  itemsList: {
    marginTop: theme.spacing.xs,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm,
  },
  bullet: {
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
  },
  itemText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
  },
});