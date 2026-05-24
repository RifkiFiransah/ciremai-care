/**
 * Header Component
 * Menampilkan header dengan logo dan institusi
 */

import { StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/theme";

export function Header({ title, subtitle, showInstitution = true }) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <View style={styles.textColumn}>
          {title && (
            <Text
              style={[
                styles.title,
                { fontFamily: theme.typography.headlineLg.fontFamily },
              ]}
            >
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                { fontFamily: theme.typography.bodyMd.fontFamily },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.spacing.marginMobile,
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.xs,
  },
  textColumn: {
    flex: 1,
    paddingRight: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.headlineLg.fontSize,
    fontWeight: theme.typography.headlineLg.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.bodyMd.fontSize,
    fontWeight: theme.typography.bodyMd.fontWeight,
    color: theme.colors.onSurfaceVariant,
  },
});
