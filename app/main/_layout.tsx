import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Layout() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "medium" },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="category/[id]"
        options={({ route }: any) => {
          const decodedTitle = decodeURIComponent(route.params?.category || "");
          return {
            headerShown: true,
            title: decodedTitle || "Default Title",
          };
        }}
      />

      <Stack.Screen
        name="offer/[id]"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
