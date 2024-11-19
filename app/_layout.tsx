import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Provider } from "react-redux";
import store from "@/store";
import { AppTheme } from "@/constants/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded] = useFonts({
    regular: require("@/assets/fonts/Shubbak-Regular.ttf"),
    medium: require("@/assets/fonts/Shubbak-Medium.ttf"),
    bold: require("@/assets/fonts/Shubbak-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      AsyncStorage.removeItem("@viewedOnBoarding");
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={AppTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="choose-type" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="main" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
