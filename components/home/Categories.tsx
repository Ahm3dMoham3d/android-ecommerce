import { View, Text, ViewStyle } from "react-native";
import React from "react";
import { SPACING, SUBTITLE } from "@/constants/Sizes";
import CategoryCard from "./CategoryCard";

export default function Categories({ style }: { style?: ViewStyle }) {
  const colNumber = 3;
  return (
    <View style={{ ...style }}>
      <Text
        style={{
          fontSize: SUBTITLE,
          fontFamily: "medium",
          marginBottom: SPACING * 2,
        }}
      >
        تصفح العديد من الفئات
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {Array.from({ length: 10 }).map((e, i) => {
          return (
            <View
              key={i}
              style={{
                width: `${100 / colNumber}%`,
                padding: SPACING,
                paddingVertical: SPACING * 2,
              }}
            >
              <CategoryCard />
            </View>
          );
        })}
      </View>
    </View>
  );
}
