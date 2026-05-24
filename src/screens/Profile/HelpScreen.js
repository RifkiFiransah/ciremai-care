import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../utils/theme";

export default function HelpScreen() {
  const faqs = [
    {
      id: "1",
      question: "Bagaimana cara menggunakan aplikasi ini?",
      answer:
        "Anda dapat memulai dengan memilih modul 'Edukasi' untuk mempelajari tentang nyeri, atau menonton 'Video Animasi' bersama anak untuk memberikan distraksi yang menyenangkan sebelum sampai tindakan Invasif selesai.",
      icon: "cellphone-play",
    },
    {
      id: "2",
      question: "Bagaimana cara mengukur nyeri anak?",
      answer:
        "Buka menu 'Ukur Nyerimu'. Anda akan menemukan skala wajah Wong-Baker. Minta anak untuk menunjuk wajah yang paling sesuai dengan rasa sakit yang mereka rasakan saat ini.",
      icon: "face-man",
    },
    {
      id: "3",
      question: "Di mana saya dapat mencatat riwayat nyeri?",
      answer:
        "Gunakan fitur 'Catat Pola Nyeri'. Di sana Anda bisa memasukkan tingkat nyeri, lokasi, dan apa yang sedang dilakukan anak saat nyeri muncul. Catatan ini sangat berguna bagi dokter dan perawat.",
      icon: "notebook",
    },
    {
      id: "4",
      question: "Apa itu teknik distraksi?",
      answer:
        "Distraksi adalah cara mengalihkan perhatian anak dari rasa sakit, misalnya dengan menonton video, mendengarkan musik, atau membacakan cerita. Anda bisa membaca panduan lengkapnya di menu 'Edukasi'.",
      icon: "music-circle-outline",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text
          style={[
            styles.headerTitle,
            { fontFamily: theme.typography.headlineLg.fontFamily },
          ]}
        >
          Bantuan & Panduan
        </Text>
        <Text
          style={[
            styles.headerDesc,
            { fontFamily: theme.typography.bodyLg.fontFamily },
          ]}
        >
          Temukan jawaban atas pertanyaan umum seputar penggunaan aplikasi
          Ciremai Care.
        </Text>

        <View style={styles.faqContainer}>
          {faqs.map((faq) => (
            <View key={faq.id} style={styles.faqCard}>
              <View style={styles.faqHeader}>
                <MaterialCommunityIcons
                  name={faq.icon}
                  size={24}
                  color={theme.colors.primary}
                  style={styles.faqIcon}
                />
                <Text
                  style={[
                    styles.question,
                    { fontFamily: theme.typography.headlineMd.fontFamily },
                  ]}
                >
                  {faq.question}
                </Text>
              </View>
              <Text
                style={[
                  styles.answer,
                  { fontFamily: theme.typography.bodyMd.fontFamily },
                ]}
              >
                {faq.answer}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.marginMobile,
    paddingBottom: theme.spacing.xl * 2,
  },
  headerTitle: {
    fontSize: theme.typography.headlineLg.fontSize,
    fontWeight: theme.typography.headlineLg.fontWeight,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },
  headerDesc: {
    fontSize: theme.typography.bodyLg.fontSize,
    color: theme.colors.onSurfaceVariant,
    marginBottom: theme.spacing.xl,
  },
  faqContainer: {
    gap: theme.spacing.md,
  },
  faqCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  faqHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  faqIcon: {
    marginRight: theme.spacing.sm,
  },
  question: {
    flex: 1,
    fontSize: theme.typography.headlineMd.fontSize,
    fontWeight: theme.typography.headlineMd.fontWeight,
    color: theme.colors.secondary,
  },
  answer: {
    fontSize: theme.typography.bodyMd.fontSize,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 24,
  },
});
