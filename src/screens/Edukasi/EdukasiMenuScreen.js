/**
 * Edukasi Menu Screen
 * Menu untuk memilih sub-modul edukasi
 */

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { theme } from "../../utils/theme";

export default function EdukasiMenuScreen({ navigation }) {
  const edukasiItems = [
    {
      id: "kenali",
      title: "Kenali Nyerimu",
      description: "Penyebab, Periode, dan Pemicu Nyeri",
      image: require("../../../assets/images/edukasi/kenali/icon-kenali.png"),
      route: "KenaliNyeri",
    },
    {
      id: "pantau",
      title: "Memantau Nyeri",
      description: "Pahami cara memantau respons nyeri anak",
      image: require("../../../assets/images/edukasi/pantaunyeri/icon-pantau.png"),
      route: "PantauNyeri",
    },
    {
      id: "strategi",
      title: "Strategi Meredakan Nyeri",
      description: "Langkah-langkah penanganan nyeri yang efektif",
      image: require("../../../assets/images/edukasi/strategi/icon-strategi.png"),
      route: "StrategiRedakan",
    },
    {
      id: "nonfarmakologi",
      title: "Redakan Tanpa Obat",
      description: "Teknik distraksi, relaksasi, dan kompres",
      image: require("../../../assets/images/edukasi/redakannyeri/icon-redakannyeri.png"),
      route: "NonFarmakologis",
    },
    {
      id: "bijakobat",
      title: "Bijak Gunakan Obat",
      description: "Panduan aman terapi farmakologis",
      image: require("../../../assets/images/edukasi/bijakperedanyeri/icon-bijak-obat.png"),
      route: "BijakPeredaNyeri",
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Modul Edukasi"
        subtitle="Kenali Nyerimu"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {edukasiItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.edukasiCard}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.7}
            >
              <Image
                source={item.image}
                style={styles.cardIconImage}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.title,
                    { fontFamily: theme.typography.headlineMd.fontFamily },
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.description,
                    { fontFamily: theme.typography.bodyMd.fontFamily },
                  ]}
                >
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
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
  edukasiCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    ...theme.shadows.sm,
  },
  cardIconImage: {
    width: 48,
    height: 48,
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
  },
});
