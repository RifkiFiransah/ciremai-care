// Atau langsung definisikan object-nya di sini sesuai design.md:

export const theme = {
  colors: {
    surface: "#f8fafc",
    surfaceDim: "#e2e8f0",
    surfaceBright: "#ffffff",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f8fafc",
    surfaceContainer: "#f1f5f9",
    surfaceContainerHigh: "#e2e8f0",
    surfaceContainerHighest: "#cbd5e1",
    onSurface: "#002d44",
    onSurfaceVariant: "#475569",
    inverseSurface: "#001a2c",
    inverseOnSurface: "#f8fafc",
    outline: "#94a3b8",
    outlineVariant: "#cbd5e1",
    surfaceTint: "#0099cc",
    primary: "#0099cc", // Primary Blue
    onPrimary: "#ffffff",
    primaryContainer: "#e0f2fe",
    onPrimaryContainer: "#002d44",
    inversePrimary: "#7dd3fc",
    secondary: "#002d44", // Secondary Deep Navy
    onSecondary: "#ffffff",
    secondaryContainer: "#e2e8f0",
    onSecondaryContainer: "#001a2c",
    tertiary: "#8bc34a", // Tertiary Green (leaf motif)
    onTertiary: "#ffffff",
    error: "#ba1a1a",
    background: "#f8fafc", // Neutral Slate
    onBackground: "#002d44",
  },
  typography: {
    displayLg: {
      fontFamily: "Manrope",
      fontSize: 48,
      fontWeight: "800",
      lineHeight: 56,
    },
    headlineLg: {
      fontFamily: "Manrope",
      fontSize: 32,
      fontWeight: "700",
      lineHeight: 40,
    },
    headlineLgMobile: {
      fontFamily: "Manrope",
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 32,
    },
    headlineMd: {
      fontFamily: "Manrope",
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 28,
    },
    bodyLg: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 28,
    },
    bodyMd: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 24,
    },
    labelMd: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 20,
    },
    caption: {
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 16,
    },
  },
  rounded: {
    sm: 4,
    DEFAULT: 8, // Untuk Button & Input
    md: 12,
    lg: 16, // Untuk Containers & Cards
    xl: 24,
    full: 9999, // Untuk Status Tags/Chips
  },
  spacing: {
    unit: 4,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
    gutter: 16,
    marginMobile: 20,
    marginDesktop: 64,
  },
  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2.22,
      elevation: 2,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 3,
    },
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5.46,
      elevation: 5,
    },
  },
};
