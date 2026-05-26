import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../utils/theme";

// Import Screens
import EdukasiMenuScreen from "../screens/Edukasi/EdukasiMenuScreen";
import KenaliNyeriScreen from "../screens/Edukasi/KenaliNyeriScreen";
import NonFarmakologisScreen from "../screens/Edukasi/NonFarmakologisScreen";
import StrategiRedakanScreen from "../screens/Edukasi/StrategiRedakanScreen";
import PantauNyeriScreen from "../screens/Edukasi/PantauNyeriScreen";
import BijakPeredaNyeriScreen from "../screens/Edukasi/BijakPeredaNyeriScreen";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CatatPolaScreen from "../screens/Nyeri/CatatPolaScreen";
import UkurNyeriScreen from "../screens/Nyeri/UkurNyeriScreen";
import RiwayatNyeriScreen from "../screens/Nyeri/RiwayatNyeriScreen";
import VideoScreen from "../screens/Video/VideoScreen";

// Import Profile Sub-Screens
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import AboutScreen from "../screens/Profile/AboutScreen";
import HelpScreen from "../screens/Profile/HelpScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surfaceBright, // High contrast white
          borderTopWidth: 1,
          borderTopColor: theme.colors.outlineVariant,
          elevation: 8,
          shadowColor: theme.colors.secondary,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: theme.colors.primary, // Primary Blue
        tabBarInactiveTintColor: theme.colors.secondary, // Secondary Deep Navy
        tabBarLabelStyle: {
          fontFamily: theme.typography.labelMd?.fontFamily,
          fontSize: 12, // slightly smaller for tab labels
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.onPrimary,
          headerTitleStyle: {
            fontFamily: theme.typography.headlineMd?.fontFamily,
            fontWeight: theme.typography.headlineMd?.fontWeight,
            fontSize: 18,
          },
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Main Tabs */}
        <Stack.Screen
          name="Menu"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        {/* Edukasi Screens */}
        <Stack.Screen
          name="EdukasiMenu"
          component={EdukasiMenuScreen}
          options={{
            title: "Modul Edukasi",
          }}
        />

        <Stack.Screen
          name="KenaliNyeri"
          component={KenaliNyeriScreen}
          options={{
            title: "Kenali Nyerimu",
          }}
        />

        <Stack.Screen
          name="StrategiRedakan"
          component={StrategiRedakanScreen}
          options={{
            title: "Strategi Meredakan Nyeri",
          }}
        />

        <Stack.Screen
          name="NonFarmakologis"
          component={NonFarmakologisScreen}
          options={{
            title: "Redakan Tanpa Obat",
          }}
        />

        <Stack.Screen
          name="PantauNyeri"
          component={PantauNyeriScreen}
          options={{
            title: "Pantau Nyeri",
          }}
        />

        <Stack.Screen
          name="BijakPeredaNyeri"
          component={BijakPeredaNyeriScreen}
          options={{
            title: "Bijak Pereda Nyeri",
          }}
        />

        {/* Video Screen */}
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{
            title: "Video Animasi",
          }}
        />

        {/* Nyeri Screens */}
        <Stack.Screen
          name="UkurNyeri"
          component={UkurNyeriScreen}
          options={{
            title: "Ukur Nyerimu",
          }}
        />

        <Stack.Screen
          name="CatatPola"
          component={CatatPolaScreen}
          options={{
            title: "Catat Pola Nyeri",
          }}
        />

        <Stack.Screen
          name="RiwayatNyeri"
          component={RiwayatNyeriScreen}
          options={{
            title: "Riwayat Nyeri",
          }}
        />

        {/* Profile Sub-Screens */}
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: "Edit Profil",
          }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "Tentang Aplikasi",
          }}
        />

        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{
            title: "Bantuan Aplikasi",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
