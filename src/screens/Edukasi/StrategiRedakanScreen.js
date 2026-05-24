/**
 * Strategi Redakan Nyeri Screen
 * Modul edukasi tentang strategi meredakan nyeri
 */

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { theme } from "../../utils/theme";

const strategies = [
  {
    image: require("../../../assets/images/edukasi/bijakperedanyeri/dokter.png"),
    title: "Ciptakan Lingkungan Nyaman",
    description: "Jaga suhu ruangan tetap sejuk dan nyaman untuk anak",
    details: [
      {
        text: "Berada di lingkungan dengan suhu yang sejuk dan stabil.",
        image: require("../../../assets/images/edukasi/strategi/lingkungan/sejuk.png"),
      },
      {
        text: "Atur posisi agar tidak terlalu banyak gerakan.",
        image: require("../../../assets/images/edukasi/strategi/lingkungan/gerakan.png"),
      },
    ],
  },
  {
    image: require("../../../assets/images/edukasi/kenali/icon-kenali.png"),
    title: "Kombinasi Terapi",
    description: "Gabungkan berbagai metode untuk hasil optimal",
    details: [
      {
        text: "Pelukan orang tua untuk memberikan rasa aman",
        image: require("../../../assets/images/edukasi/strategi/kombinasi/pelukan-ortu.png"),
      },
      {
        text: "Relaksasi dan teknik pernapasan dalam",
        image: require("../../../assets/images/edukasi/strategi/kombinasi/relaksasi.png"),
      },
      {
        text: "Obat pereda nyeri sesuai resep dokter",
        image: require("../../../assets/images/edukasi/strategi/kombinasi/obat-suntik.png"),
      },
    ],
  },
  {
    image: require("../../../assets/images/edukasi/redakannyeri/icon-redakannyeri.png"),
    title: "Dukungan Emosional",
    description: "Berikan ketenangan dan dampingan penuh",
    details: [
      {
        text: "Beri ketenangan kepada anak, serta hindari suasana panik.",
        image: require("../../../assets/images/edukasi/strategi/dukungan/ketenangan.png"),
      },
      {
        text: "Temani anak selama masa pemulihan untuk mengurangi kecemasan.",
        image: require("../../../assets/images/edukasi/strategi/dukungan/temani-anak.png"),
      },
    ],
  },
];

export default function StrategiRedakanScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Strategi Meredakan Nyeri"
        subtitle="Langkah-langkah Penanganan"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {strategies.map((strategy, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.headerContainer}>
                <Image
                  source={strategy.image}
                  style={styles.headerImage}
                  resizeMode="contain"
                />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.title,
                      { fontFamily: theme.typography.headlineMd.fontFamily },
                    ]}
                  >
                    {strategy.title}
                  </Text>
                  <Text
                    style={[
                      styles.description,
                      { fontFamily: theme.typography.bodyMd.fontFamily },
                    ]}
                  >
                    {strategy.description}
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />

              {strategy.details.map((detail, idx) => (
                <View key={idx} style={styles.detailRow}>
                  <Image
                    source={detail.image}
                    style={styles.detailImage}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.detailsText,
                      { fontFamily: theme.typography.bodyMd.fontFamily },
                    ]}
                  >
                    {detail.text}
                  </Text>
                </View>
              ))}
            </View>
          ))}

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Image
              source={require("../../../assets/images/edukasi/strategi/icon-strategi.png")}
              style={styles.infoIconImage}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.infoText,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
            >
              Kombinasi dari ketiga strategi ini akan memberikan hasil terbaik
              dalam membantu anak mengatasi nyeri mereka.
            </Text>
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
    flexDirection: "row",
    alignItems: "center",
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
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.md,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  detailImage: {
    width: 32,
    height: 32,
    marginRight: theme.spacing.sm,
  },
  detailsText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    alignItems: "center",
    marginTop: theme.spacing.lg,
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
});
