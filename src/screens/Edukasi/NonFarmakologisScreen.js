/**
 * Non-Farmakologis Screen
 * Modul edukasi tentang cara redakan nyeri tanpa obat
 */

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { theme } from "../../utils/theme";

const methods = [
  {
    image: require("../../../assets/images/edukasi/redakannyeri/icon-redakannyeri.png"),
    title: "Teknik Distraksi (Pengalihan)",
    description: "Alihkan perhatian anak dari nyeri",
    activities: [
      {
        text: "Membaca buku cerita favorit",
        image: require("../../../assets/images/edukasi/redakannyeri/distraksi/baca-buku.png"),
      },
      {
        text: "Menonton video atau film",
        image: require("../../../assets/images/edukasi/redakannyeri/distraksi/nonton.png"),
      },
      {
        text: "Mendengarkan musik favorit",
        image: require("../../../assets/images/edukasi/redakannyeri/distraksi/music.png"),
      },
    ],
  },
  {
    image: require("../../../assets/images/edukasi/bijakperedanyeri/efek-samping.png"),
    title: "Relaksasi Napas Dalam",
    description: "Ajarkan teknik pernapasan untuk menenangkan",
    steps: [
      {
        text: "1. Instruksikan menarik napas dalam melalui hidung seperti menghirup aroma bunga",
        image: require("../../../assets/images/edukasi/relaksasi/tarik-napas.png"),
      },
      { text: "2. Tahan napas sebentar (2-3 detik)" },
      {
        text: "3. Tiup perlahan lewat mulut seperti meniup lilin",
        image: require("../../../assets/images/edukasi/relaksasi/hembuskan.png"),
      },
      { text: "4. Ulangi 5-10 kali atau hingga anak merasa lebih tenang" },
    ],
  },
  {
    image: require("../../../assets/images/edukasi/kenali/pemicu/suhu.png"),
    title: "Kompres",
    description: "Gunakan kompres untuk meredakan nyeri lokal",
    types: [
      {
        text: "Kompres Hangat: Untuk meredakan kram otot dan kekakuan",
        image: require("../../../assets/images/edukasi/redakannyeri/kompres/kram-otot.png"),
      },
      {
        text: "Kompres Dingin: Untuk mengurangi bengkak akibat benturan atau luka",
        image: require("../../../assets/images/edukasi/redakannyeri/kompres/kompres-dingin.png"),
      },
      { text: "Durasi: 15-20 menit, setiap 2-3 jam" },
    ],
  },
];

export default function NonFarmakologisScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Redakan Nyeri Tanpa Obat"
        subtitle="Cara Redakan Nyeri Tanpa Obat (Non-Farmakologis)"
        showInstitution={false}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {methods.map((method, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.headerContainer}>
                <Image
                  source={method.image}
                  style={styles.headerImage}
                  resizeMode="contain"
                />
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.title,
                      { fontFamily: theme.typography.headlineMd.fontFamily },
                    ]}
                  >
                    {method.title}
                  </Text>
                  <Text
                    style={[
                      styles.description,
                      { fontFamily: theme.typography.bodyMd.fontFamily },
                    ]}
                  >
                    {method.description}
                  </Text>
                </View>
              </View>

              <View style={styles.detailsContainer}>
                {method.activities && (
                  <View style={styles.itemsList}>
                    {method.activities.map((activity, idx) => (
                      <View key={idx} style={styles.listItem}>
                        {activity.image && (
                          <Image
                            source={activity.image}
                            style={styles.itemImage}
                            resizeMode="contain"
                          />
                        )}
                        <Text
                          style={[
                            styles.itemText,
                            { fontFamily: theme.typography.bodyMd.fontFamily },
                          ]}
                        >
                          <Text style={styles.bullet}>•</Text>{" "}
                          {activity.text || activity}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                {method.steps && (
                  <View style={styles.itemsList}>
                    {method.steps.map((step, idx) => (
                      <View key={idx} style={styles.listItem}>
                        {step.image && (
                          <Image
                            source={step.image}
                            style={styles.itemImage}
                            resizeMode="contain"
                          />
                        )}
                        <Text
                          style={[
                            styles.itemText,
                            { fontFamily: theme.typography.bodyMd.fontFamily },
                          ]}
                        >
                          {step.text || step}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                {method.types && (
                  <View style={styles.itemsList}>
                    {method.types.map((type, idx) => (
                      <View key={idx} style={styles.listItem}>
                        {type.image && (
                          <Image
                            source={type.image}
                            style={styles.itemImage}
                            resizeMode="contain"
                          />
                        )}
                        <Text
                          style={[
                            styles.itemText,
                            { fontFamily: theme.typography.bodyMd.fontFamily },
                          ]}
                        >
                          <Text style={styles.bullet}>•</Text>{" "}
                          {type.text || type}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
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
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    ...theme.shadows.sm,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  headerImage: {
    width: 56,
    height: 56,
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
  },
  detailsContainer: {
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  itemsList: {
    marginTop: theme.spacing.xs,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  itemImage: {
    width: 32,
    height: 32,
    marginRight: theme.spacing.sm,
  },
  bullet: {
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
  },
  itemText: {
    flex: 1,
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurface,
    lineHeight: 22,
  },
});
