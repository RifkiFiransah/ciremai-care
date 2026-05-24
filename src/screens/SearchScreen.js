import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Header } from "../components/Header";
import { theme } from "../utils/theme";

// Daftar fitur dan halaman dalam aplikasi untuk pencarian
const appFeatures = [
  {
    id: "1",
    title: "Kenali Nyerimu",
    description: "Pelajari tentang penyebab, periode, dan pemicu nyeri",
    route: "KenaliNyeri",
    icon: "book-open-page-variant",
  },
  {
    id: "2",
    title: "Video Animasi",
    description: "Tonton cerita inspiratif mengurangi kecemasan anak",
    route: "VideoScreen",
    icon: "animation-play",
  },
  {
    id: "3",
    title: "Ukur Nyerimu",
    description: "Gunakan skala Wong-Baker untuk mengukur tingkat nyeri",
    route: "UkurNyeri",
    icon: "chart-bar",
  },
  {
    id: "4",
    title: "Catat Pola Nyeri",
    description: "Simpan riwayat nyeri untuk dipantau dokter",
    route: "CatatPola",
    icon: "notebook-edit",
  },
  {
    id: "5",
    title: "Pantau Nyeri",
    description: "Cara jitu memantau nyeri pada anak",
    route: "PantauNyeri",
    icon: "eye-check",
  },
  {
    id: "6",
    title: "Bijak Pereda Nyeri",
    description: "Panduan dan jadwal minum obat",
    route: "BijakPeredaNyeri",
    icon: "pill",
  },
  {
    id: "7",
    title: "Strategi Redakan Nyeri",
    description: "Langkah-langkah meredakan nyeri anak",
    route: "StrategiRedakan",
    icon: "shield-cross",
  },
  {
    id: "8",
    title: "Redakan Tanpa Obat",
    description: "Terapi non-farmakologis untuk anak",
    route: "NonFarmakologis",
    icon: "leaf",
  },
];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filter fitur berdasarkan input pengguna
  const filteredFeatures = appFeatures.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={item.icon}
          size={28}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.resultTitle,
            { fontFamily: theme.typography.headlineMd.fontFamily },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.resultDesc,
            { fontFamily: theme.typography.bodyMd.fontFamily },
          ]}
        >
          {item.description}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={theme.colors.outlineVariant}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Pencarian"
        subtitle="Cari informasi dan fitur"
        showInstitution={false}
      />

      <View style={styles.searchContainer}>
        <View
          style={[
            styles.searchInputWrapper,
            isFocused && styles.searchInputFocused,
          ]}
        >
          <MaterialCommunityIcons
            name="magnify"
            size={24}
            color={isFocused ? theme.colors.primary : theme.colors.outline}
            style={styles.searchIcon}
          />
          <TextInput
            style={[
              styles.searchInput,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
            placeholder="Cari 'Ukur Nyeri', 'Video'..."
            placeholderTextColor={theme.colors.outline}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <MaterialCommunityIcons
                name="close-circle"
                size={20}
                color={theme.colors.outline}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filteredFeatures}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={64}
              color={theme.colors.outlineVariant}
            />
            <Text
              style={[
                styles.emptyText,
                { fontFamily: theme.typography.bodyLg.fontFamily },
              ]}
            >
              Tidak ada hasil yang ditemukan untuk "{searchQuery}"
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  searchContainer: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.rounded.DEFAULT,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    paddingHorizontal: theme.spacing.md,
    height: 48,
  },
  searchInputFocused: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surfaceBright,
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
    height: "100%",
  },
  listContent: {
    padding: theme.spacing.marginMobile,
  },
  resultCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: theme.rounded.md,
    backgroundColor: theme.colors.surfaceContainerLow,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
    paddingRight: theme.spacing.sm,
  },
  resultTitle: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  resultDesc: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing.xl * 2,
  },
  emptyText: {
    marginTop: theme.spacing.md,
    fontSize: theme.typography.bodyLg.fontSize,
    color: theme.colors.onSurfaceVariant,
    textAlign: "center",
  },
});
