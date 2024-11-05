import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Provider, useDispatch } from "react-redux";
import store from "@/store";
import "@/i18n";
import { UseDispatch } from "react-redux";

import ThemeProvider, { getTheme } from "@/components/ThemeProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function GetTheme() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the initial value here
    getTheme(dispatch); // replace with actual value
  }, [dispatch]);

  return null;
}

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require("@/assets/fonts/Shubbak-Regular.ttf"),
    medium: require("@/assets/fonts/Shubbak-Medium.ttf"),
    bold: require("@/assets/fonts/Shubbak-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GetTheme />
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
