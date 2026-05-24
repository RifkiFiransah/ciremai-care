import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../utils/theme";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logos/ciremai-app.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.appName,
              { fontFamily: theme.typography.headlineLg.fontFamily },
            ]}
          >
            Ciremai Care
          </Text>
          <Text
            style={[
              styles.version,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
          >
            Versi 1.0.0
          </Text>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { fontFamily: theme.typography.headlineMd.fontFamily },
            ]}
          >
            Tentang Aplikasi
          </Text>
          <Text
            style={[
              styles.paragraph,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
          >
            Ciremai Care adalah aplikasi inovatif yang dirancang khusus untuk
            membantu mengurangi respon nyeri pada anak-anak yang menjalani
            perawatan di rumah sakit.
          </Text>
          <Text
            style={[
              styles.paragraph,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
          >
            Melalui pendekatan edukasi interaktif, video animasi inspiratif
            (seperti legenda Kuda Kuningan), dan pemantauan nyeri yang mudah
            digunakan, aplikasi ini menjadi teman ceria dan berani bagi
            anak-anak serta panduan yang dapat diandalkan oleh orang tua.
          </Text>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { fontFamily: theme.typography.headlineMd.fontFamily },
            ]}
          >
            Dikembangkan Oleh
          </Text>
          <View style={styles.developerContainer}>
            <View style={styles.developerItem}>
              <MaterialCommunityIcons
                name="account-group-outline"
                size={24}
                color={theme.colors.primary}
                style={styles.developerIcon}
              />
              <View style={styles.developerList}>
                <Text style={styles.developerName}>Bunga Nanda Aristiyani</Text>
                <Text style={styles.developerName}>Nanang Saprudin</Text>
                <Text style={styles.developerName}>Neneng Aria Nengsih</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.developerItem}>
              <MaterialCommunityIcons
                name="school-outline"
                size={24}
                color={theme.colors.primary}
                style={styles.developerIcon}
              />
              <Text style={styles.institutionText}>
                Universitas Bhakti Husada Indonesia
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.marginMobile,
    paddingBottom: theme.spacing.xl * 2,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: theme.spacing.xl,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing.md,
  },
  appName: {
    fontSize: theme.typography.headlineLg.fontSize,
    fontWeight: theme.typography.headlineLg.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  version: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
  },
  section: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  sectionTitle: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.sm,
  },
  paragraph: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 24,
    marginBottom: theme.spacing.sm,
  },
  developerContainer: {
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: theme.rounded.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  developerItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  developerIcon: {
    marginRight: theme.spacing.md,
    marginTop: 2,
  },
  developerList: {
    flex: 1,
    gap: 4,
  },
  developerName: {
    fontSize: theme.typography.bodyMd.fontSize,
    fontFamily: theme.typography.labelMd.fontFamily,
    fontWeight: "600",
    color: theme.colors.onSurface,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.md,
  },
  institutionText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    fontFamily: theme.typography.bodyMd.fontFamily,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 22,
  },
});
