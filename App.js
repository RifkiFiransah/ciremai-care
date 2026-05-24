/**
 * Entry Point Aplikasi Ciremai Care
 * Menggunakan React Navigation untuk manajemen navigation
 */

import { ActivityIndicator, Text, View } from "react-native";
import { useDatabase } from "./src/hooks/useDatabase";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { theme } from "./src/utils/theme";

export default function App() {
  const { isReady, error } = useDatabase();

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          paddingHorizontal: theme.spacing.marginMobile,
        }}
      >
        <Text style={{ color: theme.colors.error, textAlign: "center" }}>
          Terjadi kesalahan saat menginisialisasi database:
          {"\n"}
          {error.message}
        </Text>
      </View>
    );
  }

  return <AppNavigator />;
}
