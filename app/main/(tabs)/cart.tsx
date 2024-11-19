import { View, Text } from "react-native";
import React from "react";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { SUBTITLE, TEXT } from "@/constants/Sizes";

export default function Cart() {
  return (
    <ScreenContainer>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: SUBTITLE, fontFamily: "regular" }}>
          لا توجد منتجات في العربة
        </Text>
      </View>
    </ScreenContainer>
  );
}
