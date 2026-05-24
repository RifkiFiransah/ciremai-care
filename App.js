/**
 * Entry Point Aplikasi Ciremai Care
 * Menggunakan React Navigation untuk manajemen navigation
 */

import "react-native-gesture-handler";
import { useEffect, useCallback } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { useDatabase } from "./src/hooks/useDatabase";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { theme } from "./src/utils/theme";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isReady: isDbReady, error: dbError } = useDatabase();
  
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    Manrope: Manrope_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if ((isDbReady && fontsLoaded) || dbError || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [isDbReady, fontsLoaded, dbError, fontError]);

  if (!isDbReady || !fontsLoaded) {
    return null; // Return null to keep splash screen visible
  }

  if (dbError || fontError) {
    return (
      <View
        onLayout={onLayoutRootView}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          paddingHorizontal: theme.spacing.marginMobile,
        }}
      >
        <Text style={{ color: theme.colors.error, textAlign: "center" }}>
          Terjadi kesalahan saat inisialisasi:
          {"\n"}
          {dbError ? dbError.message : fontError?.message}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
