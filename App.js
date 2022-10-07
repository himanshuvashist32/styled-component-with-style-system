import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { ThemeProvider } from "styled-components/native";
import baseTheme, { themeModeEnum } from "./theme";
import { merge, get } from "lodash-es";
import PageOne from "./PageOne";
import { useEffect, useState } from "react";

const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export default function App() {
  const [themeMode, setThemeMode] = useState(themeModeEnum.dark);

  const theme = getTheme(themeMode);
  const toggleTheme = () => {
    setThemeMode(
      themeMode === themeModeEnum.light
        ? themeModeEnum.dark
        : themeModeEnum.light
    );
  };

  return (
    // <ThemeContext.Provider value={toggleTheme}>
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PageOne />
      </View>
      <Button onPress={toggleTheme} title="Toogle theme" />
    </ThemeProvider>
    // </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
