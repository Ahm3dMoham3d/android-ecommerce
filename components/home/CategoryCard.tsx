import { View, Text, TouchableOpacity, Image } from "react-native";
import { SPACING, VW } from "@/constants/Sizes";
import { router } from "expo-router";

export default function CategoryCard() {
  const containerWidth = VW;
  const containerHeight = (containerWidth * 4) / 12;
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/main/category/[id]",
          params: { category: "معلبات", id: 3 },
        })
      }
      style={{
        width: "100%",
        height: containerHeight,
      }}
    >
      <Image
        style={{ width: "100%", height: "80%", borderRadius: SPACING }}
        source={{
          uri: "https://pelicanstateofmind.com/wp-content/uploads/2020/05/Canned-GOod-HEader-Image.jpg",
        }}
      />
      <View
        style={{
          width: "100%",
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontFamily: "medium" }}>
          معلبات
        </Text>
      </View>
    </TouchableOpacity>
  );
}
