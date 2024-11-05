import { View, Text, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { setTheme } from "@/store/theme";

export default function ThemeSwitcher() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  type ThemesType = {
    label: string;
    val: "auto" | "light" | "dark";
    icon: string;
  };
  const themes: ThemesType[] = [
    {
      label: "Light",
      val: "light",
      icon: "sunny",
    },
    {
      label: "Dark",
      val: "dark",
      icon: "moon",
    },
    {
      label: "Auto",
      val: "auto",
      icon: "contrast",
    },
  ];

  const changeTheme = async (theme: "auto" | "light" | "dark") => {
    await AsyncStorage.setItem("theme", theme);
    dispatch(setTheme(theme));
  };

  return (
    <View>
      <Text>App Theme</Text>
      <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        {themes.map((e, i) => {
          return (
            <Pressable
              key={i + 1}
              style={{
                backgroundColor:
                  theme == e.val ? colors.primary : "transparent",
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 4,
                padding: 12,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              onPress={() => changeTheme(e.val)}
            >
              <Ionicons
                name={e.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={theme == e.val ? "white" : colors.text}
              />
              <Text style={{ color: theme == e.val ? "white" : colors.text }}>
                {e.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
