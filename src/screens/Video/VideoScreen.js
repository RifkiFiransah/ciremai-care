// Tambahkan 'Text' pada import di bawah ini
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { VIDEO_LINKS } from "../../utils/constants";
import { theme } from "../../utils/theme";

export default function VideoScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Video Animasi"
        subtitle="Legenda Kuda Kuningan"
        showInstitution={false}
      />

      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: VIDEO_LINKS.WELCOME_KUNINGAN }}
          style={styles.video}
          allowsFullscreenVideo={true}
          startInLoadingState={true}
          // Tambahan prop untuk optimasi player Google Drive di Android
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={() => (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          )}
          onError={() => (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                Gagal memuat video. Periksa koneksi internet Anda.
              </Text>
            </View>
          )}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: theme.spacing.marginMobile,
  },
  errorText: {
    color: "#fff",
    fontSize: theme.typography.bodyMd.fontSize,
    textAlign: "center",
  },
});
