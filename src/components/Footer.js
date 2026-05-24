/**
 * Footer Attribution Component
 * Menampilkan footer institusi di setiap screen
 */

import { Image, StyleSheet, Text, View } from "react-native";
import { INSTITUTION } from "../utils/constants";
import { theme } from "../utils/theme";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Image
        source={require("../../assets/images/logos/ubhi.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text
        style={[
          styles.text,
          { fontFamily: theme.typography.caption.fontFamily },
        ]}
      >
        © {INSTITUTION}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.marginMobile,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
    backgroundColor: theme.colors.surfaceContainerLowest,
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: theme.spacing.xs,
  },
  text: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.onSurfaceVariant,
    textAlign: "center",
  },
});
