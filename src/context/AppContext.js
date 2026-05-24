/**
 * Context untuk State Management Global (opsional)
 * Dapat digunakan untuk menyimpan data user, settings, dll
 */

import React, { createContext, useCallback, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [appSettings, setAppSettings] = useState({
    language: "id",
    theme: "light",
    notifications: true,
  });

  const updateUserData = useCallback((data) => {
    setUserData(data);
  }, []);

  const updateSettings = useCallback((settings) => {
    setAppSettings((prev) => ({ ...prev, ...settings }));
  }, []);

  const value = {
    userData,
    updateUserData,
    appSettings,
    updateSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Custom Hook untuk menggunakan AppContext
 */
export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext harus digunakan di dalam AppProvider");
  }
  return context;
}
