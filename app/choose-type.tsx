import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { SPACING, SUBTITLE, TEXT, TITLE } from "@/constants/Sizes";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link, router } from "expo-router";
export default function ChooseType() {
  const { colors } = useTheme();
  const customerTypes = [
    {
      label: "عملاء",
      val: "retail",
      icon: "box",
      to: "/(auth)/retail-signup",
    },
    {
      label: "اصحاب محلات",
      val: "wholesome",
      icon: "boxes-stacked",
      to: "/(auth)/wholesome-signup",
    },
  ];
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text
          style={{
            fontSize: TITLE * 1.4,
            fontFamily: "medium",
            marginBottom: SPACING * 6,
            textAlign: "center",
          }}
        >
          عملاء أو اصحاب محلات
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: SPACING * 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {customerTypes.map((e, i) => {
            return (
              <Pressable
                onPress={() =>
                  router.push(
                    e.to as "/(auth)/wholesome-signup" | "/(auth)/retail-signup"
                  )
                } // Type assertion added
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.primary,
                  borderRadius: SPACING,
                  padding: SPACING * 6,
                  minWidth: SPACING * 40,
                }}
                key={i}
              >
                <FontAwesome6 name={e.icon} size={SPACING * 10} color="white" />
                <Text
                  style={{
                    fontSize: SUBTITLE,
                    fontFamily: "medium",
                    color: "white",
                    textAlign: "center",
                    marginTop: SPACING * 1.5,
                  }}
                >
                  {e.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Link
          style={{
            textAlign: "center",
            marginTop: SPACING * 4,
            fontFamily: "medium",
            fontSize: TEXT,
            color: colors.primary,
          }}
          href={"/auth"}
        >
          تمتلك حساب بالفعل ؟ قم بتسجيل الدخول
        </Link>
      </View>
    </SafeAreaView>
  );
}
