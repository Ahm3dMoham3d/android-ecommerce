import { View, Text, ScrollView, ViewStyle } from "react-native";
import React from "react";
import { SPACING, SUBTITLE, TEXT } from "@/constants/Sizes";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import HotDealCard from "./HotDealCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";

export default function HotDeals({ style }: { style?: ViewStyle }) {
  const deals = useSelector((e: RootState) => e.deals.hotDeals);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: SPACING * 2,
          marginBottom: SPACING * 3,
          justifyContent: "space-between",
          ...style,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SPACING * 2,
          }}
        >
          <Text
            style={{
              fontSize: SUBTITLE,
              fontFamily: "medium",
            }}
          >
            عروض متتفوتش
          </Text>
          <FontAwesome6 name="fire-flame-curved" size={21} color="red" />
        </View>
        <Link
          style={{
            fontSize: TEXT,
            fontFamily: "medium",
          }}
          href={"/"}
        >
          عرض الجميع{" "}
        </Link>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {deals.map((e, i) => {
          return <HotDealCard key={i} img={e.img} />;
        })}
      </ScrollView>
    </>
  );
}
