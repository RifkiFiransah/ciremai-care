/**
 * Wong-Baker Faces Pain Scale Component
 * Menampilkan 6 wajah untuk pengukuran nyeri (0, 2, 4, 6, 8, 10)
 */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ALERT_MESSAGES, WONG_BAKER_SCALE } from "../utils/constants";
import { theme } from "../utils/theme";

// Icon faces untuk Wong-Baker Scale
const FACE_ICONS = {
  0: "emoticon-happy-outline",
  2: "emoticon-outline",
  4: "emoticon-neutral-outline",
  6: "emoticon-sad-outline",
  8: "emoticon-frown-outline",
  10: "emoticon-cry-outline",
};

export function WongBakerScale({
  value,
  onChange,
  previousValue = null,
  showAlert = true,
}) {
  const [selected, setSelected] = useState(value || null);

  const handleSelectScale = (scale) => {
    setSelected(scale);
    onChange(scale);

    // Trigger alert jika skala meningkat dan showAlert = true
    if (showAlert && previousValue !== null && scale > previousValue) {
      Alert.alert("Perhatian!", ALERT_MESSAGES.PAIN_INCREASE, [
        { text: "OK", onPress: () => {} },
      ]);
    }
  };

  const scaleValues = [0, 2, 4, 6, 8, 10];

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          { fontFamily: theme.typography.headlineMd.fontFamily },
        ]}
      >
        Berapa Tingkat Nyerimu?
      </Text>

      {selected !== null && (
        <View style={styles.selectedInfo}>
          <Text
            style={[
              styles.selectedLabel,
              { fontFamily: theme.typography.labelMd.fontFamily },
            ]}
          >
            {WONG_BAKER_SCALE[selected].label}
          </Text>
          <Text
            style={[
              styles.selectedDescription,
              { fontFamily: theme.typography.bodyMd.fontFamily },
            ]}
          >
            {WONG_BAKER_SCALE[selected].description}
          </Text>
        </View>
      )}

      <View style={styles.scaleContainer}>
        {scaleValues.map((scale) => (
          <TouchableOpacity
            key={scale}
            style={[
              styles.faceButton,
              selected === scale && styles.faceButtonSelected,
            ]}
            onPress={() => handleSelectScale(scale)}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={FACE_ICONS[scale]}
                size={36}
                color={
                  selected === scale
                    ? theme.colors.onPrimary
                    : theme.colors.primary
                }
                style={{ marginHorizontal: "10px" }}
              />
            </View>
            <Text
              style={[
                styles.faceLabel,
                { fontFamily: theme.typography.caption.fontFamily },
                selected === scale && { color: theme.colors.onPrimary },
              ]}
            >
              {scale}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.legend}>
        <Text
          style={[
            styles.legendText,
            { fontFamily: theme.typography.caption.fontFamily },
          ]}
        >
          0 = Tidak Nyeri | 10 = Nyeri Sangat Berat
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "0px",
  },
  title: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.lg,
    textAlign: "center",
  },
  selectedInfo: {
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  selectedLabel: {
    fontSize: theme.typography.labelMd.fontSize,
    color: theme.colors.onPrimaryContainer,
    marginBottom: theme.spacing.xs,
  },
  selectedDescription: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onPrimaryContainer,
    fontStyle: "italic",
  },
  scaleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.lg,
  },
  faceButton: {
    alignItems: "center",
    padding: theme.spacing.xs,
    marginHorizontal: theme.spacing.xs,
    borderRadius: theme.rounded.lg,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    backgroundColor: theme.colors.surfaceContainerLowest,
  },
  faceButtonSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
  iconContainer: {
    marginBottom: theme.spacing.xs,
    marginHorizontal: "10px",
  },
  faceLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.onSurface,
  },
  legend: {
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: theme.rounded.md,
    padding: theme.spacing.sm,
  },
  legendText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.onSurfaceVariant,
    textAlign: "center",
  },
});
