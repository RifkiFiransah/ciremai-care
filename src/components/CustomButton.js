/**
 * Custom Button Component
 * Menggunakan design tokens dari theme.js
 */

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { theme } from "../utils/theme";

export function CustomButton({
  onPress,
  title,
  variant = "primary", // 'primary' atau 'secondary'
  size = "md", // 'sm', 'md', 'lg'
  disabled = false,
  loading = false,
  style,
}) {
  const isPrimary = variant === "primary";
  const isSmall = size === "sm";
  const isMedium = size === "md";
  const isLarge = size === "lg";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        isSmall && styles.small,
        isMedium && styles.medium,
        isLarge && styles.large,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? "#fff" : theme.colors.primary} />
      ) : (
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
            isSmall && styles.textSmall,
            isMedium && styles.textMedium,
            isLarge && styles.textLarge,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounded.DEFAULT,
    paddingHorizontal: theme.spacing.md,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  small: {
    paddingVertical: theme.spacing.sm,
  },
  medium: {
    paddingVertical: theme.spacing.md,
  },
  large: {
    paddingVertical: theme.spacing.lg,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontFamily: theme.typography.labelMd.fontFamily,
    fontWeight: theme.typography.labelMd.fontWeight,
    fontSize: theme.typography.labelMd.fontSize,
  },
  primaryText: {
    color: theme.colors.onPrimary,
  },
  secondaryText: {
    color: theme.colors.primary,
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: theme.typography.labelMd.fontSize,
  },
  textLarge: {
    fontSize: 16,
  },
});
