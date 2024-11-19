import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { SPACING, SUBTITLE, VW } from "@/constants/Sizes";
import { router } from "expo-router";

type HotDealCardProps = {
  img: string;
};

export default function HotDealCard({ img }: HotDealCardProps) {
  const data = useSelector((state: RootState) => state.deals.mainBanner);
  const containerWidth = VW;
  const containerHeight = (containerWidth * 9) / 32;
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/main/offer/4")}>
        <Image
          source={{ uri: img }}
          style={{
            width: containerWidth / 2,
            height: containerHeight,
            borderRadius: SPACING * 2,
            marginRight: SPACING * 4,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}
