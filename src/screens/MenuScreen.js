/**
 * Main Menu Screen
 * Menu utama untuk memilih modul
 */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { theme } from "../utils/theme";

export default function MenuScreen({ navigation }) {
  const menuItems = [
    {
      id: "edukasi",
      title: "Kenali Nyerimu",
      description: "Pelajari tentang penyebab, periode, dan pemicu nyeri",
      icon: "book-open-page-variant",
      route: "EdukasiMenu",
    },
    {
      id: "video",
      title: "Video Animasi",
      description: "Tonton cerita inspiratif dari Kota Kuningan Asri",
      icon: "animation-play",
      route: "VideoScreen",
    },
    {
      id: "ukur",
      title: "Ukur Nyerimu",
      description: "Gunakan skala Wong-Baker untuk mengukur tingkat nyeri",
      icon: "chart-bar",
      route: "UkurNyeri",
    },
    // {
    //   id: "catat",
    //   title: "Catat Pola Nyeri",
    //   description: "Simpan riwayat nyeri untuk dipantau dokter",
    //   icon: "notebook-edit",
    //   route: "CatatPola",
    // },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Ciremai Care"
        subtitle="Menu Utama"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={40}
                  color={theme.colors.primary}
                />
              </View>
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
  menuCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  iconContainer: {
    width: 48,
    height: 48,
    marginRight: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
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
