import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { TEXT } from "@/constants/Sizes";
type ButtonVariant = "default" | "outline" | "ghost";
type ButtonProps = {
  label: string;
  action(): void;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
};

export default function Button({
  label,
  action,
  style,
  variant = "default",
}: ButtonProps) {
  const { colors } = useTheme();
  const buttonVariants = StyleSheet.create({
    default: {
      backgroundColor: colors.primary,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.primary,
    },

    ghost: {
      backgroundColor: "transparent",
      color: colors.primary,
    },
  });

  const buttonVariant = (variant: ButtonVariant) => {
    if (variant === "ghost") {
      return buttonVariants.ghost;
    } else if (variant === "outline") {
      return buttonVariants.outline;
    } else {
      return buttonVariants.default;
    }
  };

  return (
    <TouchableOpacity
      style={[{ padding: 8, borderRadius: 4 }, style, buttonVariant(variant)]}
      onPress={action}
    >
      <Text
        style={{
          fontFamily: "medium",
          textAlign: "center",
          fontSize: TEXT,
          color:
            variant === "default"
              ? "white"
              : variant === "outline"
              ? colors.primary
              : variant === "ghost"
              ? colors.text
              : "",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
