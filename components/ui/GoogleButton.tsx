import { Text, TouchableOpacity, ViewStyle, Image } from "react-native";
import React from "react";
import { SPACING, TEXT } from "@/constants/Sizes";

export default function GoogleButton({ style }: { style?: ViewStyle }) {
  const googleIcon = require("@/assets/images/google_icon.png");
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: SPACING * 2,
        borderRadius: SPACING,
        flexDirection: "row",
        justifyContent: "center",
        gap: SPACING * 2,
        ...style,
      }}
    >
      <Text
        style={{
          fontFamily: "medium",
          fontSize: TEXT,

          textAlign: "center",
        }}
      >
        المتابعة بحساب جوجل
      </Text>
      <Image style={{ width: 25, height: 25 }} source={googleIcon} />
    </TouchableOpacity>
  );
}
