import { View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING, SUBTITLE } from "@/constants/Sizes";
import ProductCard from "@/components/ProductCard";
export default function Category() {
  const { category } = useLocalSearchParams();
  const colNumber = 3;
  return (
    <SafeAreaView style={{ paddingHorizontal: SPACING * 4 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Array.from({ length: 10 }).map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  width: `${100 / colNumber}%`,
                  padding: SPACING,
                  paddingBottom: SPACING * 24,
                }}
              >
                <ProductCard />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
