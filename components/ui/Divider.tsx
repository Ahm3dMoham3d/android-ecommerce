import { SPACING } from "@/constants/Sizes";
import { useTheme } from "@react-navigation/native";
import { View, Text, StyleProp, ViewStyle } from "react-native";

type DividerProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
};

export default function Divider({ text, style }: DividerProps) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        style,
      ]}
    >
      <View
        style={{
          borderColor: colors.border,
          borderWidth: 0.5,
          width: text ? "45%" : "100%",
          height: 1,
        }}
      ></View>
      {text && <Text style={{ fontFamily: "regular" }}>{text}</Text>}

      {text && (
        <View
          style={{
            borderColor: colors.border,
            borderWidth: 0.5,
            width: "45%",
            height: 1,
          }}
        ></View>
      )}
    </View>
  );
}
