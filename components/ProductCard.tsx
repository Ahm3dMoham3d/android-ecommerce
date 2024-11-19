import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { SPACING, VW } from "@/constants/Sizes";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

export default function ProductCard() {
  const containerWidth = VW;
  const containerHeight = (containerWidth * 5) / 12;
  const { colors } = useTheme();
  const [qty, setQty] = useState(0);
  return (
    <View
      style={{
        width: "100%",
        height: containerHeight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: SPACING,
          alignItems: "center",
          padding: 4 * 1,
        }}
      >
        <Ionicons name="heart-outline" size={24} color={"gray"} />
        <View
          style={{
            backgroundColor: "gray",
            padding: SPACING,
            borderRadius: SPACING,
          }}
        >
          <Text style={{ fontFamily: "regular", color: "white", fontSize: 12 }}>
            المنتج غير متوفر
          </Text>
        </View>
      </View>
      <Image
        style={{ width: "100%", height: "70%", borderRadius: SPACING }}
        source={{
          uri: "https://i.pinimg.com/originals/d9/df/52/d9df52fc0b122fd6424113f631348c17.png",
        }}
      />

      <View
        style={{
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 16,
          position: "absolute",
          bottom: 24,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: qty > 0 ? "white" : undefined,
            borderRadius: SPACING * 2,
            flexDirection: "row",
            justifyContent: qty > 0 ? "space-between" : "flex-end",
            alignItems: "center",
            elevation: qty > 0 ? 4 : undefined,
          }}
        >
          {qty > 0 && (
            <TouchableOpacity onPress={() => setQty((val) => val - 1)}>
              <View
                style={{
                  backgroundColor: colors.background,
                  paddingVertical: SPACING * 2,
                  paddingHorizontal: SPACING * 2,
                  borderRadius: SPACING * 2,
                }}
              >
                <Ionicons name="remove" size={12} color={"black"} />
              </View>
            </TouchableOpacity>
          )}

          {qty > 0 && (
            <View>
              <Text
                style={{
                  fontFamily: "bold",
                }}
              >
                {qty}
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={() => setQty((val) => val + 1)}>
            <View
              style={{
                backgroundColor: colors.primary,
                paddingVertical: SPACING * 2,
                paddingHorizontal: SPACING * 2,
                borderRadius: SPACING * 2,
                elevation: qty <= 0 ? 4 : undefined,
              }}
            >
              <Ionicons name="add" size={12} color={"white"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: containerHeight,
          padding: 4 * 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: SPACING * 2,
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{ textAlign: "left", fontFamily: "medium", fontSize: 16 }}
          >
            120
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontFamily: "medium",
              fontSize: 14,
              textDecorationLine: "line-through",
              color: "red",
            }}
          >
            140
          </Text>
        </View>

        <Text
          style={{ textAlign: "left", fontFamily: "regular", fontSize: 12 }}
        >
          وصف المنتج لشيبسي ليز مكون من كلمات عشوائية
        </Text>
      </View>
    </View>
  );
}
