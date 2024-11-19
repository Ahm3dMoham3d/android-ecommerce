import { View, Text } from "react-native";
import React from "react";
import ScreenContainer from "@/components/layout/ScreenContainer";
import Button from "@/components/ui/Button";
import { router } from "expo-router";
import GoogleButton from "@/components/ui/GoogleButton";
import { SPACING, SUBTITLE, TEXT } from "@/constants/Sizes";

export default function Profile() {
  return (
    <ScreenContainer>
      <View style={{ height: "100%", justifyContent: "space-between" }}>
        <View style={{ gap: SPACING * 4 }}>
          <Text style={{ fontSize: SUBTITLE, fontFamily: "medium" }}>
            الملف الشخصي
          </Text>
          <Button
            action={() => router.push("/choose-type")}
            label="تسجيل دخول"
          />
          <GoogleButton />
        </View>
        <Text
          style={{ fontSize: TEXT, fontFamily: "regular", textAlign: "center" }}
        >
          v 1.0
        </Text>
      </View>
    </ScreenContainer>
  );
}
