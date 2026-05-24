/**
 * Kenali Nyeri Screen
 * Modul edukasi tentang penyebab, periode, dan pemicu nyeri
 */

import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PAIN_TRIGGERS } from "../../utils/constants";
import { theme } from "../../utils/theme";

export default function KenaliNyeriScreen() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Kenali Nyerimu"
        subtitle="Penyebab, Periode, dan Pemicu"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Section: Penyebab Nyeri */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection("causes")}
            >
              <MaterialCommunityIcons name="medical-bag" size={24} color={theme.colors.primary} style={styles.sectionIcon} />
              <Text
                style={[
                  styles.sectionTitle,
                  { fontFamily: theme.typography.headlineMd.fontFamily },
                ]}
              >
                Penyebab Nyeri
              </Text>
              <Text style={styles.expandIcon}>
                {expandedSection === "causes" ? "−" : "+"}
              </Text>
            </TouchableOpacity>

            {expandedSection === "causes" && (
              <View style={styles.sectionContent}>
                {PAIN_TRIGGERS.CAUSES.map((cause) => (
                  <View key={cause.id} style={styles.itemRow}>
                    {cause.image && (
                      <Image
                        source={cause.image}
                        style={styles.itemImage}
                        resizeMode="contain"
                      />
                    )}
                    <View style={styles.itemTextContainer}>
                      <Text style={styles.itemLabel}>{cause.label}</Text>
                      <Text
                        style={[
                          styles.itemDescription,
                          { fontFamily: theme.typography.bodyMd.fontFamily },
                        ]}
                      >
                        {cause.description}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Section: Periode Nyeri */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection("periods")}
            >
              <MaterialCommunityIcons name="timer-outline" size={24} color={theme.colors.primary} style={styles.sectionIcon} />
              <Text
                style={[
                  styles.sectionTitle,
                  { fontFamily: theme.typography.headlineMd.fontFamily },
                ]}
              >
                Periode Nyeri
              </Text>
              <Text style={styles.expandIcon}>
                {expandedSection === "periods" ? "−" : "+"}
              </Text>
            </TouchableOpacity>

            {expandedSection === "periods" && (
              <View style={styles.sectionContent}>
                {PAIN_TRIGGERS.PERIODS.map((period) => (
                  <View key={period.id} style={styles.itemRow}>
                    {period.image && (
                      <Image
                        source={period.image}
                        style={styles.itemImage}
                        resizeMode="contain"
                      />
                    )}
                    <View style={styles.itemTextContainer}>
                      <Text style={styles.itemLabel}>{period.label}</Text>
                      <Text
                        style={[
                          styles.itemDescription,
                          { fontFamily: theme.typography.bodyMd.fontFamily },
                        ]}
                      >
                        {period.description}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Section: Pemicu Nyeri */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection("triggers")}
            >
              <MaterialCommunityIcons name="lightning-bolt" size={24} color={theme.colors.primary} style={styles.sectionIcon} />
              <Text
                style={[
                  styles.sectionTitle,
                  { fontFamily: theme.typography.headlineMd.fontFamily },
                ]}
              >
                Pemicu Nyeri
              </Text>
              <Text style={styles.expandIcon}>
                {expandedSection === "triggers" ? "−" : "+"}
              </Text>
            </TouchableOpacity>

            {expandedSection === "triggers" && (
              <View style={styles.sectionContent}>
                <View style={styles.triggersList}>
                  {PAIN_TRIGGERS.TRIGGERS.map((trigger, index) => (
                    <View key={index} style={styles.triggerItemRow}>
                      {trigger.image ? (
                        <Image
                          source={trigger.image}
                          style={styles.triggerImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <View style={styles.triggerImagePlaceholder} />
                      )}
                      <Text
                        style={[
                          styles.triggerText,
                          { fontFamily: theme.typography.bodyMd.fontFamily },
                        ]}
                      >
                        {trigger.label}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
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
  section: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    overflow: "hidden",
    ...theme.shadows.sm,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surfaceContainer,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  sectionTitle: {
    flex: 1,
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.onSurface,
  },
  expandIcon: {
    fontSize: 24,
    color: theme.colors.primary,
  },
  sectionContent: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  itemRow: {
    flexDirection: "row",
    marginBottom: theme.spacing.md,
    alignItems: "center",
  },
  itemImage: {
    width: 64,
    height: 64,
    marginRight: theme.spacing.md,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemLabel: {
    fontSize: theme.typography.labelMd.fontSize,
    fontWeight: theme.typography.labelMd.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  itemDescription: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
    lineHeight: 20,
  },
  triggersList: {
    paddingVertical: theme.spacing.sm,
  },
  triggerItemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: theme.spacing.sm,
    borderRadius: theme.rounded.md,
  },
  triggerImage: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.md,
  },
  triggerImagePlaceholder: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.md,
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: theme.rounded.sm,
  },
  triggerText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
  },
});
