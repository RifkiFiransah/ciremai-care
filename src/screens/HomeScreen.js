/**
 * Home / Welcome Screen
 * Tampilan awal aplikasi Ciremai Care
 */

import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../utils/theme";

export default function HomeScreen({ navigation }) {
  const handleMulai = () => {
    navigation.navigate("Menu");
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image
            source={require("../../assets/images/logos/ciremai-app.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.mainTitle,
              { fontFamily: theme.typography.displayLg.fontFamily },
            ]}
          >
            CIREMAI
          </Text>
          <Text
            style={[
              styles.careTitle,
              { fontFamily: theme.typography.headlineLg.fontFamily },
            ]}
          >
            — CARE —
          </Text>
        </View>

        {/* Subtitle */}
        <Text
          style={[
            styles.subtitle,
            { fontFamily: theme.typography.labelMd.fontFamily },
          ]}
        >
          Teman Ceria, Berani & Sehat{"\n"}Saat di Rumah Sakit
        </Text>

        {/* Illustration Section */}
        {/* <View style={styles.illustrationSection}>
          <Image
            source={require("../../assets/images/beranda/welcome.png")}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View> */}

        {/* Three Pillars Section (Horizontal Card) */}
        {/* <View style={styles.pillarsCard}>
          <View style={styles.pillarItem}>
            <Ionicons
              name="book-outline"
              size={28}
              color={theme.colors.primary}
              style={styles.pillarIcon}
            />
            <Text
              style={[
                styles.pillarText,
                { fontFamily: theme.typography.caption.fontFamily },
              ]}
            >
              Storytelling{"\n"}Legenda Kuda{"\n"}Kuningan
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.pillarItem}>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={28}
              color={theme.colors.primary}
              style={styles.pillarIcon}
            />
            <Text
              style={[
                styles.pillarText,
                { fontFamily: theme.typography.caption.fontFamily },
              ]}
            >
              Tenang & Berani{"\n"}Saat Tindakan{"\n"}Invasif
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.pillarItem}>
            <Ionicons
              name="heart"
              size={28}
              color={theme.colors.primary}
              style={styles.pillarIcon}
            />
            <Text
              style={[
                styles.pillarText,
                { fontFamily: theme.typography.caption.fontFamily },
              ]}
            >
              Mengurangi{"\n"}Kecemasan &{"\n"}Respon Nyeri
            </Text>
          </View>
        </View> */}

        {/* Custom Start Button (Pill Shape with Arrow) */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleMulai}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.startButtonText,
              { fontFamily: theme.typography.labelMd.fontFamily },
            ]}
          >
            Mulai
          </Text>
          <View style={styles.arrowContainer}>
            <Ionicons
              name="arrow-forward"
              size={20}
              color={theme.colors.onPrimary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // Menggunakan warna biru muda sesuai mockup (primaryFixed atau secondaryContainer)
    backgroundColor: theme.colors.primaryFixed || "#c3e8ff",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // --- LOGO ---
  logoSection: {
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  logoImage: {
    width: 220,
    height: 220,
  },

  // --- TYPOGRAPHY ---
  titleContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  mainTitle: {
    fontSize: theme.typography.displayLg.fontSize,
    fontWeight: "900",
    color: theme.colors.primary,
    letterSpacing: 1,
    lineHeight: 50,
  },
  careTitle: {
    fontSize: 28,
    fontWeight: theme.typography.headlineLg.fontWeight,
    color: theme.colors.primary,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: theme.typography.bodyMd.fontSize,
    fontWeight: "700",
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: theme.spacing.lg,
    lineHeight: 22,
  },

  // --- ILLUSTRATION ---
  illustrationSection: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: -20, // Menarik gambar sedikit ke atas agar lebih rapat
  },
  illustrationImage: {
    width: "110%", // Dibuat lebih lebar agar ujung kasur menyentuh tepi layar
    height: "100%",
  },

  // --- PILLARS CARD (HORIZONTAL) ---
  pillarsCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.surfaceContainerLowest, // #ffffff
    borderRadius: theme.rounded.xl,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    width: "100%",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xl,
    // Soft Elevation / Shadow (Level 1)
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 3,
  },
  pillarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 2,
  },
  pillarIcon: {
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceContainerLow,
    padding: 8,
    borderRadius: theme.rounded.md,
    overflow: "hidden", // Pastikan background membulat
  },
  pillarText: {
    fontSize: 11, // Dikecilkan sedikit agar muat sejajar 3 kolom
    fontWeight: "600",
    color: theme.colors.primary,
    textAlign: "center",
    lineHeight: 16,
  },
  divider: {
    width: 1,
    backgroundColor: theme.colors.surfaceVariant,
    height: "80%",
    alignSelf: "center",
    opacity: 0.5,
  },

  // --- BUTTON ---
  startButton: {
    flexDirection: "row",
    backgroundColor: theme.colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: theme.rounded.full, // Pil shape
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  startButtonText: {
    color: theme.colors.onPrimary,
    fontSize: theme.typography.bodyLg.fontSize,
    fontWeight: "700",
    marginRight: 10,
  },
  arrowContainer: {
    backgroundColor: "rgba(255,255,255,0.2)", // Transparansi putih
    borderRadius: 20,
    padding: 4,
    position: "absolute",
    right: 20,
  },
});
