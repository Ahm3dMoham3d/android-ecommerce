import { View, TouchableOpacity, Text, ViewStyle } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { SPACING, TEXT } from "@/constants/Sizes";

export default function ChangeType({ style }: { style?: ViewStyle }) {
  const { colors } = useTheme();
  const [customerType, setCustomerType] = useState<"retail" | "wholesome">(
    "retail"
  );
  const customerTypes = [
    {
      label: "العملاء",
      val: "retail",
      icon: "box",
    },
    {
      label: "أصحاب المحلات",
      val: "wholesome",
      icon: "boxes-stacked",
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        gap: SPACING * 2,
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
    >
      <Text style={{ fontSize: TEXT, fontFamily: "medium" }}>
        يتم الأن عرض منتجات
      </Text>
      <View style={{ flexDirection: "row", gap: SPACING * 2 }}>
        {customerTypes.map((e, i) => {
          return (
            <TouchableOpacity
              onPress={() => setCustomerType(e.val as "retail" | "wholesome")}
              style={{
                flexDirection: "row",
                gap: SPACING * 2,
                padding: SPACING * 2,
                borderRadius: SPACING,

                backgroundColor: customerType === e.val ? "#D9ECFF" : "white",
              }}
              key={i}
            >
              <FontAwesome6
                name={e.icon}
                size={20}
                color={customerType === e.val ? colors.primary : colors.text}
              />
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: TEXT,
                  color: customerType === e.val ? colors.primary : colors.text,
                }}
              >
                {e.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
