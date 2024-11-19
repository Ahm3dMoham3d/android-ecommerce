import { SPACING, TEXT } from "@/constants/Sizes";
import { View, Text } from "react-native";

export default function FormError({ err }: { err: string }) {
  return (
    <View style={{ marginVertical: SPACING * 1.5 }}>
      <Text style={{ fontFamily: "regular", color: "#E74C3C", fontSize: TEXT }}>
        {err}
      </Text>
    </View>
  );
}
