import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Header } from "../components/Header";
import { theme } from "../utils/theme";
import { getProfile } from "../database/profileQueries";

export default function ProfileScreen({ navigation }) {
  const [profileData, setProfileData] = useState({
    name: "Pengguna Ciremai Care",
    role: "Pasien / Keluarga",
    photo_uri: null,
  });

  useFocusEffect(
    useCallback(() => {
      const loadProfile = async () => {
        try {
          const profile = await getProfile();
          if (profile) {
            setProfileData(profile);
          }
        } catch (error) {
          console.error("Failed to load profile:", error);
        }
      };

      loadProfile();
    }, [])
  );

  const handleLogout = () => {
    // Navigate and reset stack to Home so user cannot go back using hardware back button
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const menuItems = [
    {
      id: "edit",
      title: "Edit Profil",
      icon: "account-edit-outline",
      action: () => navigation.navigate("EditProfile"),
      color: theme.colors.secondary,
    },
    {
      id: "about",
      title: "Tentang Aplikasi",
      icon: "information-outline",
      action: () => navigation.navigate("About"),
      color: theme.colors.secondary,
    },
    {
      id: "help",
      title: "Bantuan Aplikasi",
      icon: "help-circle-outline",
      action: () => navigation.navigate("Help"),
      color: theme.colors.secondary,
    },
    {
      id: "logout",
      title: "Keluar Aplikasi",
      icon: "logout",
      action: handleLogout,
      color: theme.colors.error, // Merah untuk penanda keluar
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Profil"
        subtitle="Pengaturan & Informasi"
        showInstitution={false}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          {profileData.photo_uri ? (
            <Image source={{ uri: profileData.photo_uri }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <MaterialCommunityIcons
                name="account"
                size={64}
                color={theme.colors.primary}
              />
            </View>
          )}
          <Text
            style={[
              styles.userName,
              { fontFamily: theme.typography.headlineMd.fontFamily },
            ]}
          >
            {profileData.name}
          </Text>
          <Text
            style={[
              styles.userRole,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
          >
            {profileData.role || "Pasien / Keluarga"}
          </Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.action}
              activeOpacity={0.7}
            >
              <View style={styles.menuIcon}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color={item.color}
                />
              </View>
              <Text
                style={[
                  styles.menuText,
                  { fontFamily: theme.typography.bodyLg.fontFamily },
                  item.id === "logout" && { color: item.color },
                ]}
              >
                {item.title}
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={theme.colors.outlineVariant}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: theme.rounded.full,
    backgroundColor: theme.colors.surfaceContainerHigh,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: theme.rounded.full,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.outlineVariant,
  },
  userName: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  userRole: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
  },
  menuContainer: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingTop: theme.spacing.lg,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: theme.spacing.md,
    borderRadius: theme.rounded.lg,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.md,
    backgroundColor: theme.colors.surfaceContainerLow,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },
  menuText: {
    flex: 1,
    fontSize: theme.typography.bodyLg.fontSize,
    color: theme.colors.onSurface,
  },
});
