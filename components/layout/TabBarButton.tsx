import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { SPACING } from "@/constants/Sizes";
type TabBarButtonProps = {
  isFocused: boolean;
  label: string;
  routeName: string;
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
};
export default function TabBarButton({
  isFocused,
  label,
  routeName,
  onLongPress,
  onPress,
}: TabBarButtonProps) {
  const { colors } = useTheme();
  const icons = {
    index: (props: any) => <Feather size={20} name="home" {...props} />,
    cart: (props: any) => <Feather size={20} name="shopping-cart" {...props} />,
    search: (props: any) => <Feather size={20} name="search" {...props} />,
    profile: (props: any) => <Feather size={20} name="user" {...props} />,
  };

  const styles = StyleSheet.create({
    tabBarItem: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: SPACING,
    },
  });

  return (
    <Animated.View
      style={[
        styles.tabBarItem,
        isFocused
          ? {
              backgroundColor: "#D9ECFF",
              paddingHorizontal: SPACING * 4,
              paddingVertical: SPACING * 2,
              borderRadius: SPACING * 2,
            }
          : {},
      ]}
      layout={FadeInLeft.springify().damping(80).stiffness(200)}
    >
      <Pressable
        key={routeName}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {icons[routeName as keyof typeof icons]({
          color: isFocused ? colors.primary : colors.text,
        })}

        {isFocused && (
          <Text
            style={{
              color: isFocused ? colors.primary : colors.text,
              fontFamily: "regular",
              fontSize: 14,
            }}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </Animated.View>
  );
}
