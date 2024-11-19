import { ImageBackground, SafeAreaView, ScrollView } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SPACING } from "@/constants/Sizes";
import { useTheme } from "@react-navigation/native";
export default function _layout() {
  const bg = require("@/assets/images/auth.jpg");
  const { colors } = useTheme();

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "flex-end" }}
      source={bg}
    >
      <SafeAreaView
        style={{
          paddingHorizontal: SPACING * 4,
          paddingVertical: SPACING * 6,

          backgroundColor: colors.background,
          height: "80%",
          borderTopRightRadius: SPACING * 4,
          borderTopLeftRadius: SPACING * 4,
        }}
      >
        <ScrollView
          style={{ height: "100%", maxWidth: 540, marginHorizontal: "auto" }}
        >
          <Slot />
        </ScrollView>
      </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
}
