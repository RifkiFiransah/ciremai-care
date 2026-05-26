import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useDatabase } from "../../hooks/useDatabase";
import { WONG_BAKER_SCALE } from "../../utils/constants";
import { theme } from "../../utils/theme";

export default function RiwayatNyeriScreen({ navigation }) {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { getAllPainLogs, isReady } = useDatabase();
  const [expandedId, setExpandedId] = useState(null);

  const fetchLogs = useCallback(async () => {
    if (!isReady) return;
    try {
      const data = await getAllPainLogs();
      setLogs(data || []);
    } catch (error) {
      console.error("Failed to fetch logs:", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [isReady, getAllPainLogs]);

  useFocusEffect(
    useCallback(() => {
      fetchLogs();
    }, [fetchLogs]),
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchLogs();
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedId === item.id;
    const scaleInfo = WONG_BAKER_SCALE[item.wong_baker_scale] || {
      label: "Tingkat Nyeri " + item.wong_baker_scale,
    };

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => toggleExpand(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.cardHeader}>
          <View style={styles.scaleContainer}>
            <Text style={styles.scaleText}>{item.wong_baker_scale}</Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.dateText}>{formatDate(item.created_at)}</Text>
            <Text style={styles.scaleLabelText}>{scaleInfo.label}</Text>
            <Text style={styles.locationText}>{scaleInfo.description}</Text>
          </View>
          <MaterialCommunityIcons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={24}
            color={theme.colors.onSurfaceVariant}
          />
        </View>

        {isExpanded && (
          <View style={styles.cardDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Skala Nyeri:</Text>
              <Text style={styles.detailValue}>
                {item.wong_baker_scale} : {scaleInfo.label}
              </Text>
            </View>
            
            {item.nama_anak ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Nama Anak:</Text>
                <Text style={styles.detailValue}>{item.nama_anak}</Text>
              </View>
            ) : null}
            {item.usia ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Usia:</Text>
                <Text style={styles.detailValue}>{item.usia}</Text>
              </View>
            ) : null}
            {item.jenis_kelamin ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Jenis Kelamin:</Text>
                <Text style={styles.detailValue}>{item.jenis_kelamin}</Text>
              </View>
            ) : null}
            {item.pengalaman_dirawat ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Pernah Dirawat:</Text>
                <Text style={styles.detailValue}>{item.pengalaman_dirawat}</Text>
              </View>
            ) : null}
            {item.tindakan_invasif ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Tindakan Invasif:</Text>
                <Text style={styles.detailValue}>{item.tindakan_invasif}</Text>
              </View>
            ) : null}
            {item.waktu_pengukuran ? (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Waktu Pengukuran:</Text>
                <Text style={styles.detailValue}>{item.waktu_pengukuran}</Text>
              </View>
            ) : null}

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Waktu Muncul:</Text>
              <Text style={styles.detailValue}>{item.waktu_muncul}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Lokasi Nyeri:</Text>
              <Text style={styles.detailValue}>{item.lokasi_nyeri}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Pemicu/Peredan:</Text>
              <Text style={styles.detailValue}>{item.pemicu_peredan}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  if (!isReady || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title="Riwayat Nyeri"
        subtitle="Daftar pencatatan pola nyeri Anda"
        showInstitution={false}
      />
      <View style={styles.content}>
        {logs.length === 0 ? (
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={64}
              color={theme.colors.outline}
            />
            <Text style={styles.emptyText}>Belum ada riwayat nyeri.</Text>
            <Text style={styles.emptySubText}>
              Silakan catat pola nyeri Anda melalui menu Catat Pola Nyeri.
            </Text>
          </View>
        ) : (
          <FlatList
            data={logs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[theme.colors.primary]}
              />
            }
          />
        )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
  },
  listContainer: {
    padding: theme.spacing.marginMobile,
    paddingBottom: theme.spacing.xl,
  },
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  scaleContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },
  scaleText: {
    fontSize: theme.typography.headlineSm?.fontSize || 24,
    fontWeight: "bold",
    color: theme.colors.onPrimaryContainer,
  },
  headerTextContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: theme.typography.labelMd?.fontSize || 14,
    fontWeight: "bold",
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  scaleLabelText: {
    fontSize: theme.typography.bodyMd?.fontSize || 14,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 2,
  },
  locationText: {
    fontSize: theme.typography.bodyMd?.fontSize || 14,
    color: theme.colors.onSurfaceVariant,
  },
  cardDetails: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  detailRow: {
    marginBottom: theme.spacing.sm,
  },
  detailLabel: {
    fontSize: theme.typography.labelSm?.fontSize || 12,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 2,
  },
  detailValue: {
    fontSize: theme.typography.bodyMd?.fontSize || 14,
    color: theme.colors.onSurface,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
  },
  emptyText: {
    fontSize: theme.typography.headlineSm?.fontSize || 18,
    fontWeight: "bold",
    color: theme.colors.onSurface,
    marginTop: theme.spacing.md,
    textAlign: "center",
  },
  emptySubText: {
    fontSize: theme.typography.bodyMd?.fontSize || 14,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.sm,
    textAlign: "center",
  },
});
